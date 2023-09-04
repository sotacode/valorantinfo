export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Info Valorant",
	description: "Visualización de datos del videojuego VALORANT utilizando Valorant-API (https://dash.valorant-api.com/).",
	homedisplay: {
		first:{
			enUS: "Website where you can find Valorant-related information.",
			esES: "Sitio web donde puedes ver información de Valorant.",
		},
		second:{
			enUS: "The information was obtained from",
			esES: "La información fue obtenida de",
		},
		third:{
			enUS: "thus, we maintain their policies, which you can view in the",
			esES: "por ello mantenemos sus políticas que puede ver en la sección",
		},
		fourth:{
			enUS: "About Us",
			esES: "Acerca de nosotros",
		},
		fifth: {
			enUS: "It's important to mention that the website is for academic purposes to showcase programming knowledge, not for profit or to harm Riot Games in any way.",
			esES: "Importante mencionar que el sitio es con fines académicos para demostrar conocimientos como programador, no para lucrar ni perjudicar de ninguna manera a Riot Games."
		},
	},
	createdBy: {
		enUS: "Created by",
		esES: "Creado por"
	},
	languaje: {
		spanish: {
			enUS: "Spanish",
			esES: "Español"
		},
		english: {
			enUS: "English",
			esES: "Inglés"
		}
	},
	navItems: {
		home: {
			esES: "INCIO",
			enUS: "HOME"
		},
		agents: {
			esES: "AGENTES",
			enUS: "AGENTS"
		},
		weapons: {
			esES: "ARMAS",
			enUS: "WEAPONS"
		},
		maps: {
			esES: "MAPAS",
			enUS: "MAPS"
		},
		cards: {
			esES: "CARTAS",
			enUS: "CARD"
		},
		tiers: {
			esES: "RANGOS",
			enUS: "TIERS"
		},
		about: {
			esES: "ACERCA DE",
			enUS: "ABOUT"
		},
	},
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
