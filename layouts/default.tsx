import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import LanguageProvider from "@/context/language/LanguageProvider";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { theme, setTheme } = useTheme();
	const [show, setShow] = useState(false);
	const { createdBy } = siteConfig;
	useEffect(() => {
		setTheme("dark");
		setShow(true);
	}, [])

	return (<>
		{
			show ?
				<>
					<div className="relative flex flex-col min-h-screen">
						<Head />
						<div className="h-[64px]"> {/* Fixed height for Navbar */}
							<Navbar />
						</div>
						<main className="container mx-auto max-w-7xl flex-grow min-h-[calc(100vh-128px)]">
							{children}
						</main>
						<div className="mt-auto h-[64px]"> {/* Footer will stick to bottom */}
							<Footer />
						</div>
					</div>
				</>
				:
				<></>

		}
	</>
	);
}
