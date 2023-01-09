import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../utils/gtag";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { StateProvider } from "../utils/StateProvider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<StateProvider>
					<Component {...pageProps} />
				</StateProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default appWithTranslation(MyApp);
