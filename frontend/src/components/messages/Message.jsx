import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversatin";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilepic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilepic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center  text-white'>{formattedTime}</div>
		</div>
	);
};
export default Message;






// const Message = () => {
//   return (
//     <div className={'chat chat-end'}>
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img src="././public/samadimg.jpg"  />
// 				</div>
// 			</div>
// 			<div className={`chat-bubble text-white  pb-2 bg-blue-500`}>slam</div>
// 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:47</div>
// 		</div>
//   )
// }

// export default Message
