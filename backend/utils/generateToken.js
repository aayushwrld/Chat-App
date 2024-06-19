import jwt from "jsonwebtoken";
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve('../../.env') });

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });

    // Return the token along with setting the cookie
    return token;
};

export default generateTokenAndSetCookie;
