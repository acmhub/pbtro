import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";

const Navigation = dynamic(() => import("../Navigation"));
const Footer = dynamic(() => import("../Footer"));
const BackToTop = dynamic(() => import("./BackToTop"));
const CookiesBanner = dynamic(() => import("./CookiesBanner"));

export default function Layout({
	title,
	description,
	pageID,
	canonical,
	children,
}) {
	const { t } = useTranslation("");
	return (
		<React.Fragment>
			<Head>
				<title>{title ? `${title} | PBT` : t("title")}</title>
				<link rel="canonical" href={canonical} key="canonical" />
				{description && (
					<meta name="description" content={description} />
				)}
			</Head>

			<div className={`${pageID}-page`}>
				<header>
					<Navigation />
				</header>

				<main>{children}</main>
				<Footer />

				<CookiesBanner t={t} />
				<BackToTop />
				<ToastContainer
					position="bottom-center"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					pauseOnHover={false}
					pauseOnFocusLoss={false}
					rtl={false}
					limit={4}
					closeOnClick
					draggable
				/>
			</div>
		</React.Fragment>
	);
}
