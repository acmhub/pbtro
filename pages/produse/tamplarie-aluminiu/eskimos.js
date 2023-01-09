import React from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../../../components/General/Layout";

const tehnicalDetails = [
	{
		label: "common:profilespecs.toc",
		value: "53mm",
	},
	{
		label: "common:profilespecs.izolare",
		value: "1.15 W/m2k",
	},
	{
		label: "common:profilespecs.vitrare",
		value: "18mm / 38mm",
	},
	{
		label: "common:profilespecs.fonica",
		value: "48dB",
	},
];

export default function Eskimos() {
	const { t } = useTranslation("");
	return (
		<Layout
			title="Altest Eskimos"
			canonical="https://pbtromania.ro/produse/tamplarie-aluminiu/eskimos"
		>
			<div className="section-spacing" />

			<div className="container-padding space-y-10">
				<h1 className="text-center">{t("common:fereastrapbt")}</h1>

				<div>
					<div className="relative h-64 w-auto">
						<Image
							src="/images/products/tamplarie-aluminiu/eskimos.png"
							alt="Eskimos"
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<div className="flex justify-center items-center space-x-4">
						<div className="relative h-28 w-28">
							<Image
								src="/images/suppliers/altest.webp"
								alt="Altest"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<h4>Eskimos</h4>
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
