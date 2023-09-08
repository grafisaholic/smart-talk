import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
	return (
		<div className={cn("pb-12", className)}>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						Chat&apos;s History
					</h2>
					<div className="space-y-1">
						<Button variant="secondary">Chat 1</Button>
						<Button variant="ghost" className="w-full justify-start">
							Chat 2
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Chat 1
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Chat 1
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Chat 2
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Chat 1
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
