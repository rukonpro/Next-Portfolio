import jwt from "jsonwebtoken";

const SECRET_KEY = process?.env?.JWT_SECRET_KEY;

const authenticateUser = (req) => {

    if(!req?.headers?.authorization){
        return "Token has expired";
    }
    // Extract the token from the Authorization header
    const token = req?.headers?.authorization?.split(" ")[1] || "";

    return new Promise((resolve, reject) => {
        if (!token) {
            resolve(null); // No token provided
        } else {
            // Verify the token
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) {
                    resolve(null); // Token verification failed
                } else {
                    // Token is valid, resolve with the decoded user information
                    resolve(decoded.user);
                }
            });
        }
    });
};

export default authenticateUser