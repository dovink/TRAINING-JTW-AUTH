import User from "../Models/UserSchema.js";
import { generateToken } from "../utils/Generate-token.js";

export const register = async (req, res) => {
    try {
        const user = req.body;
        const userExist = await User.findOne({ email: user.email });
        if (userExist) {
            return res.status(400).json({ message: "Toks klientas jau egzistuoja" })
        }
        const newUser = new User(user);
        await newUser.save();
        return res.status(201).json({ message: "Klientas užregistruotas sėkmingai" });
    }
    catch (error) {
        return res.status(500).json({ message: "Įvyko klaida registruojant nauja klienta.", error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Prašome įrašyti el. pašto adresą ir slaptažodį" })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Vartotojas su tokiu pašto adresu nerastas" })
        }
        if (!(await user.isCorrectPassword(password))) {
            return res.status(401).json({ message: "Įvestas neteisingas slaptažodis" })
        }

        const token = generateToken({ id: user._id });

        const userDataWithoutPassword = await User.findById(user._id).select("-password");

        return res.status(200).json({ token, user: userDataWithoutPassword });

    } catch (error) {
        return res.status(500).json({ message: "Įvyko klaida bandant prisijungti", error: error.message });
    }
}