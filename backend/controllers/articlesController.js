import { getArticles } from "../models/articleModel.js";

export const fetchArticles = async (req, res) => {
  try {
    const articles = await getArticles();
    res.json(articles);
  } catch (error) {
    console.error("GET /articles error:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
};
