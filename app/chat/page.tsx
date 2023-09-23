import ChatHeader from './components/header'
import ChatMessages from './components/messages'
import { messages } from './data/messages'

export default function ChatPage() {
	return (
		<>
			<ChatHeader />
			<ChatMessages messages={messages} />
		</>
	)
}
