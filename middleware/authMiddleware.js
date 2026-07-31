const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY


function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header missing"
        });
    }

    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Invalid Authorization format"
        });
    }
    const token = authHeader.split(" ")[1];
    try {

        const payload = jwt.verify(token, SECRET_KEY);

        req.user = payload;


        return next();

    } catch (error) {
        console.log(error.message)
        return res.status(401).json({
            success: false,
            message: "Invalid or Expired Token"
        });

    }
}

module.exports = authenticateToken;