import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";

const db = new Database("bookmyplan.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    email TEXT,
    destination TEXT,
    travel_dates TEXT,
    budget TEXT,
    travelers INTEGER,
    preferences TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS newsletter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/leads", (req, res) => {
    const { name, phone, email, destination, travelDates, budget, travelers, preferences } = req.body;
    try {
      const stmt = db.prepare(`
        INSERT INTO leads (name, phone, email, destination, travel_dates, budget, travelers, preferences)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(name, phone, email, destination, travelDates, budget, travelers, preferences);
      res.status(201).json({ success: true, message: "Lead captured successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to capture lead" });
    }
  });

  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    try {
      const stmt = db.prepare("INSERT INTO newsletter (email) VALUES (?)");
      stmt.run(email);
      res.status(201).json({ success: true, message: "Subscribed successfully" });
    } catch (error) {
      if ((error as any).code === 'SQLITE_CONSTRAINT') {
        return res.status(400).json({ success: false, message: "Email already subscribed" });
      }
      res.status(500).json({ success: false, message: "Subscription failed" });
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    try {
      const stmt = db.prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
      stmt.run(name, email, message);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to send message" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
