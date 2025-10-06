import bcrypt from "bcrypt";
import { getUserByUsername } from "../models/userModel.js";
import { generateToken } from "../generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken({ userId: user.id, username: user.username });
    return res.json({ token });
  } catch (error) {
    console.error("POST /auth/login error:", error);
    return res.status(500).json({ error: "Login failed" });
  }
};

export const me = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }
    return res.json({ id: req.user.id, username: req.user.username });
  } catch (error) {
    console.error("GET /auth/me error:", error);
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
};
