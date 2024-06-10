import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:8000/api/auth/login", {
                username,
                password
            });

            const data = res.data;
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            const errorMessage = error.response?.data?.error || error.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
}
