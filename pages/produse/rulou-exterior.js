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
const ProductAccessories = dynamic(() =>
	import("../../components/Products/ProductAccessories")
);
const Colors = dynamic(() => import("../../components/Products/Colors"));
const ProductCTA = dynamic(() =>
	import("../../components/Products/ProductCTA")
);

const landingData = {
	src: "/images/products/rulou-exterior/highlight.webp",
	product: "common:product.rulouexterior",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/rulou-exterior/rulou-aplicat.webp",
		name: "aplicat",
		description: ["aplicatdesc"],
	},
	{
		src: "/images/products/rulou-exterior/highlight.webp",
		name: "suprapus",
		description: ["suprapusdesc"],
	},
];

const accessoriesData = [
	{
		tab: "accessories.actionare",
		items: [
			{
				src: "/images/products/rulou-exterior/actionare_pamblica.webp",
				name: "accessories.pamblica",
			},
			{
				src: "/images/products/rulou-exterior/actionare_manivela.webp",
				name: "accessories.manivela",
			},
			{
				src: "/images/products/rulou-exterior/actionare_cu_buton.webp",
				name: "accessories.buton",
			},
			{
				src: "/images/products/rulou-exterior/actionare_cu_telecomanda.webp",
				name: "accessories.telecomanda",
			},
		],
	},
	{
		tab: "accessories.caseta",
		items: [
			{
				src: "/images/products/rulou-exterior/caseta1.webp",
				name: "accessories.tesita45",
			},
			{
				src: "/images/products/rulou-exterior/caseta2.webp",
				name: "accessories.semirotunda",
			},
			{
				src: "/images/products/rulou-exterior/caseta3.webp",
				name: "accessories.tesita90",
			},
		],
	},
	{
		tab: "accessories.accesorii",
		items: [
			{
				src: "/images/products/rulou-exterior/plasa-integrata.webp",
				name: "accessories.plasa",
			},
			{
				src: "/images/products/rulou-exterior/lamela.webp",
				name: "accessories.lamela",
			},
			{
				src: "/images/products/rulou-exterior/yala.webp",
				name: "accessories.yala",
			},
			{
				src: "/images/products/rulou-exterior/anti-efractie.webp",
				name: "accessories.cleme",
			},
		],
	},
];

const ctaData = [
	"/images/products/rulou-exterior/rulou-aplicat.webp",
	"/images/products/rulou-exterior/highlight.webp",
];

export default function RulouExterior() {
	const { t } = useTranslation("rulouexterior");
	return (
		<Layout
			title={t("common:product.rulouexterior")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/rulou-exterior"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<ProductVariants data={variantsData} t={t} />

				<div className="section-spacing" />

				<ProductAccessories data={accessoriesData} t={t} />

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
				"rulouexterior",
			])),
		},
	};
}
