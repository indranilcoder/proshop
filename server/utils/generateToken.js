import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      expiresIn: "30d",
    }
  );
};

export { generateToken };
