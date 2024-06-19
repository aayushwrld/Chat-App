import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios"
import {toast} from "sonner";
import { messagesState, selectedConversationState } from "../atoms/useConversation";
import { getCookie } from "../utils/cookies";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useRecoilState(messagesState);
    const selectedConversation = useRecoilValue(selectedConversationState);
    const token = getCookie("jwt")
    
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await axios.post(`http://localhost:8000/api/messages/send/${selectedConversation._id}`,
                { message },
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json" 
                    }
                }
            );
            const data = res.data;
            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
