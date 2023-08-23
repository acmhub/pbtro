import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { MdClose } from "react-icons/md";
import Layout from "../../components/General/Layout";
const ProductLanding = dynamic(() => import("../../components/Products/ProductLanding"));
const ModelsGallery = dynamic(() => import("../../components/Products/ModelsGallery"));
const Colors = dynamic(() => import("../../components/Products/Colors"));
const ProductCTA = dynamic(() => import("../../components/Products/ProductCTA"));
import { panelModels, glassModels, stainedModels } from "../../components/Products/PanelOrnamental";

const landingData = {
	src: "/images/products/panel-ornamental/highlight.webp",
	product: "common:product.panelornamental",
	description: ["description"],
};

const ctaData = ["/images/products/panel-ornamental/highlight.webp"];

export default function PanelOrnamental() {
	const { t } = useTranslation("panelornamental");
	const [modalState, setModalState] = useState("");

	return (
		<Layout
			title={t("common:product.panelornamental")}
			description={t("description")}
			canonical="https://pbtromania.ro/produse/panel-ornamental"
		>
			<div className="section-spacing" />

			<div className="container-padding">
				<ProductLanding data={landingData} t={t} />

				<div className="section-spacing" />

				<section className="space-y-4" id="panel-models">
					<h2 className="text-3xl text-center mb-10">{t("alumodels")}</h2>

					<ModelsGallery data={panelModels} />
				</section>

				<div className="section-spacing" />

				<section className="space-y-4" id="glass-models">
					<h2 className="text-3xl text-center mb-10">
						{t("alumodels")} <br />
						{t("glassmodels")}
					</h2>

					<ModelsGallery data={glassModels} />
				</section>

				<div className="section-spacing" />

				<section className="space-y-4" id="stainedglass-models">
					<h2 className="text-3xl text-center mb-10">{t("stainedmodels")}</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{stainedModels.map((e, i) => (
							<div key={i}>
								<div className="cursor-zoom-in" onClick={() => setModalState(i)}>
									<div className="relative h-40 md:h-64 w-auto">
										<Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
									</div>
									<p className="text-lg text-center">{e.name}</p>
								</div>
								<Modal
									open={modalState === i ? true : false}
									onClose={() => setModalState("")}
									aria-labelledby="rolete-model"
									aria-describedby="rolete-model-details"
									sx={{ paper: { outline: "none" } }}
								>
									<div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-xs lg:max-w-none lg:w-[600px] bg-white shadow space-y-2 p-2">
										<div
											className="absolute top-1 right-1 cursor-pointer z-10"
											onClick={() => setModalState("")}
										>
											<MdClose className="h-6 w-6" />
										</div>
										<div className="relative h-[80vh] w-full">
											<Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
										</div>
										<p className="text-center text-xl">{e.name}</p>
									</div>
								</Modal>
							</div>
						))}
					</div>
				</section>

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
			...(await serverSideTranslations(locale, ["common", "panelornamental"])),
		},
	};
}
