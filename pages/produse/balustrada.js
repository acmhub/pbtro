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
	src: "/images/products/balustrada/highlight.webp",
	product: "common:product.balustrada",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/balustrada/balustrada-sticla.webp",
		name: "variants.sticla",
		description: ["variants.sticladesc1", "variants.sticladesc2"],
	},
	{
		src: "/images/products/balustrada/balustrada-aluminiu.webp",
		name: "variants.aluminiu",
		description: ["variants.aluminiudesc"],
	},
	{
		src: "/images/products/balustrada/balustrada-traforata.webp",
		name: "variants.traforata",
		description: ["variants.traforatadesc"],
	},
];

const ctaData = [
	"/images/products/balustrada/balustrada-sticla.webp",
	"/images/products/balustrada/balustrada-aluminiu.webp",
	"/images/products/balustrada/balustrada-traforata.webp",
	"/images/products/balustrada/highlight.webp",
];

export default function Balustrada() {
	const { t } = useTranslation("balustrada");
	return (
		<Layout
			title={t("common:product.balustrada")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/balustrada"
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
			...(await serverSideTranslations(locale, ["common", "balustrada"])),
		},
	};
}
