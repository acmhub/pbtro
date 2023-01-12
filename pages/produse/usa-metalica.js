import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Layout from "../../components/General/Layout";
const ProductLanding = dynamic(() =>
	import("../../components/Products/ProductLanding")
);
const ModelsGallery = dynamic(() =>
	import("../../components/Products/ModelsGallery")
);
const ProductCTA = dynamic(() =>
	import("../../components/Products/ProductCTA")
);
import { metalicData } from "../../components/Products/MetallicDoor";

const landingData = {
	src: "/images/products/usa-metalica/highlight.webp",
	product: "common:product.usametalica",
	description: ["description"],
};

const profileSpecs = [
	"profile.toc",
	"profile.izolatie",
	"profile.otel",
	"profile.prag",
	"profile.vitrare",
];

const ctaData = ["/images/products/usa-metalica/highlight.webp"];

export default function UsaMetalica() {
	const { t } = useTranslation("usametalica");

	return (
		<Layout
			title={t("common:product.usametalica")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/usa-metalica"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<section className="space-y-4">
					<h3 className="text-center">{t("models")}</h3>

					<ModelsGallery data={metalicData} />
				</section>

				<div className="section-spacing" />

				<section className="space-y-16" id="profile">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
						<div className="col-span-1 my-auto">
							<div className="relative h-96 w-full">
								<Image
									src="/images/products/usa-metalica/profile.webp"
									alt={t("usametalica")}
									layout="fill"
									objectFit="contain"
								/>
							</div>
						</div>

						<div className="col-span-1 space-y-4">
							{profileSpecs.map((e, i) => (
								<div
									className="flex items-center space-x-2"
									key={i}
								>
									<div className="bg-theme1 text-white p-4 grid place-content-center">
										0{i + 1}
									</div>
									<p>{t(e)}</p>
								</div>
							))}
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="col-span-1 space-y-8">
							<h4 className="text-center">{t("transfer")}</h4>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								<div className="col-span-1 text-center">
									<h6>{t("fgeam")}</h6>
									<h5>0,68 W/&#x33A1;K</h5>
								</div>
								<div className="col-span-1 text-center">
									<h6>{t("cgeam")}</h6>
									<h5>0,78 W/&#x33A1;K</h5>
								</div>
							</div>
						</div>

						<div className="col-span-1 space-y-8">
							<h4 className="text-center">{t("culori")}</h4>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								<div className="col-span-1 grid place-content-center text-center">
									<div className="relative h-24 w-24 bg-white shadow"></div>
									<h5>{t("alb")}</h5>
								</div>
								<div className="col-span-1 grid place-content-center text-center">
									<div className="relative h-24 w-24 bg-neutral-700 shadow"></div>
									<h5>{t("gri")}</h5>
								</div>
							</div>
						</div>
					</div>
				</section>

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
				"usametalica",
			])),
		},
	};
}
