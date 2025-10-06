import express from "express";
import { fetchArticles } from "../controllers/articlesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, fetchArticles);

export default router;
