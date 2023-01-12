import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Layout from "../components/General/Layout";

export default function ErrorPage() {
	const { t } = useTranslation();
	return (
		<Layout pageID="notfound" title={t("common:notfound.error")}>
			<div className="section-spacing-lg" />

			<div className="container-padding space-y-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					data-name="Layer 1"
					viewBox="0 0 64 64"
					className="h-64 mx-auto"
					fill="brown "
				>
					<path d="M56.76,0H7.24a2.4,2.4,0,0,0-2.4,2.4V61.6A2.4,2.4,0,0,0,7.24,64H56.76a2.4,2.4,0,0,0,2.4-2.4V2.4A2.4,2.4,0,0,0,56.76,0ZM30.6,60.35H8.49V39.58l6.21,9.94-2.32,3.57a.6.6,0,0,0,.18.83.57.57,0,0,0,.32.09.6.6,0,0,0,.5-.27l2.37-3.69,2.45-.75,1.39,1.51A.6.6,0,0,0,20,51a.55.55,0,0,0,.4-.16.59.59,0,0,0,0-.84l-1-1.08,2.66-.81L24,51l-1.89,2a.58.58,0,0,0-.16.43.57.57,0,0,0,.19.41.57.57,0,0,0,.41.16.63.63,0,0,0,.44-.19L24.63,52l1.74,2.7a.58.58,0,0,0,.5.27.59.59,0,0,0,.32-.09.57.57,0,0,0,.26-.38.56.56,0,0,0-.08-.45l-.46-.71H28.3a.6.6,0,0,0,0-1.2l-2.12.05-3-4.67,1.93-1.59a.6.6,0,0,0,.08-.84.62.62,0,0,0-.47-.22.57.57,0,0,0-.37.14l-2.23,1.84-3,.91.52-3.48a.56.56,0,0,0-.11-.45.62.62,0,0,0-.48-.24.6.6,0,0,0-.59.51l-.61,4-2.18.66-3.24-5.16,6-3.25,3.8,1.33a.65.65,0,0,0,.19,0,.56.56,0,0,0,.31-.09L25,40.29a.58.58,0,0,0,.28-.37.64.64,0,0,0-.07-.45.6.6,0,0,0-.51-.29.65.65,0,0,0-.31.08l-2.05,1.28-3.19-1.12.59-1.48a.61.61,0,0,0,0-.46.64.64,0,0,0-.33-.32.85.85,0,0,0-.22,0,.6.6,0,0,0-.56.38l-.71,1.83-6.15,3.31-3.3-5.21v-4H30.6Zm0-29.75H8.49V3.66H30.6ZM55.52,60.35H33.4V33.4H55.52Zm0-29.75H33.4V3.66H55.52Z" />
					<polygon points="41.59 17.8 39.37 19.94 41.12 20.39 40.46 25.38 43.61 22.5 45.53 27.31 46.05 20.69 48.63 20.24 46.42 16.73 48.89 14.12 46.56 13.36 46.88 10 44.74 12.43 43.18 9.08 42.6 12.22 39.37 10.13 41.99 15.21 39.19 16.77 41.59 17.8" />
				</svg>

				<div className="text-center">
					<h1 className="text-9xl">404</h1>
					<h2>{t("common:notfound.title")}</h2>
				</div>

				<Link href="/" passHref>
					<a className="theme-button1 block w-fit mx-auto">
						{t("common:notfound.backhome")}
					</a>
				</Link>
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
