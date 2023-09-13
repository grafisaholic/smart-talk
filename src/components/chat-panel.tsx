"use client";

import { type UseChatHelpers } from "ai/react";

import React from "react";
import PromtForm from "@/components/prompt-form";

interface ChatPanelProps
	extends Pick<
		UseChatHelpers,
		| "append"
		| "isLoading"
		| "reload"
		| "messages"
		| "stop"
		| "input"
		| "setInput"
	> {
	id?: string;
}

export default function ChatPanel({
	append,
	input,
	setInput,
	isLoading,
	id,
}: ChatPanelProps) {
	return (
		<div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%">
			<div className="mx-auto sm:max-w-2xl sm:px-4">
				<div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
					<PromtForm
						onSubmit={async (value) => {
							await append({
								id,
								content: value,
								role: "user",
							});
						}}
						input={input}
						setInput={setInput}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</div>
	);
}
