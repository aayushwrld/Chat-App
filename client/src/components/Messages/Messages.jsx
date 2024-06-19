import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import { BarLoader } from 'react-spinners';

const Messages = () => {
    const { messages, loading } = useGetMessages();
    console.log(messages, "messages");
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-auto relative'>
            {!loading &&
                messages.length > 0 &&
                messages.map((message, index) => (
                    <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                        <Message message={message} />
                    </div>
                ))}

            {loading &&
                <div className="absolute inset-0 flex items-center justify-center">
                    <BarLoader height={4} color={"#4F46E5"} />
                </div>
            }
            
            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;
