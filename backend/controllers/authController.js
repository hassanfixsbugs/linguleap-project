import bcrypt from "bcrypt";
import { User, getUserByEmail } from "../models/userModel.js";
import { generateToken } from "../generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: "Name, email and password are required" });

    const existing = await getUserByEmail(email);
    if (existing) return res.status(409).json({ error: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const created = await User.create({ name, email, password: hashed });
    const token = generateToken({ userId: created.id, name: created.name, email: created.email });
    return res.status(201).json({ token });
  } catch (e) {
    console.error("POST /auth/signup error:", e);
    return res.status(500).json({ error: "Signup failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password are required" });

    const user = await getUserByEmail(email);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken({ userId: user.id, name: user.name, email: user.email });
    return res.json({ token });
  } catch (e) {
    console.error("POST /auth/login error:", e);
    return res.status(500).json({ error: "Login failed" });
  }
};

export const me = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Not authorized" });
    return res.json({ id: req.user.id, name: req.user.name, email: req.user.email });
  } catch {
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
};