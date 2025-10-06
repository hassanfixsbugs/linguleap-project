import pool from "./db.js";

export const getArticles = async () => {
  const result = await pool.query("SELECT * FROM articles ORDER BY id ASC");
  return result.rows;
};
