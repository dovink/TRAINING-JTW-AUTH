import jwt from "jsonwebtoken";


export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).send({ error: "Klientas neatpažintas" })
        return;
    }
    try {
        const token = authHeader.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.currentUser = payload;
    } catch (error) {
        res.status(401).send({ error: "Klientas neatpažintas" });
        return;
    }
    next();
}