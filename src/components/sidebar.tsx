import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SidebarItem from "@/components/sidebar-item";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
	return (
		<div className={cn("relative max-w-xs w-1/2 bg-background", className)}>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						Chat&apos;s History
					</h2>
					<div className="space-y-1">
						<SidebarItem title={"Title Chat 1"} />
						<SidebarItem title={"Title Chat 1"} />
						<SidebarItem title={"Title Chat 1"} />
						<SidebarItem title={"Title Chat 1"} />
						<SidebarItem title={"Title Chat 1"} />
						<SidebarItem title={"Title Chat 1"} />
						<SidebarItem title={"Title Chat 1"} />
						<SidebarItem title={"Title Chat 1"} />
					</div>
				</div>
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						Prompt
					</h2>
					<div className="space-y-1">
						<SidebarItem title={"Title Prompt 1"} />
						<SidebarItem title={"Title Prompt 1"} />
						<SidebarItem title={"Title Prompt 1"} />
						<SidebarItem title={"Title Prompt 1"} />
						<SidebarItem title={"Title Prompt 1"} />
						<SidebarItem title={"Title Prompt 1"} />
					</div>
				</div>
			</div>
		</div>
	);
}
