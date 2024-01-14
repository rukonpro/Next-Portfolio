import mongoose from "mongoose";
const databaseConnection = async () => {
    try {
        return  await mongoose.connect(process.env.DB_URL);
    } catch (error) {
        throw new Error(error);
    }

}
export default databaseConnection;