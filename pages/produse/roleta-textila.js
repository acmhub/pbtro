import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Layout from "../../components/General/Layout";
const ProductLanding = dynamic(() => import("../../components/Products/ProductLanding"));
const ModelsGallery = dynamic(() => import("../../components/Products/ModelsGallery"));
const ProductCTA = dynamic(() => import("../../components/Products/ProductCTA"));
import { zebraData, roleteData, jaluzeleData } from "../../components/Products/Rolete";

const landingData = {
	src: "/images/products/roleta-textila/highlight.webp",
	product: "common:product.roletatextila",
	description: ["description"],
};

const ctaData = ["/images/products/roleta-textila/highlight.webp"];

export default function RoletaTextila() {
	const { t } = useTranslation("roletatextila");

	return (
		<Layout
			title={t("common:product.roletatextila")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/roleta-textila"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<section className="space-y-4" id="rolete">
					<p className="text-3xl text-center">{t("modelsrolete")}</p>

					<ModelsGallery data={roleteData} />
				</section>

				<div className="section-spacing" />

				<section className="space-y-4" id="zebra">
					<div>
						<p className="text-3xl text-center">{t("modelszebra")}</p>
						<p className="text-center text-lg">Day & Night</p>
					</div>

					<ModelsGallery data={zebraData} />
				</section>

				<div className="section-spacing" />

				<section className="space-y-4" id="jaluzele">
					<p className="text-3xl text-center">{t("modelsjaluzele")}</p>

					<ModelsGallery data={jaluzeleData} />
				</section>

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
			...(await serverSideTranslations(locale, ["common", "roletatextila"])),
		},
	};
}
