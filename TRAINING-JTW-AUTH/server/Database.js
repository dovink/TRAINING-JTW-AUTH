import 'dotenv/config'
import mongoose from "mongoose";


export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, { dbName: "JWT_auth" })
        console.log("Sėkmingai prisijungta prie duomenų bazės")
    } catch (error) {
        console.error("Nepavyko prisijungti prie duomenų bazės", error);
        process.exit(1);
    }
}