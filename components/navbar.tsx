import {
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
	SelectItem,
	Avatar,
	Select,
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

	const { languaje, navItems } = siteConfig;

	const { language: ctxLanguage, changeToEnglish, changeToSpanish } = useContext(LanguageContext)
	const [languageSelected, setLanguageSelected] = useState(new Set<string>(["esES"]));
	const handleSelectionChange = (e: any) => {
		if (e.target.value == "esES" && ctxLanguage!="esES") changeToSpanish() 
		else if(e.target.value == "enUS" && ctxLanguage!="enUS") changeToEnglish();
		if(e.target.value!=="")	{
			setLanguageSelected(new Set<string>([e.target.value]));
			setLocalStorageLanguage(e.target.value);
		}
	};
	useEffect(() => {
		const currentLanguage = getLocalStorageLanguage();
		if (currentLanguage == "esES" && ctxLanguage!="esES") changeToSpanish() 
		else if(currentLanguage == "enUS" && ctxLanguage!="enUS") changeToEnglish();
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
			maxWidth="xl" position="sticky">
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
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
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
				<NavbarContent justify="end">
					<NavbarBrand className="flex justify-end">
						<Select
							className="max-w-[105px]"
							aria-label="idioma"
							labelPlacement="outside-left"
							defaultSelectedKeys={["esES"]}
							selectedKeys={languageSelected}
							onChange={handleSelectionChange}
						>
							<SelectItem
								key="esES"
								startContent={<Avatar alt="ES" className="w-6 h-6" src="https://flagcdn.com/es.svg" />}
								textValue={languaje.spanish["esES"]}
							>
								ES
							</SelectItem>
							<SelectItem
								key="enUS"
								startContent={<Avatar alt="EN" className="w-6 h-6" src="https://flagcdn.com/us.svg" />}
								textValue={languaje.english["esES"]}
							>
								EN
							</SelectItem>
						</Select>
					</NavbarBrand>
				</NavbarContent>
				{/* <div className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div> */}
			</NavbarContent>

			{/* <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter}>
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
				<NavbarMenuToggle />
      </NavbarContent> */}

			{/* <NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu> */}
		</NextUINavbar>
	);
};
