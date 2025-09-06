import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const listings = [
  { id: 1, teacher: "Lina Haddad", title: "React for Beginners", location: "Remote / Beirut", rating: 4.9 },
  { id: 2, teacher: "Amine K.", title: "Conversational French B1→B2", location: "Casablanca, MA", rating: 4.8 },
];

app.get("/api/health", (_req, res) => res.json({ ok: true, time: new Date() }));
app.get("/api/listings", (_req, res) => res.json(listings));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
