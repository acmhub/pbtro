import React from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../../../components/General/Layout";

const tehnicalDetails = [
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
];

export default function Streamline76() {
	const { t } = useTranslation("");
	return (
		<Layout
			title="Salamander Streamline76"
			canonical="https://pbtromania.ro/produse/tamplarie-pvc/streamline76"
		>
			<div className="section-spacing" />

			<div className="container-padding space-y-10">
				<h1 className="text-center">{t("common:fereastrapbt")}</h1>

				<div>
					<div className="relative h-64 w-auto">
						<Image
							src="/images/products/tamplarie-pvc/sl76.webp"
							alt="Streamline76"
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<div className="flex justify-center items-center space-x-4">
						<div className="relative h-28 w-28">
							<Image
								src="/images/suppliers/salamander.webp"
								alt="Salamander"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<h4>Streamline76</h4>
					</div>
				</div>

				<div className="md:max-w-2xl md:mx-auto space-y-2">
					{tehnicalDetails.map((detail, index) => (
						<div className="card" key={index}>
							<div className="text-gray-400">
								{t(detail.label)}
							</div>
							<h5>{t(detail.value)}</h5>
						</div>
					))}
				</div>
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
