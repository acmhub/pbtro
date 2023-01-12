import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Layout from "../../components/General/Layout";
const ProductLanding = dynamic(() =>
	import("../../components/Products/ProductLanding")
);
const Profiles = dynamic(() => import("../../components/Products/Profiles"));
const ProductVariants = dynamic(() =>
	import("../../components/Products/ProductVariants")
);
const ProductCTA = dynamic(() =>
	import("../../components/Products/ProductCTA")
);

const landingData = {
	src: "/images/products/perete-cortina/highlight.webp",
	product: "common:product.peretecortina",
	description: ["description"],
};

const profileData = [
	{
		manufacturer: "Profilco",
		manufacturerLogo: "/images/suppliers/profilco.webp",
		model: "PR50 Semi-Structural",
		profile: "/images/products/perete-cortina/pr-semi.webp",
		image: "/images/products/perete-cortina/semi-wall.webp",
		tehnicalDetails: [
			{
				label: "",
				value: "",
			},
		],
	},
	{
		manufacturer: "Profilco",
		manufacturerLogo: "/images/suppliers/profilco.webp",
		model: "PR50 Standard",
		profile: "/images/products/perete-cortina/pr-standard.webp",
		image: "/images/products/perete-cortina/standard-wall.webp",
		tehnicalDetails: [
			{
				label: "",
				value: "",
			},
		],
	},
	{
		manufacturer: "Profilco",
		manufacturerLogo: "/images/suppliers/profilco.webp",
		model: "PR50 Structural",
		profile: "/images/products/perete-cortina/pr-struct.webp",
		image: "/images/products/perete-cortina/structural-wall.webp",
		tehnicalDetails: [
			{
				label: "",
				value: "",
			},
		],
	},
];

const variantsData = [
	{
		src: "/images/products/perete-cortina/highlight.webp",
		name: "variants.standard",
		description: [
			"variants.standarddesc1",
			"variants.standarddesc2",
			"variants.standarddesc3",
		],
	},
	{
		src: "/images/products/perete-cortina/highlight.webp",
		name: "variants.semi",
		description: [
			"variants.semidesc1",
			"variants.semidesc2",
			"variants.semidesc3",
		],
	},
	{
		src: "/images/products/perete-cortina/highlight.webp",
		name: "variants.structural",
		description: [
			"variants.structuraldesc1",
			"variants.structuraldesc2",
			"variants.structuraldesc3",
		],
	},
];

const ctaData = [
	"/images/products/perete-cortina/semi-wall.webp",
	"/images/products/perete-cortina/standard-wall.webp",
	"/images/products/perete-cortina/structural-wall.webp",
	"/images/products/perete-cortina/highlight.webp",
];

export default function PereteCortina() {
	const { t } = useTranslation("peretecortina");
	return (
		<Layout
			title={t("common:product.peretecortina")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/perete-cortina"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<Profiles data={profileData} t={t} />

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
				"peretecortina",
			])),
		},
	};
}
