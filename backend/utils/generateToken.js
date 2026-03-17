import jwt from "jsonwebtoken";

const generateToken = (userId, role) => {

  const tokenValue = jwt.sign(
    {
      id: userId,
      role: role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d"
    }
  );

  return tokenValue;
};

export default generateToken;