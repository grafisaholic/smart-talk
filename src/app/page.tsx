"use client";

import { useChat, type Message } from "ai/react";

import ChatPanel from "@/components/chat-panel";
import { Sidebar } from "@/components/sidebar";
import { ChatList } from "@/components/chat-list";

interface ChatProps extends React.ComponentProps<"div"> {
	initialMessages?: Message[];
	id?: string;
}

export default function Home({ id, initialMessages, className }: ChatProps) {
	const { messages, append, reload, stop, isLoading, input, setInput } =
		useChat({
			// initialMessages,
			// id,
			body: {
				id,
				previewToken: "",
			},
			// onResponse(response) {
			//   if (response.status === 401) {
			//     toast.error(response.statusText)
			//   }
			// }
		});

	console.log("message", messages, append);

	return (
		<section>
			<div className="relative flex h-screen overflow-hidden">
				<Sidebar className="hidden lg:block" />

				<div className="lg:border-l w-full">
					{messages.length && (
						<>
							<ChatList messages={messages} />
						</>
					)}
					<div className="h-full px-4 py-6 lg:px-8">
						<ChatPanel
							id={id}
							isLoading={isLoading}
							stop={stop}
							append={append}
							reload={reload}
							messages={messages}
							input={input}
							setInput={setInput}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
