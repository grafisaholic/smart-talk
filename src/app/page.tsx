import ChatPanel from "@/components/chat-panel";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
	return (
		<section>
			<div className="relative flex h-screen overflow-hidden">
				<Sidebar className="hidden lg:block" />

				<div className="lg:border-l w-full">
					<div className="h-full px-4 py-6 lg:px-8">
						<ChatPanel />
					</div>
				</div>
			</div>
		</section>
	);
}
