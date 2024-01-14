import User from "@/graphql/models/userModel";
import tokenGenerator from "@/pages/helpers/tokenGenerator";
import bcrypt from "bcrypt";


export default {
    registerUser:async (_,{ username, email, password }) => {
        try {
            const user = new User({ username, email, password });
            await user.save();
            return user;
        } catch (error) {
            throw new Error('Registration failed');
        }
    },

    userLogin : async (_,{ email, password }) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return  new Error('User not found');
            }

            const passwordMatch = await bcrypt.compare(password, user?.password);

            if (!passwordMatch) {
                return new Error('Incorrect password');
            }
            const options = { userId: user._id, email: user.email, username: user.username };
            const token = tokenGenerator(options);
            return { user, token };
        } catch (error) {
            throw new Error(error);
        }
    }

}