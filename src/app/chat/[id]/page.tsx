import React from "react";

import { Sidebar } from "@/components/sidebar";
import ChatPanel from "@/components/chat-panel";
import { ChatList } from "@/components/chat-list";

import { getChat } from "@/lib/kv";

interface ChatDetailProps {
	params: {
		id: string;
	};
}

async function ChatDetail({ params }: ChatDetailProps) {
	const chat = await getChat(params.id, "dkjgsf8kjbsdv7876323534");

	return (
		<section className="relative flex h-full overflow-hidden">
			<Sidebar className="hidden lg:block" />

			<div className="group overflow-auto w-full">
				<div className="pb-[200px] pt-4 md:pt-10">
					{chat?.messages && (
						<>
							<ChatList messages={chat?.messages} />
						</>
					)}
				</div>

				<ChatPanel id={chat?.id} />
			</div>
		</section>
	);
}

export default ChatDetail;
