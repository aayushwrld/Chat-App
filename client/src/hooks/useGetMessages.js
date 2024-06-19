import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";


import {toast} from "sonner";
import { messagesState, selectedConversationState } from "../atoms/useConversation";
import { getCookie } from "../utils/cookies";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useRecoilState(messagesState);
    const selectedConversation = useRecoilValue(selectedConversationState);
    const token = getCookie("jwt")

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`http://localhost:8000/api/messages/${selectedConversation._id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json" 
                    }
                });
                setMessages(res.data)
            } catch (error) {
                toast.error(error.response?.data?.error || error.message);
                throw new Error(error.response?.data?.error || error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation, setMessages]);

    return { messages, loading };
};

export default useGetMessages;
