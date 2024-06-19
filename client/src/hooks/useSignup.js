import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { setCookie } from "../utils/cookies";
import { loginCheck } from "../utils/loginCheck";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await axios.post("http://localhost:8000/api/auth/signup", {
                fullName,
                username,
                password,
                confirmPassword,
                gender,
            }, {
                headers: { "Content-Type": "application/json" }
            });

            const data = res.data;
            if (data.error) {
                throw new Error(data.error);
            }
            setCookie("username", data.username, 365);
            setCookie("jwt", data.token, 365);
            setAuthUser(loginCheck()); 
            toast.success("User Created!")
        } catch (error) {
            const errorMessage = error.response?.data?.error || error.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}
