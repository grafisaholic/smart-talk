import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconTrash } from "@/components/ui/icons";

interface SidebarProps {
	title: String;
}

export default function SidebarItem({ title }: SidebarProps) {
	return (
		<div className="relative">
			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: "ghost" }),
					"group w-full pl-8 pr-16"
				)}
			>
				<div
					className="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all"
					title="example chat title"
				>
					<span className="whitespace-nowrap text-slate-500">{title}</span>
				</div>
			</Link>
			<div className="absolute right-2 top-1">
				<div className="space-x-1">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								className="h-6 w-6 p-0 hover:bg-background"
							>
								<IconTrash />
								<span className="sr-only">Delete</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Delete chat</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
