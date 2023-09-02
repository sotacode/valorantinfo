import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

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
					<NavbarItem isActive>
						<Link color="foreground" href="/">
							INICIO
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/agents">
							AGENTS
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="/weapons" color="foreground">
							ARMAS
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="/maps" color="foreground">
							MAPAS
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="/cards" color="foreground">
							CARTAS
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/tiers">
							TIERS
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/about">
							ACERCA DE
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					{/* <NavbarItem className="hidden lg:flex">
						<Link href="#">Login</Link>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} color="primary" href="#" variant="flat">
							Sign Up
						</Button>
					</NavbarItem> */}
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
