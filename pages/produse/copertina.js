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
	src: "/images/products/copertina/highlight.webp",
	product: "common:product.copertina",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/copertina/ares.webp",
		name: "variants.ares",
		description: ["variants.aresdesc1", "variants.aresdesc2"],
	},
	{
		src: "/images/products/copertina/hera.webp",
		name: "variants.hera",
		description: ["variants.heradesc1", "variants.warranty"],
	},
	{
		src: "/images/products/copertina/artemis.webp",
		name: "variants.artemis",
		description: ["variants.artemisdesc1", "variants.warranty"],
	},
	{
		src: "/images/products/copertina/pallas.webp",
		name: "variants.pallas",
		description: ["variants.pallasdesc1", "variants.warranty"],
	},
	{
		src: "/images/products/copertina/metis.webp",
		name: "variants.metis",
		description: [
			"variants.metisdesc1",
			"variants.metisdesc2",
			"variants.warranty",
		],
	},
	{
		src: "/images/products/copertina/bora.webp",
		name: "variants.bora",
		description: ["variants.boradesc1", "variants.boradesc2"],
	},
	{
		src: "/images/products/copertina/articulate.webp",
		name: "variants.brate",
		description: ["variants.bratedesc1"],
	},
	{
		src: "/images/products/copertina/carlige.webp",
		name: "variants.carlige",
		description: ["variants.carligedesc1"],
	},
	{
		src: "/images/products/copertina/marchize.webp",
		name: "variants.marchize",
		description: ["variants.marchizedesc1"],
	},
];

const ctaData = [
	"/images/products/copertina/ares.webp",
	"/images/products/copertina/artemis.webp",
	"/images/products/copertina/articulate.webp",
	"/images/products/copertina/bora.webp",
	"/images/products/copertina/carlige.webp",
	"/images/products/copertina/hera.webp",
	"/images/products/copertina/marchize.webp",
	"/images/products/copertina/metis.webp",
	"/images/products/copertina/pallas.webp",
];

export default function Copertina() {
	const { t } = useTranslation("copertina");
	return (
		<Layout
			title={t("common:product.copertina")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/copertina"
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
			...(await serverSideTranslations(locale, ["common", "copertina"])),
		},
	};
}
