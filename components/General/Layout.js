import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";

import Navigation from "../Navigation";
import Footer from "../Footer";
import BackToTop from "./BackToTop";
import CookiesBanner from "./CookiesBanner";

export default function Layout({ title, description, pageID, children }) {
	const { t } = useTranslation("");
	return (
		<React.Fragment>
			<Head>
				<title>{title ? `${title} | PBT` : t("title")}</title>
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
