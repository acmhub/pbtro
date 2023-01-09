import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import {
	MdOutlineSettingsRemote,
	MdStraighten,
	MdThermostat,
} from "react-icons/md";
import Layout from "../../components/General/Layout";
import ProductLanding from "../../components/Products/ProductLanding";
import ProductVariants from "../../components/Products/ProductVariants";
import ProductCTA from "../../components/Products/ProductCTA";

const landingData = {
	src: "/images/products/perete-antivant/highlight.webp",
	product: "common:product.pereteantivant",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/perete-antivant/rulou-casetat.webp",
		name: "variants.casetat",
		description: ["variants.casetatdesc"],
		stats: [
			{
				Icon: MdOutlineSettingsRemote,
				label: "variants.actionare",
				value: "variants.elecmanual",
			},
			{
				Icon: MdStraighten,
				label: "variants.dimensiuni",
				value: "3m x 2.5m",
			},
			{
				Icon: MdThermostat,
				label: "variants.rezistenta",
				value: "-22°C/+66°C",
			},
		],
	},
	{
		src: "/images/products/perete-antivant/rulou-necasetat.webp",
		name: "variants.necasetat",
		description: ["variants.necasetatdesc"],
		stats: [
			{
				Icon: MdOutlineSettingsRemote,
				label: "variants.actionare",
				value: "variants.elecmanual",
			},
			{
				Icon: MdStraighten,
				label: "variants.dimensiuni",
				value: "6m x 3m",
			},
			{
				Icon: MdThermostat,
				label: "variants.rezistenta",
				value: "-22°C/+66°C",
			},
		],
	},
	{
		src: "/images/products/perete-antivant/rulou-capse.webp",
		name: "variants.capse",
		description: ["variants.capsedesc"],
		stats: [
			{
				Icon: MdOutlineSettingsRemote,
				label: "variants.actionare",
				value: "Manual",
			},
			{
				Icon: MdStraighten,
				label: "variants.dimensiuni",
				value: "4.5m x 3m",
			},
			{
				Icon: MdThermostat,
				label: "variants.rezistenta",
				value: "-22°C/+66°C",
			},
		],
	},
];

const ctaData = [
	"/images/products/perete-antivant/rulou-casetat.webp",
	"/images/products/perete-antivant/rulou-necasetat.webp",
	"/images/products/perete-antivant/rulou-capse.webp",
	"/images/products/perete-antivant/highlight.webp",
];

export default function PereteAntivant() {
	const { t } = useTranslation("pereteantivant");

	return (
		<Layout
			title={t("common:product.pereteantivant")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/perete-antivant"
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
			...(await serverSideTranslations(locale, [
				"common",
				"pereteantivant",
			])),
		},
	};
}
