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
	src: "/images/products/sticla/highlight.webp",
	product: "common:product.sticla",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/sticla/float.webp",
		name: "float",
		description: ["floatdesc"],
	},
	{
		src: "/images/products/sticla/lowe.webp",
		name: "lowe",
		description: ["lowedesc"],
	},
	{
		src: "/images/products/sticla/color.webp",
		name: "colorata",
		description: ["coloratadesc"],
	},
	{
		src: "/images/products/sticla/decor.webp",
		name: "decorativa",
		description: ["decorativadesc"],
	},
	{
		src: "/images/products/sticla/emailata.webp",
		name: "emailata",
		description: ["emailatadesc"],
	},
	{
		src: "/images/products/sticla/print.webp",
		name: "print",
		description: ["printdesc"],
	},
	{
		src: "/images/products/sticla/highlight.webp",
		name: "laminata",
		description: ["laminatadesc"],
	},
	{
		src: "/images/products/sticla/sablata.webp",
		name: "sablata",
		description: ["sablatadesc"],
	},
	{
		src: "/images/products/sticla/ornamental.webp",
		name: "ornamentala",
		description: ["ornamentaladesc"],
	},
	{
		src: "/images/products/sticla/reflexiva.webp",
		name: "reflexiva",
		description: ["reflexivadesc"],
	},
	{
		src: "/images/products/sticla/securizata.webp",
		name: "securizata",
		description: ["securizatadesc"],
	},
];

const ctaData = [
	"/images/products/sticla/highlight.webp",
	"/images/products/sticla/highlight.webp",
	"/images/products/sticla/highlight.webp",
	"/images/products/sticla/highlight.webp",
	"/images/products/sticla/highlight.webp",
];

export default function Sticla() {
	const { t } = useTranslation("sticla");
	return (
		<Layout
			title={t("common:product.sticla")}
			description={"description"}
			canonical="https://pbtromania.ro/produse/sticla"
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
			...(await serverSideTranslations(locale, ["common", "sticla"])),
		},
	};
}
