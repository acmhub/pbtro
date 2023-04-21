import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Layout from "../../components/General/Layout";
const ProductLanding = dynamic(() => import("../../components/Products/ProductLanding"));
const ModelsGallery = dynamic(() => import("../../components/Products/ModelsGallery"));
const Colors = dynamic(() => import("../../components/Products/Colors"));
const ProductCTA = dynamic(() => import("../../components/Products/ProductCTA"));
import { aluminiuData, inoxData } from "../../components/Products/PanelOrnamental";

const landingData = {
	src: "/images/products/panel-ornamental/highlight.webp",
	product: "common:product.panelornamental",
	description: ["description"],
};

const accessories = [
	"/images/products/panel-ornamental/accessories/l1005.webp",
	"/images/products/panel-ornamental/accessories/l1010.webp",
	"/images/products/panel-ornamental/accessories/l1015.webp",
	"/images/products/panel-ornamental/accessories/l1020.webp",
	"/images/products/panel-ornamental/accessories/l1025.webp",
	"/images/products/panel-ornamental/accessories/5.webp",
	"/images/products/panel-ornamental/accessories/20.webp",
	"/images/products/panel-ornamental/accessories/30.webp",
	"/images/products/panel-ornamental/accessories/35.webp",
	"/images/products/panel-ornamental/accessories/40.webp",
	"/images/products/panel-ornamental/accessories/45.webp",
	"/images/products/panel-ornamental/accessories/100.webp",
	"/images/products/panel-ornamental/accessories/210.webp",
	"/images/products/panel-ornamental/accessories/300.webp",
	"/images/products/panel-ornamental/accessories/309.webp",
	"/images/products/panel-ornamental/accessories/500.webp",
];

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
					<h2 className="text-3xl text-center mb-10">{t("alumodels")}</h2>

					<ModelsGallery data={aluminiuData} />
				</section>

				<div className="section-spacing" />

				<section className="space-y-4" id="inox">
					<h2 className="text-3xl text-center mb-10">
						{t("alumodels")} <br />
						{t("inoxmodels")}
					</h2>

					<ModelsGallery data={inoxData} />
				</section>

				<div className="section-spacing" />

				<section id="accessories">
					<h2 className="text-3xl text-center mb-10">{t("common:accessories")}</h2>

					<div className="grid grid-cols-2 lg:grid-cols-8 gap-8">
						{accessories.map((e) => (
							<div className="relative h-16 w-16 mx-auto" key={e}>
								<Image src={e} alt={t("common:accessories")} className="object-contain" layout="fill" />
							</div>
						))}
					</div>
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
			...(await serverSideTranslations(locale, ["common", "panelornamental"])),
		},
	};
}
