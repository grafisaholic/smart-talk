import { type Message } from "ai";
import React from "react";

import { ChatMessage } from "./chat-message";

interface ChatListProps {
	messages: Message[];
}

export function ChatList({ messages }: ChatListProps) {
	if (!messages.length) {
		return null;
	}

	return (
		<div className="relative mx-auto max-w-3xl px-4">
			{messages.map((message, i) => (
				<div key={i}>
					<ChatMessage message={message} />
				</div>
			))}
		</div>
	);
}
