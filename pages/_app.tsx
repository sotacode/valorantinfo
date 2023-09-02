import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/default";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<NextThemesProvider>
				<DefaultLayout>
				<Component {...pageProps}/>
				</DefaultLayout>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
