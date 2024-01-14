const jwt = require('jsonwebtoken');

const tokenGenerator = (options) => {
    return jwt.sign(options, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
}

export default tokenGenerator;