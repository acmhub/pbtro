import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Layout from "../../components/General/Layout";
import ProductLanding from "../../components/Products/ProductLanding";
import ProductCTA from "../../components/Products/ProductCTA";
import { firedoorData } from "../../components/Products/UsaAntifoc";
import Modal from "@mui/material/Modal";
import { MdClose, MdDone } from "react-icons/md";

const landingData = {
	src: "/images/products/usa-antifoc/highlight.webp",
	product: "common:product.usaantifoc",
	description: ["description"],
};

const ctaData = ["/images/products/usa-antifoc/highlight.webp"];

export default function UsaAntifoc() {
	const { t } = useTranslation("usaantifoc");
	const [modalState, setModalState] = useState(null);

	return (
		<Layout
			title={t("common:product.usaantifoc")}
			description={t("description")}
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<section className="relative lg:p-4 lg:py-10" id="description">
					<div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>
					<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
						<div className="space-y-4 lg:text-white my-auto">
							<h3>
								{t("details.title1")} <br />
								{t("details.title2")}
							</h3>
							<p className="text-justify">
								{t("details.paragraph")}
							</p>
						</div>

						<div className="order-first lg:order-2">
							<div className="relative h-96 w-auto">
								<Image
									src="/images/products/usa-antifoc/highlight.webp"
									alt={t("common:product.usaatifoc")}
									layout="fill"
									objectFit="contain"
									priority
								/>
							</div>
						</div>

						<div className="order-last my-auto">
							<div className="space-y-8 w-fit mx-auto lg:w-full">
								{[
									"details.quality",
									"details.heat",
									"details.cover",
									"details.estetic",
								].map((e, i) => (
									<div
										className="flex items-center space-x-2"
										key={i}
									>
										<div className="bg-theme1 rounded-full h-8 w-8 grid place-content-center p-0.5">
											<MdDone className="h-6 w-6 text-white" />
										</div>
										<span>{t(e)}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<div className="section-spacing" />

				<section className="space-y-4" id="models">
					<h3 className="text-center">{t("details.models")}</h3>

					<div className="grid grid-cols-2 lg:grid-cols-6 gap-1">
						{firedoorData.map((e, i) => (
							<div key={i}>
								<div
									className="cursor-zoom-in"
									onClick={() => setModalState(i)}
								>
									<div className="relative h-40 w-auto">
										<Image
											src={e.source}
											alt={e.name}
											layout="fill"
											objectFit="contain"
										/>
									</div>
									<h6 className="text-center">{e.name}</h6>
								</div>
								<Modal
									open={modalState === i ? true : false}
									onClose={() => setModalState(null)}
									aria-labelledby="firedoor-model"
									aria-describedby="firedoor-model-details"
									sx={{ paper: { outline: "none" } }}
								>
									<div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-2 p-2">
										<div
											className="absolute top-1 right-1 cursor-pointer z-10"
											onClick={() => setModalState(null)}
										>
											<MdClose className="h-6 w-6" />
										</div>
										<div className="relative h-[80vh] w-full">
											<Image
												src={e.source}
												alt={e.name}
												layout="fill"
												objectFit="contain"
											/>
										</div>
										<h5>{e.name}</h5>
									</div>
								</Modal>
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
			...(await serverSideTranslations(locale, ["common", "usaantifoc"])),
		},
	};
}
