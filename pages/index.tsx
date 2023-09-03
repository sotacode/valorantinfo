import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import CarouselComponent from "@/components/carousel";
import { useState } from "react";

export default function IndexPage() {
	const [videoLoaded, setVideoLoaded] = useState(false);

	const handleVideoLoad = () => {
		setVideoLoaded(true);
	};

	return (
		<section className="flex flex-col items-center justify-center gap-4">

			<div className={`video-background relative`} style={{ marginTop: "-60px" }}>
				<video autoPlay muted loop className="w-screen h-screen object-cover z-20 opacity-30" onLoadedData={handleVideoLoad}>
					{/* <source src="/videos/contractglitches.webm" type="video/webm" /> */}
					<source src="/videos/gekkobg.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 flex items-center justify-center mt-28">
					<div className="text-white text-center backdrop-blur-sm p-10">
						<div className="inline-block max-w-3xl text-center justify-center">
							<h1 className={title({ color: "violet" })} style={{ fontFamily: "ValorantFont" }}>INFO VALORANT&nbsp;</h1>
							<br />
							<h1 className={title()}>
								Sitio web donde puedes ver información de valorant.
							</h1>
							<h4 className={subtitle({ class: "mt-4" })}>
								La información fue obtenida de <Link isExternal className="text-md" href="https://dash.valorant-api.com/" color="secondary" style={{ fontFamily: "ValorantFont" }}>Valorant-API.com</Link>,
								por ello mantenemos sus políticas que puede ver en la sección <Link isExternal className="text-md" href="https://dash.valorant-api.com/about" color="secondary" style={{ fontFamily: "ValorantFont" }}>Acerca de nosotros</Link>.
							</h4>
							<h4 className={subtitle({ class: "mt-4" })}>
								Importante mencionar que el sitio es con fines académicos para demostrar conocimientos como programador, no para lucrar ni perjudicar de ninguna manera a Riot Games.
							</h4>
						</div>

						<CarouselComponent />
					</div>
				</div>
			</div>


			{/* <div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						Documentation
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div> */}
		</section>
	);
}
