import pool from "./db.js";

export const getUserByUsername = async (username) => {
  const result = await pool.query(
    "SELECT id, username, password FROM users WHERE username = $1 LIMIT 1",
    [username]
  );
  return result.rows[0] || null;
};
