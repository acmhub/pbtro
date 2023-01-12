import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Layout from "../../components/General/Layout";
const ProductLanding = dynamic(() =>
	import("../../components/Products/ProductLanding")
);
const ProductVariants = dynamic(() =>
	import("../../components/Products/ProductVariants")
);
const Colors = dynamic(() => import("../../components/Products/Colors"));
const ProductCTA = dynamic(() =>
	import("../../components/Products/ProductCTA")
);

const landingData = {
	src: "/images/products/plasa-insecte/highlight.webp",
	product: "common:product.plasainsecte",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/plasa-insecte/plasa-plisse.webp",
		name: "variants.plisse",
		description: ["variants.plissedesc1", "variants.plissedesc2"],
	},
	{
		src: "/images/products/plasa-insecte/plasa-rulou.webp",
		name: "variants.rulou",
		description: ["variants.ruloudesc"],
	},
	{
		src: "/images/products/plasa-insecte/plasa-balama.webp",
		name: "variants.balamale",
		description: ["variants.balamaledesc"],
	},
];

const ctaData = [
	"/images/products/plasa-insecte/plasa-plisse.webp",
	"/images/products/plasa-insecte/plasa-rulou.webp",
	"/images/products/plasa-insecte/plasa-balama.webp",
	"/images/products/plasa-insecte/highlight.webp",
];

export default function PlasaInsecte() {
	const { t } = useTranslation("plasainsecte");
	return (
		<Layout
			title={t("common:product.plasainsecte")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/plasa-insecte"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<ProductVariants data={variantsData} t={t} />

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
				"plasainsecte",
			])),
		},
	};
}
