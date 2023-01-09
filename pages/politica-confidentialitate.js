import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/General/Layout";

const privacyData = [
	{
		title: "general.title",
		description: ["general.desc1", "general.desc2"],
	},
	{
		title: "categories.title",
		description: ["categories.desc"],
	},
	{
		title: "purpose.title",
		description: [
			"purpose.desc1",
			"purpose.desc2",
			"purpose.desc3",
			"purpose.desc4",
			"purpose.desc5",
		],
	},
	{
		title: "duration.title",
		description: ["duration.desc"],
	},
	{
		title: "reveal.title",
		description: [
			"reveal.desc1",
			"reveal.desc2",
			"reveal.desc3",
			"reveal.desc4",
		],
	},
];

export default function PoliticaCookies() {
	const { t } = useTranslation("privacy");

	return (
		<Layout
			pageID="privacy"
			title={t("common:privacypolicy")}
			canonical="https://pbtromania.ro/politica-confidentialitate"
		>
			<div className="section-spacing-lg" />

			<div className="container-padding">
				<h1 className="text-center mb-20">
					{t("common:privacypolicy")}
				</h1>

				<div className="divide-y lg:max-w-5xl lg:mx-auto">
					{privacyData.map((e, i) => (
						<div className="space-y-2 py-6" key={i}>
							<h5>
								{i + 1}. {t(e.title)}
							</h5>

							<div>
								{e.description.map((pgh, idx) => (
									<p className="text-indent" key={idx}>
										{t(pgh)}
									</p>
								))}
							</div>
						</div>
					))}
					<div className="space-y-2 py-6">
						<h5>06. {t("rights.title")}</h5>

						<div>
							<p className="text-indent">{t("rights.desc1")}</p>
							<p className="text-indent">{t("rights.desc2")}</p>
							<p className="text-indent">{t("rights.desc3")}</p>
							<p className="text-indent">{t("rights.desc4")}</p>
							<p className="text-indent">{t("rights.desc5")}</p>
							<div className="pl-4">
								<p className="text-indent">
									{t("rights.extradesc6")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc7")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc8")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc9")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc10")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc11")}
								</p>
							</div>

							<p className="text-indent">{t("rights.desc11")}</p>
							<p className="text-indent">{t("rights.desc12")}</p>
							<div className="pl-4">
								<p className="text-indent">
									{t("rights.extradesc14")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc15")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc16")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc17")}
								</p>
							</div>

							<p className="text-indent">{t("rights.desc18")}</p>
							<p className="text-indent">{t("rights.desc19")}</p>
							<div className="pl-4">
								<p className="text-indent">
									{t("rights.extradesc20")}
								</p>
								<p className="text-indent">
									{t("rights.extradesc21")}
								</p>
							</div>

							<p className="text-indent">{t("rights.desc22")}</p>
							<p className="text-indent">{t("rights.desc23")}</p>
						</div>
					</div>
				</div>

				<p className="text-indent">{t("finaldisclaimer")}</p>
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "privacy"])),
		},
	};
}
