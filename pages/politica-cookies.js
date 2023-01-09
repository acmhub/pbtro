import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/General/Layout";

const cookiesDisclaimer = [
	{
		title: "intro",
		description: ["introdesc"],
	},
	{
		title: "what",
		description: ["whatdesc1", "whatdesc2", "whatdesc3", "whatdesc4"],
	},
	{
		title: "usage",
		description: [
			"usagedesc1",
			"usagedesc2",
			"usagedesc3",
			"usagedesc4",
			"usagedesc5",
		],
	},
	{
		title: "duration",
		description: ["durationdesc1", "durationdesc2", "durationdesc3"],
	},
	{
		title: "terti",
		description: ["tertidesc1", "tertidesc2", "tertidesc3"],
	},
	{
		title: "used",
		description: ["useddesc1", "useddesc2", "useddesc3", "useddesc4"],
	},
	{
		title: "type",
		description: ["typedesc1"],
	},
	{
		title: "part",
		description: ["partdesc1", "partdesc2"],
	},
	{
		title: "disable",
		description: [
			"disabledesc1",
			"disabledesc2",
			"disabledesc3",
			"disabledesc4",
		],
	},
];

export default function PoliticaCookies() {
	const { t } = useTranslation("cookies");

	return (
		<Layout
			pageID="cookies"
			title={t("common:cookiespolicy")}
			canonical="https://pbtromania.ro/politica-cookies"
		>
			<div className="section-spacing-lg" />

			<div className="container-padding">
				<h1 className="text-center mb-20">
					{t("common:cookiespolicy")}
				</h1>

				<div className="divide-y lg:max-w-5xl lg:mx-auto">
					{cookiesDisclaimer.map((e, i) => (
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
				</div>
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "cookies"])),
		},
	};
}
