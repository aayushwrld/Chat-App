import jwt from "jsonwebtoken";

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
};

// * We put httpOnly true to prevent from XSS attacks (cross-site scripting attacks)
// * We put sameSite ans strict to prevent from CSRF attacks

export default generateTokenAndSetCookie;