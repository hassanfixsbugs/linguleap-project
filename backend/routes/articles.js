import express from "express";
import { fetchArticles } from "../controllers/articlesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Get all articles
 *     description: Retrieve a list of all available articles for learning
 *     tags: [Articles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Learn Arabic Through News"
 *                   summary:
 *                     type: string
 *                     example: "A simple introduction to Arabic reading using daily news."
 *                   content:
 *                     type: string
 *                     example: "Arabic news articles are a great way to learn authentic vocabulary and structure."
 *                   imageUrl:
 *                     type: string
 *                     example: "/AlJazzera.png"
 *                   category:
 *                     type: string
 *                     example: "Education"
 *                   difficulty:
 *                     type: string
 *                     example: "Beginner"
 *                   source:
 *                     type: string
 *                     example: "Al Jazeera"
 *                   totaltime:
 *                     type: string
 *                     example: "5 min"
 *                   categoryimg:
 *                     type: string
 *                     example: "/politics.png"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Not authorized, no token"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to fetch articles"
 */
router.get("/", protect, fetchArticles);

export default router;