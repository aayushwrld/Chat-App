import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "sonner";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            // Check if the response body is not empty
            const text = await res.text();
            const data = text ? JSON.parse(text) : {};

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);
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