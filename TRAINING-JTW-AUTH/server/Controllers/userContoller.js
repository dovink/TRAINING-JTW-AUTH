import User from "../Models/UserSchema.js";

export const getCurrentUser = async (req, res) => {
    const currentUserId = req.currentUser.id;
    try {
        const user = await User.findById(currentUserId).select("-password");
        if (!user) {
            res.status(400).json({ message: "Vartotojas nerastas" });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: "Vartotojas nerastas", error });
    }
}