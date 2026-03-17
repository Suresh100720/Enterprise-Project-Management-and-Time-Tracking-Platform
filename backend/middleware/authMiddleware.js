import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authenticateUser = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        message: "Unauthorized access"
      });
    }

    const tokenValue = authHeader.split(" ")[1];

    const decodedToken = jwt.verify(
      tokenValue,
      process.env.JWT_SECRET
    );

    const userRecord = await User.findById(decodedToken.id);

    if (!userRecord) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    req.user = userRecord;

    next();

  } catch (errorObject) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};