import jwt from "jsonwebtoken"

export const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRES_IN,
    });
    return token;
}