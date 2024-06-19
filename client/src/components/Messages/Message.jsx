import { useRecoilValue } from 'recoil';
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import { selectedConversationState } from "../../atoms/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const selectedConversation = useRecoilValue(selectedConversationState);
	const fromMe = message.senderId === authUser.id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? `https://avatar.iran.liara.run/public/boy?username=${authUser.username}` : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	console.log("Message senderId:", message.senderId);
	console.log("Authenticated user ID:", authUser);
	console.log("From me:", fromMe);
	console.log("Bubble background color:", bubbleBgColor);

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${bubbleBgColor} ${shakeClass} pb-2 text-white`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};

export default Message;
