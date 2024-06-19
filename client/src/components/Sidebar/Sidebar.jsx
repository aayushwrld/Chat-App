import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 flex flex-col p-6'>
			<div className='divider px-3'>Chats</div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;