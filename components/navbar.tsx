import {
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
	SelectItem,
	Avatar,
	Select,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";


import Image from "next/image";
import { useRouter } from 'next/router';
import { siteConfig } from "@/config/site";
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "@/context/language/LanguageContext";
import { getLocalStorageLanguage, setLocalStorageLanguage } from "@/utils/localStorage";



export const Navbar = () => {
	const router = useRouter();
	const pathActual = router.asPath;

	const { navItems, navSelectedLanguage } = siteConfig;

	const { language: ctxLanguage, changeLanguage } = useContext(LanguageContext)
	const [languageSelected, setLanguageSelected] = useState(new Set<string>(["esES"]));
	const handleSelectionChange = (e: any) => {
		//console.log(e.target.value)
		if (e.target.value !== "") {
			changeLanguage(e.target.value)
			setLanguageSelected(new Set<string>([e.target.value]));
			setLocalStorageLanguage(e.target.value);
		}
	};
	useEffect(() => {
		const currentLanguage = getLocalStorageLanguage();
		console.log(ctxLanguage)
		changeLanguage(ctxLanguage);
		setLanguageSelected(new Set<string>([currentLanguage]));
	}, [])

	return (
		<NextUINavbar
			classNames={{
				item: [
					"flex",
					"relative",
					"h-full",
					"items-center",
					"data-[active=true]:after:content-['']",
					"data-[active=true]:after:absolute",
					"data-[active=true]:after:bottom-0",
					"data-[active=true]:after:left-0",
					"data-[active=true]:after:right-0",
					"data-[active=true]:after:h-[2px]",
					"data-[active=true]:after:rounded-[2px]",
					"data-[active=true]:after:bg-secondary",
				],
			}}
			maxWidth="xl"
			shouldHideOnScroll>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="">
					<Image
						alt="icon"
						src="/logovalorant.png"
						width={50}
						height={50}
					/>
					<p className="font-bold text-inherit">Info Valorant</p>
				</NavbarBrand>
				<NavbarContent className="hidden lg:flex gap-4" justify="center">
					<NavbarItem isActive={pathActual == "/" ? true : false}>
						<Link color={pathActual == "/" ? "secondary" : "foreground"} href="/" >
							{navItems.home[ctxLanguage]}
						</Link>
					</NavbarItem>
					<NavbarItem isActive={pathActual == "/agents" ? true : false}>
						<Link color={pathActual == "/agents" ? "secondary" : "foreground"} href="/agents">
							{navItems.agents[ctxLanguage]}
						</Link>
					</NavbarItem>
					<NavbarItem isActive={pathActual == "/weapons" ? true : false}>
						<Link href="/weapons" color={pathActual == "/weapons" ? "secondary" : "foreground"}>
							{navItems.weapons[ctxLanguage]}
						</Link>
					</NavbarItem>
					<NavbarItem isActive={pathActual == "/maps" ? true : false}>
						<Link href="/maps" color={pathActual == "/maps" ? "secondary" : "foreground"}>
							{navItems.maps[ctxLanguage]}
						</Link>
					</NavbarItem>
					<NavbarItem isActive={pathActual == "/cards" ? true : false}>
						<Link href="/cards" color={pathActual == "/cards" ? "secondary" : "foreground"}>
							{navItems.cards[ctxLanguage]}
						</Link>
					</NavbarItem>
					<NavbarItem isActive={pathActual == "/tiers" ? true : false}>
						<Link color={pathActual == "/tiers" ? "secondary" : "foreground"} href="/tiers">
							{navItems.tiers[ctxLanguage]}
						</Link>
					</NavbarItem>
					<NavbarItem isActive={pathActual == "/about" ? true : false}>
						<Link color={pathActual == "/about" ? "secondary" : "foreground"} href="/about">
							{navItems.about[ctxLanguage]}
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end" className="hidden lg:flex">
					<NavbarBrand className="flex justify-end">
						<Select
							className="max-w-[130px]"
							aria-label="idioma"
							labelPlacement="outside-left"
							defaultSelectedKeys={["esES"]}
							selectedKeys={languageSelected}
							onChange={handleSelectionChange}
						>
							{
								navSelectedLanguage.map((region) => {
									return <SelectItem
										key={region.languageFormated}
										startContent={<Avatar alt="ES" className="w-6 h-6" src={region.url} />}
										textValue={region.language}
									>
										{region.language}
									</SelectItem>
								})
							}
							
						</Select>
					</NavbarBrand>
				</NavbarContent>

			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1/5 sm:basis-full" justify="end">

				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu >
				<div className="mx-4 mt-2 flex flex-col gap-2 z-50">
				<NavbarMenuItem >
				<Select
							className="max-w-[130px]"
							aria-label="idioma"
							labelPlacement="outside-left"
							defaultSelectedKeys={["esES"]}
							selectedKeys={languageSelected}
							onChange={handleSelectionChange}
						>
							{
								navSelectedLanguage.map((region) => {
									return <SelectItem
										key={region.languageFormated}
										startContent={<Avatar alt="ES" className="w-6 h-6" src={region.url} />}
										textValue={region.language}
									>
										{region.language}
									</SelectItem>
								})
							}
							
						</Select>
				</NavbarMenuItem>
				<NavbarMenuItem >
						<Link color={pathActual == "/" ? "secondary" : "foreground"} href="/" >
							{navItems.home[ctxLanguage]}
						</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
						<Link color={pathActual == "/agents" ? "secondary" : "foreground"} href="/agents">
							{navItems.agents[ctxLanguage]}
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href="/weapons" color={pathActual == "/weapons" ? "secondary" : "foreground"}>
							{navItems.weapons[ctxLanguage]}
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href="/maps" color={pathActual == "/maps" ? "secondary" : "foreground"}>
							{navItems.maps[ctxLanguage]}
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href="/cards" color={pathActual == "/cards" ? "secondary" : "foreground"}>
							{navItems.cards[ctxLanguage]}
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link color={pathActual == "/tiers" ? "secondary" : "foreground"} href="/tiers">
							{navItems.tiers[ctxLanguage]}
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link color={pathActual == "/about" ? "secondary" : "foreground"} href="/about">
							{navItems.about[ctxLanguage]}
						</Link>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
