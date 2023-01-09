import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../../components/General/Layout";
import ProductLanding from "../../components/Products/ProductLanding";
import ModelsGallery from "../../components/Products/ModelsGallery";
import Colors from "../../components/Products/Colors";
import ProductCTA from "../../components/Products/ProductCTA";
import {
	aluminiuData,
	inoxData,
} from "../../components/Products/PanelOrnamental";

const landingData = {
	src: "/images/products/panel-ornamental/highlight.webp",
	product: "common:product.panelornamental",
	description: ["description"],
};

const ctaData = ["/images/products/panel-ornamental/highlight.webp"];

export default function PanelOrnamental() {
	const { t } = useTranslation("panelornamental");

	return (
		<Layout
			title={t("common:product.panelornamental")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/panel-ornamental"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<section className="space-y-4" id="aluminiu">
					<h3 className="text-center">{t("alumodels")}</h3>

					<ModelsGallery data={aluminiuData} />
				</section>

				<div className="section-spacing" />

				<section className="space-y-4" id="inox">
					<h3 className="text-center">
						{t("alumodels")} <br />
						{t("inoxmodels")}
					</h3>

					<ModelsGallery data={inoxData} />
				</section>

				<div className="section-spacing" />

				<Colors t={t} />

				<div className="section-spacing" />

				<ProductCTA data={ctaData} t={t} />
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"panelornamental",
			])),
		},
	};
}
