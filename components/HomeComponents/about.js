import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import Suppliers from "../General/Suppliers";

const statsData = [
	{
		count: "1874",
		name: "about.projects",
	},
	{
		count: "1452",
		name: "about.clients",
	},
	{
		count: "32",
		name: "about.services",
	},
	{
		count: "42",
		name: "about.employees",
	},
];

export default function About({ t }) {
	const [yearCount, setYearCount] = useState(false);
	const [statsCount, setStatsCount] = useState(false);

	return (
		<div className="space-y-10">
			<div className="container-padding relative space-y-20">
				<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
					<div className="col-span-1 lg:col-span-3 relative h-96">
						<div className="absolute top-2 left-2 h-72 w-[75%] shadow-xl">
							<Image
								src="/images/portfolio/16.webp"
								alt="Tamplarie aluminiu"
								layout="fill"
								objectFit="cover"
							/>
						</div>

						<div className="absolute bottom-2 right-2 h-64 w-[50%] shadow-xl">
							<Image
								src="/images/portfolio/1.webp"
								alt="Tamplarie termopan"
								layout="fill"
								objectFit="cover"
								priority
							/>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-6 text-center">
						<h2 className="year-text h-56 grid place-content-center text-[14rem] font-bold">
							<VisibilitySensor
								onChange={(visible) =>
									visible && setYearCount(true)
								}
								partialVisibility={false}
								delayedCall
							>
								<CountUp
									start={0}
									end={
										yearCount
											? new Date().getFullYear() - 2006
											: 0
									}
									duration={3}
									decimals={0}
								/>
							</VisibilitySensor>
						</h2>
						<div className="space-y-4 my-auto">
							<h4 className="text-4xl uppercase">
								{t("about.experience")}
							</h4>
							<p className="lg:w-4/5 lg:mx-auto">
								{t("about.description")}
							</p>
							<Link href="/despre-noi" passHref>
								<a className="block mx-auto w-fit">
									<button className="theme-button1">
										{t("common:seemore")}
									</button>
								</a>
							</Link>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-3 hidden lg:block relative h-96">
						<div className="absolute top-2 right-2 h-72 w-[75%] shadow-xl">
							<Image
								src="/images/portfolio/47.webp"
								alt="Tamplarie usa termopan"
								layout="fill"
								objectFit="cover"
							/>
						</div>

						<div className="absolute bottom-2 left-2 h-64 w-[50%] shadow-xl">
							<Image
								src="/images/portfolio/34.webp"
								alt="Tamplarie pvc"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				</div>

				<img
					src="/images/fillers/worldmap.png"
					alt="geam"
					className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-96 w-fit object-contain opacity-[0.05] z-[0]"
				/>

				<div className="grid grid-cols-2 xl:grid-cols-4 lg:divide-x">
					{statsData.map((e, i) => (
						<div className="text-center p-2" key={i}>
							<h4>
								<VisibilitySensor
									onChange={(visible) =>
										visible && setStatsCount(true)
									}
									partialVisibility={false}
									delayedCall
								>
									<CountUp
										start={0}
										end={statsCount ? e.count : 0}
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

			<Suppliers />
		</div>
	);
}
