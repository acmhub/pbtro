import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../../../components/General/Layout";

const ProductLanding = dynamic(() =>
	import("../../../components/Products/ProductLanding")
);
const ConstructiveOptions = dynamic(() =>
	import("../../../components/Products/ConstructiveOptions")
);
const Profiles = dynamic(() => import("../../../components/Products/Profiles"));
const Atypics = dynamic(() => import("../../../components/Products/Atypics"));
const Colors = dynamic(() => import("../../../components/Products/Colors"));
const ProductCTA = dynamic(() =>
	import("../../../components/Products/ProductCTA")
);

const landingData = {
	src: "/images/products/tamplarie-pvc/highlight.webp",
	product: "common:product.tamplariepvc",
	description: ["description"],
};

const constructiveData = [
	{
		source: "/images/products/tamplarie-pvc/fereastra.webp",
		title: "constructive.fereastra",
		description: [
			"constructive.fereastradesc1",
			"constructive.fereastradesc2",
		],
	},
	{
		source: "/images/products/tamplarie-pvc/usa.webp",
		title: "constructive.usa",
		description: ["constructive.usadesc1", "constructive.usadesc2"],
	},
	{
		source: "/images/products/tamplarie-pvc/culisanta.webp",
		title: "constructive.culisanta",
		description: ["constructive.culisantadesc"],
	},
];

const profilesData = [
	{
		manufacturer: "Klass",
		manufacturerLogo: "/images/suppliers/klass.webp",
		model: "K-600",
		profile: "/images/products/tamplarie-pvc/k600.webp",
		href: "/produse/tamplarie-pvc/klass600",
		image: "/images/products/tamplarie-pvc/klass_demo.webp",
		tehnicalDetails: [
			{
				label: "common:profilespecs.adancime",
				value: "70mm",
			},
			{
				label: "common:profilespecs.structura",
				value: "6",
			},
			{
				label: "common:profilespecs.izolare",
				value: "1.33 W/m2k",
			},
			{
				label: "common:profilespecs.vitrare",
				value: "24mm / 34mm",
			},
			{
				label: "common:profilespecs.clasa",
				value: "A / B",
			},
		],
	},
	{
		manufacturer: "Salamander",
		manufacturerLogo: "/images/suppliers/salamander.webp",
		model: "Streamline 76",
		profile: "/images/products/tamplarie-pvc/sl76.webp",
		href: "/produse/tamplarie-pvc/streamline76",
		image: "/images/products/tamplarie-pvc/streamline_demo.webp",
		tehnicalDetails: [
			{
				label: "common:profilespecs.adancime",
				value: "76mm",
			},
			{
				label: "common:profilespecs.structura",
				value: "5 / 7",
			},
			{
				label: "common:profilespecs.izolare",
				value: "1.3 W/m2k",
			},
			{
				label: "common:profilespecs.vitrare",
				value: "24mm / 40mm",
			},
			{
				label: "common:profilespecs.clasa",
				value: "A",
			},
		],
	},
	{
		manufacturer: "Salamander",
		manufacturerLogo: "/images/suppliers/salamander.webp",
		model: "bluEvolution 82",
		profile: "/images/products/tamplarie-pvc/bluevo82.webp",
		href: "/produse/tamplarie-pvc/bluevolution82",
		image: "/images/products/tamplarie-pvc/evo82_demo.webp",
		tehnicalDetails: [
			{
				label: "common:profilespecs.adancime",
				value: "82mm",
			},
			{
				label: "common:profilespecs.structura",
				value: "6",
			},
			{
				label: "common:profilespecs.izolare",
				value: "0.98 W/m2k",
			},
			{
				label: "common:profilespecs.vitrare",
				value: "24mm / 48mm",
			},
			{
				label: "common:profilespecs.clasa",
				value: "A",
			},
		],
	},
	{
		manufacturer: "Salamander",
		manufacturerLogo: "/images/suppliers/salamander.webp",
		model: "bluEvolution 92",
		profile: "/images/products/tamplarie-pvc/bluevo92.webp",
		href: "/produse/tamplarie-pvc/bluevolution92",
		image: "/images/products/tamplarie-pvc/evo92_demo.webp",
		tehnicalDetails: [
			{
				label: "common:profilespecs.adancime",
				value: "92mm",
			},
			{
				label: "common:profilespecs.structura",
				value: "6",
			},
			{
				label: "common:profilespecs.izolare",
				value: "0.92 W/m2k",
			},
			{
				label: "common:profilespecs.vitrare",
				value: "52mm",
			},
			{
				label: "common:profilespecs.clasa",
				value: "A",
			},
		],
	},
];

const ctaData = [
	"/images/products/tamplarie-pvc/klass_demo.webp",
	"/images/products/tamplarie-pvc/streamline_demo.webp",
	"/images/products/tamplarie-pvc/evo82_demo.webp",
	"/images/products/tamplarie-pvc/evo92_demo.webp",
];

export default function TamplariePVC() {
	const { t } = useTranslation("tamplariepvc");
	return (
		<Layout
			title={t("common:product.tamplariepvc")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/tamplarie-pvc"
		>
			<div className="container-padding">
				<div className="section-spacing" />
				<section id="landing">
					<ProductLanding data={landingData} t={t} />
				</section>

				<div className="section-spacing" />

				<section id="constructive">
					<ConstructiveOptions data={constructiveData} t={t} />
				</section>

				<div className="section-spacing" />

				<section id="profiles">
					<h2 className="text-center mb-10">
						{t("common:fereastrapbt")}
					</h2>
					<Profiles data={profilesData} t={t} />
				</section>
			</div>

			<div className="section-spacing" />

			<section id="atypics">
				<Atypics t={t} />
			</section>

			<div className="section-spacing" />

			<div className="container-padding">
				<Colors t={t} />

				<div className="section-spacing" />

				<ProductCTA t={t} data={ctaData} />
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
				"tamplariepvc",
			])),
		},
	};
}
