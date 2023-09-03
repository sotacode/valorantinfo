import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { theme, setTheme } = useTheme();
	const [show, setShow] = useState(false);
	useEffect(() => {
		setTheme("dark");
		setShow(true);
	}, [])

	return (<>
		{
			show ?
				<div className="relative flex flex-col h-screen">
					<Head />
					<Navbar />
					<main className="container mx-auto max-w-7xl px-6 flex-grow">
						{children}
					</main>
					<footer className="w-full flex items-center justify-center py-3">
						<Link
							isExternal
							className="flex items-center gap-1 text-current"
							href="https://portfolio-sotacode.vercel.app/"
							title="nextui.org homepage"
						>
							<span className="text-default-600">Created by</span>
							<p className="text-primary">SotaCode</p>
						</Link>
					</footer>
				</div>
				:
				<></>

		}
	</>
	);
}
