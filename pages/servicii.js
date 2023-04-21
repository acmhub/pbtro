import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Layout from "../components/General/Layout";
const Products = dynamic(() => import("../components/HomeComponents/products"));

const servicesData = [
	{
		src: "/images/services/consulting.webp",
		title: "services.consult",
		description: "services.consultdesc",
	},
	{
		src: "/images/services/quality.webp",
		title: "services.quality",
		description: "services.qualitydesc",
	},
	{
		src: "/images/services/production.webp",
		title: "services.production",
		description: "services.productiondesc",
	},
	{
		src: "/images/services/measurements.webp",
		title: "services.measurements",
		description: "services.measurementsdesc",
	},
	{
		src: "/images/services/delivery.webp",
		title: "services.delivery",
		description: "services.deliverydesc",
	},
	{
		src: "/images/services/fitting.webp",
		title: "services.fitting",
		description: "services.fittingdesc",
	},
];

export default function Services() {
	const { t } = useTranslation("services");

	return (
		<Layout
			pageID="services"
			title={t("common:services")}
			description={t("common:services.consultdesc")}
			canonical="https://pbtromania.ro/servicii"
		>
			<div className="section-spacing-lg" />

			<div className="container-padding">
				<h1 className="text-center mb-16">{t("common:services")}</h1>

				<div className="space-y-10">
					{servicesData.map((e, i) => (
						<div className="grid card p-0 grid-cols-1 lg:grid-cols-2" key={i}>
							<div className={i % 2 == 0 ? "order-first" : "lg:order-last"}>
								<div className="relative h-96 w-full">
									<Image src={e.src} alt={t(e.title)} layout="fill" objectFit="cover" />
								</div>
							</div>
							<div className="space-y-4 my-auto p-4">
								<p className="text-3xl">{t(e.title)}</p>
								<p>{t(e.description)}</p>
							</div>
						</div>
					))}
				</div>

				<div className="section-spacing" />

				<section className="relative lg:p-4 lg:py-10" id="export">
					<div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>
					<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 z-10">
						<div className="space-y-4 lg:text-white my-auto">
							<h2>{t("export.title")}</h2>
							<p className="text-justify">{t("export.description")}</p>
						</div>

						<div className="order-first lg:order-last lg:col-span-2">
							<div className="relative h-96 w-auto shadow-xl">
								<Image
									src="/images/portfolio/8.webp"
									alt={t("export.title")}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</div>
					</div>
				</section>

				<div className="section-spacing" />

				<Products t={t} />
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "services"])),
		},
	};
}
