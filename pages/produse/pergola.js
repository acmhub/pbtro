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
const ProductCTA = dynamic(() =>
	import("../../components/Products/ProductCTA")
);

const landingData = {
	src: "/images/products/pergola/highlight.webp",
	product: "common:product.pergola",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/pergola/4season.webp",
		name: "variants.4season",
		description: [
			"variants.4seasondesc1",
			"variants.4seasondesc2",
			"variants.4seasondesc3",
		],
	},
	{
		src: "/images/products/pergola/bioclimatica.webp",
		name: "variants.bioclimatic",
		description: [
			"variants.bioclimaticdesc1",
			"variants.bioclimaticdesc2",
			"variants.bioclimaticdesc3",
		],
	},
	{
		src: "/images/products/pergola/wintergarden.webp",
		name: "variants.winter",
		description: [
			"variants.winterdesc1",
			"variants.winterdesc2",
			"variants.winterdesc3",
		],
	},
];

const ctaData = [
	"/images/products/pergola/4season.webp",
	"/images/products/pergola/bioclimatica.webp",
	"/images/products/pergola/wintergarden.webp",
	"/images/products/pergola/highlight.webp",
];

export default function Pergola() {
	const { t } = useTranslation("pergola");
	return (
		<Layout
			title={t("common:product.pergola")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/pergola"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<ProductVariants data={variantsData} t={t} />

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
			...(await serverSideTranslations(locale, ["common", "pergola"])),
		},
	};
}
