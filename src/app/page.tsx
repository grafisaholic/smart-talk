import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
	return (
		<section className="container h-full">
			<div className="hidden md:block">
				<div className="bg-background">
					<div className="grid lg:grid-cols-5">
						<Sidebar className="hidden lg:block" />
						<div className="col-span-3 lg:col-span-4 lg:border-l">
							<div className="h-full px-4 py-6 lg:px-8"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
