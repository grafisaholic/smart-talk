import { type Message } from "ai";
import React from "react";

import { ChatMessage } from "@/components/chat-message";
import { Separator } from "@/components/ui/separator";

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
					{i < messages.length - 1 && <Separator className="my-4 md:my-8" />}
				</div>
			))}
		</div>
	);
}
