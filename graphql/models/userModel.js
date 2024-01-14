// models/User.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        enum: ['ADMIN', 'REVIEWER', 'USER'],
        default: 'USER',
    },
    password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password') || user.isNew) {
        try {
            user.password = await bcrypt.hash(user.password, 10);
        } catch (error) {
            return next(error);
        }
    }
    return next();
});
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User