import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import {
	MdSupportAgent,
	MdOutlineVerified,
	MdOutlinePrecisionManufacturing,
	MdSquareFoot,
	MdOutlineLocalShipping,
	MdCircle,
} from "react-icons/md";
import { GiDrill } from "react-icons/gi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Layout from "../components/General/Layout";
import Suppliers from "../components/General/Suppliers";

const statsData = [
	{
		count: "1874",
		name: "stats.projects",
	},
	{
		count: "1452",
		name: "stats.clients",
	},
	{
		count: "32",
		name: "stats.services",
	},
	{
		count: "42",
		name: "stats.employees",
	},
];

const servicesData = [
	{
		Icon: MdSupportAgent,
		title: "services.consult",
		description: "services.consultdesc",
	},
	{
		Icon: MdOutlineVerified,
		title: "services.quality",
		description: "services.qualitydesc",
	},
	{
		Icon: MdOutlinePrecisionManufacturing,
		title: "services.production",
		description: "services.productiondesc",
	},
	{
		Icon: MdSquareFoot,
		title: "services.measurements",
		description: "services.measurementsdesc",
	},
	{
		Icon: MdOutlineLocalShipping,
		title: "services.delivery",
		description: "services.deliverydesc",
	},
	{
		Icon: GiDrill,
		title: "services.fitting",
		description: "services.fittingdesc",
	},
];

const timelineData = [
	{
		year: "2006",
		card: [
			{
				content: [
					"timeline.2006p1",
					"timeline.2006p2",
					"timeline.2006p3",
				],
			},
		],
	},
	{
		year: "2010",
		card: [
			{
				content: ["timeline.2010p1"],
			},
		],
	},
	{
		year: "2020",
		card: [
			{
				content: ["timeline.2020p1", "timeline.2020p2"],
			},
		],
	},
	{
		year: "2021",
		card: [
			{
				content: ["timeline.2021p1", "timeline.2021p2"],
			},
			{
				content: ["timeline.2021p3", "timeline.2021p4"],
			},
			{
				content: ["timeline.2021p5"],
			},
		],
	},
	{
		year: "timeline.prezent",
		card: [
			{
				content: ["timeline.prezp1", "timeline.prezp2"],
			},
		],
	},
];

export default function About() {
	const { t } = useTranslation("about");
	const [statsCount, setStatsCount] = useState(false);

	return (
		<Layout
			pageID="about"
			title={t("common:about")}
			description={t("paragraph")}
			canonical="https://pbtromania.ro/despre-noi"
		>
			<div className="section-spacing-lg" />

			<div className="container-padding">
				<h1 className="text-center lg:mb-20">{t("common:about")}</h1>

				<section
					className="relative space-y-10 lg:p-4"
					id="description"
				>
					<div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>

					<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
						<div className="space-y-4 lg:text-white my-auto">
							<h2>{t("title")}</h2>
							<p className="text-justify">{t("paragraph")}</p>
						</div>

						<div className="order-first lg:order-2">
							<div className="relative h-96 w-auto shadow-xl">
								<Image
									src="/images/fillers/atelier.webp"
									alt="Atelier tamplarie pvc, lemn si aluminiu"
									layout="fill"
									objectFit="cover"
									priority
								/>
							</div>
						</div>

						<div className="order-last my-auto">
							<div className="grid grid-cols-2 z-10">
								{statsData.map((e, i) => (
									<div className="text-center p-2" key={i}>
										<h4>
											<VisibilitySensor
												onChange={(visible) =>
													visible &&
													setStatsCount(true)
												}
												partialVisibility={false}
												delayedCall
											>
												<CountUp
													start={0}
													end={
														statsCount ? e.count : 0
													}
													suffix={i <= 1 ? "+" : ""}
													duration={(i + 1) * 1.2}
													decimals={0}
												/>
											</VisibilitySensor>
										</h4>
										<p className="uppercase">{t(e.name)}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="hidden lg:block">
						<Suppliers />
					</div>
				</section>
			</div>

			<div className="block lg:hidden">
				<Suppliers />
			</div>

			<div className="container-padding">
				<div className="section-spacing" />

				<section className="relative space-y-10" id="services">
					<h2 className="text-center">{t("services.title")}</h2>

					<div className="py-1" />

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-y-10 lg:gap-x-4">
						{servicesData.map((e, i) => (
							<div
								className="relative bg-white shadow flex flex-col items-center pt-4"
								key={i}
							>
								<div className="absolute left-1/2 -translate-x-1/2 -translate-y-10 flex items-center bg-theme1 text-white rounded-full w-fit p-2">
									<e.Icon className="h-8 w-8" />
								</div>
								<div className="p-4">
									<h4>{t(e.title)}</h4>
									<p>{t(e.description)}</p>
								</div>
							</div>
						))}
					</div>

					<Link href="/servicii" passhref>
						<a className="theme-button1 flex items-center space-x-2 w-fit mx-auto">
							<span>{t("common:moreinfo")}</span>
							<HiOutlineArrowNarrowRight className="h-6 w-6" />
						</a>
					</Link>
				</section>

				<div className="section-spacing" />

				<section id="evolution">
					<h3 className="text-center">{t("timeline.title")}</h3>

					<div className="relative mt-5 md:w-2/3 md:mx-auto">
						{timelineData.map((e, i) => (
							<div className="relative flex items-center" key={i}>
								<h5 className="hidden md:block w-[12%] mb-auto">
									{t(e.year)}
								</h5>

								<div className="border-r-2 border-theme1 absolute h-full left-1 md:ml-6 md:left-20 top-3 z-10">
									<MdCircle className="absolute -top-1 -ml-1.5 text-theme2 h-4 w-4" />
								</div>

								<div className="basis-[78%] ml-10 md:ml-16 lg:ml-10 xl:ml-4">
									<div className="mb-4 lg:mt-2 md:hidden">
										<div className="font-bold">
											{t(e.year)}
										</div>
									</div>

									{e.card.map((card, index) => (
										<div key={index}>
											<div className="mb-5">
												{card.content.map(
													(pgh, idx) => (
														<p key={idx}>
															{t(pgh)}
														</p>
													)
												)}
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				<div className="section-spacing" />

				<section id="cta">
					<div className="relative bg-gradient-to-tr from-[#bb9031] to-[#f4b632]  shadow-xl">
						<div className="grid grid-cols-1 lg:grid-cols-2">
							<div className="space-y-8 px-8 py-8 lg:py-16 text-white my-auto">
								<div className="space-y-4">
									<h3>{t("cta.title")}</h3>
									<p>{t("cta.description")}</p>
								</div>

								<div className="flex space-x-4">
									<button className="theme-button1">
										{t("common:getquote")}
									</button>
								</div>
							</div>
							<div className="flex items-end justify-end">
								<img
									src="/images/fillers/house-image.webp"
									alt={t("common:getquote")}
									className="relative h-auto w-auto object-contain"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "about"])),
		},
	};
}
