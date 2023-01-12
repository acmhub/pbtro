import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import Layout from "../../components/General/Layout";
const ProductLanding = dynamic(() =>
	import("../../components/Products/ProductLanding")
);
const ProductCTA = dynamic(() =>
	import("../../components/Products/ProductCTA")
);
const Atypics = dynamic(() => import("../../components/Products/Atypics"));

const landingData = {
	src: "/images/products/tamplarie-lemn/highlight.webp",
	product: "common:product.tamplarielemn",
	description: ["description"],
};

const ctaData = ["/images/products/tamplarie-lemn/highlight.webp"];

export default function TamplarieLemn() {
	const { t } = useTranslation("tamplarielemn");
	return (
		<Layout
			title={t("common:product.tamplarielemn")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/tamplarie-lemn"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<section className="relative lg:p-4 lg:py-10" id="plating">
					<div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>
					<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
						<div className="space-y-4 lg:text-white my-auto">
							<h3>
								{t("common:product.tamplarielemn")} <br />
								{t("aluplating")}
							</h3>
							<p className="text-justify">
								{t("aluplatingdesc")}
							</p>
						</div>

						<div className="order-first lg:order-2">
							<div className="relative h-96 w-auto">
								<Image
									src="/images/products/tamplarie-lemn/wood-plating.webp"
									alt={t("common:product.tamplarielemn")}
									layout="fill"
									objectFit="contain"
									priority
								/>
							</div>
						</div>

						<div className="order-last my-auto">
							<div className="space-y-8 w-fit mx-auto lg:w-full">
								{["durabil", "termic", "fonic", "estetic"].map(
									(e, i) => (
										<div
											className="flex items-center space-x-2"
											key={i}
										>
											<div className="bg-theme1 rounded-full h-8 w-8 grid place-content-center p-0.5">
												<MdDone className="h-6 w-6 text-white" />
											</div>
											<span>{t(e)}</span>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="section-spacing" />

			<Atypics t={t} />

			<div className="section-spacing" />

			<div className="container-padding">
				<section className="space-y-10" id="colors">
					<h2 className="text-center">
						{t("common:colors.available")}
					</h2>

					<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2">
						{[
							"/images/products/tamplarie-lemn/colors/c12.webp",
							"/images/products/tamplarie-lemn/colors/c13.webp",
							"/images/products/tamplarie-lemn/colors/c14.webp",
							"/images/products/tamplarie-lemn/colors/c15.webp",
							"/images/products/tamplarie-lemn/colors/c16.webp",
							"/images/products/tamplarie-lemn/colors/c17.webp",
							"/images/products/tamplarie-lemn/colors/c18.webp",
							"/images/products/tamplarie-lemn/colors/c19.webp",
							"/images/products/tamplarie-lemn/colors/c20.webp",
							"/images/products/tamplarie-lemn/colors/c21.webp",
							"/images/products/tamplarie-lemn/colors/c23.webp",
							"/images/products/tamplarie-lemn/colors/c33.webp",
						].map((e, i) => (
							<div key={i}>
								<div className="relative h-52 w-auto">
									<Image
										src={e}
										alt="Culoare"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<h6 className="text-center">
									{e.replace(/^.*[\\\/]/, "").slice(0, -5)}
								</h6>
							</div>
						))}
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
				"tamplarielemn",
			])),
		},
	};
}
