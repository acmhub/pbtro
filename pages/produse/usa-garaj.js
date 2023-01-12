import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { MdDone, MdOutlineSettingsRemote } from "react-icons/md";
import { IoRepeatSharp } from "react-icons/io5";
import { CiMedal } from "react-icons/ci";
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
const ProductCTA = dynamic(() =>
	import("../../components/Products/ProductCTA")
);

const landingData = {
	src: "/images/products/usa-garaj/highlight.webp",
	product: "common:product.usagaraj",
	description: ["description"],
};

const variantsData = [
	{
		src: "/images/products/usa-garaj/benefit.webp",
		name: "variants.benefit",
		description: ["variants.benefitdesc1", "variants.benefitdesc2"],
		stats: [
			{ Icon: CiMedal, label: "warranty", value: "5ani" },
			{ Icon: IoRepeatSharp, label: "cicluri", value: "15000" },
		],
	},
	{
		src: "/images/products/usa-garaj/benefitxl.webp",
		name: "variants.benefitxl",
		description: ["variants.benefitxldesc1", "variants.beneftixldesc2"],
		stats: [
			{ Icon: CiMedal, label: "warranty", value: "5ani" },
			{
				Icon: MdOutlineSettingsRemote,
				label: "actionare",
				value: "elecmanual",
			},
			{ Icon: IoRepeatSharp, label: "cicluri", value: "15000" },
		],
	},
	{
		src: "/images/products/usa-garaj/optima.webp",
		name: "variants.optima",
		description: ["variants.optimadesc1", "variants.optimadesc2"],
		stats: [
			{ Icon: CiMedal, label: "warranty", value: "10ani" },
			{ Icon: IoRepeatSharp, label: "cicluri", value: "25000" },
		],
	},
	{
		src: "/images/products/usa-garaj/vogue.webp",
		name: "variants.vogue",
		description: ["variants.voguedesc1"],
		stats: [
			{ Icon: CiMedal, label: "warranty", value: "15ani" },
			{ Icon: IoRepeatSharp, label: "cicluri", value: "25000" },
		],
	},
];

const accessoriesData = [
	{
		tab: "accessories.vitrare",
		items: [
			{
				src: "/images/products/usa-garaj/vitrare-dreptunghi-640x340.webp",
				name: "accessories.fer640",
			},
			{
				src: "/images/products/usa-garaj/vitrare-dreptunghi-610x140.webp",
				name: "accessories.fer610",
			},
		],
	},
	{
		tab: "accessories.usa",
		items: [
			{
				src: "/images/products/usa-garaj/usa-linii.webp",
				name: "accessories.linii",
			},
			{
				src: "/images/products/usa-garaj/usa-bloc.webp",
				name: "accessories.acces",
			},
		],
	},
	{
		tab: "accessories.accesorii",
		items: [
			{
				src: "/images/products/usa-garaj/buton-perete.webp",
				name: "accessories.buton",
			},
			{
				src: "/images/products/usa-garaj/fotocelule.webp",
				name: "accessories.fotocelule",
			},
			{
				src: "/images/products/usa-garaj/maner.webp",
				name: "accessories.maner",
			},
			{
				src: "/images/products/usa-garaj/yala-blocare.webp",
				name: "accessories.yalablocare",
			},
			{
				src: "/images/products/usa-garaj/yala-motor.webp",
				name: "accessories.yaladeblocare",
			},
			{
				src: "/images/products/usa-garaj/sistem-blocare.webp",
				name: "accessories.sistemblocare",
			},
			{
				src: "/images/products/usa-garaj/bolt.webp",
				name: "accessories.bolt",
			},
			{
				src: "/images/products/usa-garaj/telecomanda.webp",
				name: "accessories.telecomanda",
			},
		],
	},
];

const ctaData = [
	"/images/products/usa-garaj/highlight.webp",
	"/images/products/usa-garaj/benefit.webp",
	"/images/products/usa-garaj/benefitxl.webp",
	"/images/products/usa-garaj/optima.webp",
	"/images/products/usa-garaj/vogue.webp",
];

export default function UsaGaraj() {
	const { t } = useTranslation("usagaraj");
	return (
		<Layout
			title={t("common:product.usagaraj")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/usa-garaj"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<ProductVariants data={variantsData} t={t} />

				<div className="section-spacing" />

				<section className="relative lg:p-4 lg:py-10" id="carina">
					<div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>
					<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
						<div className="space-y-8 lg:text-white my-auto">
							<div>
								<h3>{t("carina.sectional")}</h3>
								<h5>{t("carina.standard")}</h5>
							</div>

							<div className="space-y-2">
								<p className="text-justify">
									{t("carina.description1")}
								</p>
								<p className="text-justify">
									{t("carina.description2")}
								</p>
							</div>
						</div>

						<div className="order-first lg:order-2">
							<div className="relative h-96 w-auto">
								<Image
									src="/images/products/usa-garaj/carina.webp"
									alt={t("common:product.usagaraj")}
									layout="fill"
									objectFit="cover"
									priority
								/>
							</div>
						</div>

						<div className="order-last my-auto">
							<h4 className="text-center mb-4">
								{t("common:colors.available")}
							</h4>
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
								{[
									"/images/products/usa-garaj/ral9016.webp",
									"/images/products/usa-garaj/ral8017.webp",
									"/images/products/usa-garaj/ral7016.webp",
								].map((e, i) => (
									<div className="space-y-2" key={i}>
										<div className="relative h-28 w-auto">
											<Image
												src={e}
												alt="Culoare RAL"
												layout="fill"
												objectFit="cover"
											/>
											<MdDone className="h-6 w-6 text-white" />
										</div>
										<div className="text-center uppercase">
											{e
												.replace(/^.*[\\\/]/, "")
												.slice(0, -5)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<div className="section-spacing" />

				<ProductAccessories data={accessoriesData} t={t} />

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
			...(await serverSideTranslations(locale, ["common", "usagaraj"])),
		},
	};
}
