import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "sonner";
import { deleteCookie } from "../utils/cookies";
import axios from 'axios';
import { loginCheck } from "../utils/loginCheck";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:8000/api/auth/logout",{
                headers: { "Content-Type": "application/json" }
            });

            const data = res.data;
            if (data.error) {
                throw new Error(data.error);
            }

            deleteCookie("jwt");
            deleteCookie("username");
            setAuthUser(loginCheck());
        } catch (error) {
            const errorMessage = error.response?.data?.error || error.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};
export default useLogout;