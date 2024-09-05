import User from "../Models/UserSchema.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        if (users.length === 0) {
            return res.status(404).json({ message: "Vartotojai nerasti" });
        }

        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: "Įvyko serverio klaida", error: error.message });
    }
};
