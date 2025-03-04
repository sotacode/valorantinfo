import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/language/LanguageContext";

export default function IndexPage() {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const { homedisplay } = siteConfig;

	const handleVideoLoad = () => {
		setVideoLoaded(true);
	};

	const {language} = useContext(LanguageContext)

	return (
		<section className="flex flex-col items-center justify-center gap-4">
			<div>
				<video autoPlay muted loop className="absolute w-screen h-[calc(100vh-64px)] object-cover opacity-30 overflow-hidden" onLoadedData={handleVideoLoad}>
					<source src="/videos/gekkobg.mp4" type="video/mp4" />
				</video>
				<div className="w-screen h-[calc(100vh-128px)] flex items-center justify-center z-20">
					<div className="text-white text-center backdrop-blur-sm">
						<div className="inline-block max-w-3xl text-center justify-center">
							<h1 className={title({ color: "violet" })} style={{ fontFamily: "ValorantFont" }}>INFO VALORANT&nbsp;</h1>
							<br />
							<h1 className={title()}>
								{homedisplay.first[language]}
							</h1>
							<h4 className={subtitle({ class: "mt-4" })}>
								{homedisplay.second[language]} <Link isExternal className="text-md" href="https://dash.valorant-api.com/" color="secondary" style={{ fontFamily: "ValorantFont" }}>Valorant-API.com</Link>,
								{homedisplay.third[language]} <Link isExternal className="text-md" href="https://dash.valorant-api.com/about" color="secondary" style={{ fontFamily: "ValorantFont" }}>{homedisplay.fourth[language]}</Link>.
							</h4>
							<h4 className={subtitle({ class: "mt-4" })}>
								{homedisplay.fifth[language]}
							</h4>
						</div>
						{/* <CarouselComponent /> */}
					</div>
				</div>
			</div>
		</section>
	);
}
