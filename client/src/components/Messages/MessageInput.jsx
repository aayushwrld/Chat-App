import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='px-4 my-3 flex'>
			<div className='w-full flex relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit' className='ml-2 flex items-center text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md'>
					<BsSend />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;
