import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import articlesRoutes from "./routes/articles.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/articles", articlesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port "${PORT}"`));