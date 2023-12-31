import React from "react";
import { type UseChatHelpers } from "ai/react";

import { cn } from "@/lib/utils";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconPlus, IconArrowElbow } from "@/components/ui/icons";
import Textarea from "react-textarea-autosize";

interface PromptProps extends Pick<UseChatHelpers, "input" | "setInput"> {
	onSubmit: (value: string) => Promise<void>;
	isLoading: boolean;
}

export default function PromtForm({
	onSubmit,
	input,
	setInput,
	isLoading,
}: PromptProps) {
	return (
		<form
			onSubmit={async (e) => {
				console.log("input", input);

				e.preventDefault();
				if (!input?.trim()) {
					return;
				}
				setInput("");
				await onSubmit(input);
			}}
		>
			<div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
				<Tooltip>
					<TooltipTrigger asChild>
						<button
							className={cn(
								buttonVariants({ size: "sm", variant: "outline" }),
								"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4"
							)}
						>
							<IconPlus />
							<span className="sr-only">New Chat</span>
						</button>
					</TooltipTrigger>
					<TooltipContent>New Chat</TooltipContent>
				</Tooltip>

				<Textarea
					tabIndex={0}
					rows={1}
					placeholder="Send a message."
					spellCheck={false}
					onChange={(e) => setInput(e.target.value)}
					className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
				/>

				<div className="absolute right-0 top-4 sm:right-4">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button type="submit" size="icon">
								<IconArrowElbow />
								<span className="sr-only">Send message</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Send message</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</form>
	);
}
