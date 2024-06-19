import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		// Ensure that req.user contains the logged-in user's ID
		const loggedInUserId = req.user._id;

		// Fetch all users except the logged-in user, excluding the password field
		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		// Respond with the filtered user list
		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		// Respond with an error message in case of an exception
		res.status(500).json({ error: "Internal server error" });
	}
};
