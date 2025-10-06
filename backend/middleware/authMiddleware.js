import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Not authorized, no token" });
    }

    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res
        .status(500)
        .json({ error: "Server misconfiguration: JWT secret missing" });
    }

    const decoded = jwt.verify(token, secret);
    req.user = { id: decoded.userId, username: decoded.username };
    return next();
  } catch (error) {
    console.error("JWT auth error:", error);
    return res.status(401).json({ error: "Not authorized" });
  }
};
