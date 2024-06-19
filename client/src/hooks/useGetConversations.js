import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { getCookie } from "../utils/cookies";

function useGetConversations() {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const token = getCookie("jwt")

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axios.get("http://localhost:8000/api/users",{
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json" 
                    }});
                const data = res.data;
                setConversations(data);
            } catch (error) {
                const errorMessage = error.response?.data?.error || error.message;
                toast.error(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
}

export default useGetConversations;
