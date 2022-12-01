import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardsData = [
	{
		name: "common:product.tamplariepvc",
		description: "windows.pvcdesc",
		image: "/images/fillers/pvcprofile.jpg",
		link: "/produse/tamplarie-pvc",
	},
	{
		name: "common:product.tamplariealuminiu",
		description: "windows.aludesc",
		image: "/images/fillers/aluprofile.jpg",
		link: "/produse/tamplarie-aluminiu",
	},
	{
		name: "common:product.tamplarielemn",
		description: "windows.wooddesc",
		image: "/images/fillers/woodprofile.jpg",
		link: "/produse/tamplarie-lemn",
	},
];

const specsData = [
	{
		icon: "volume_off",
		name: "windows.sound",
	},
	{
		icon: "light_mode",
		name: "windows.sun",
	},
	{
		icon: "verified_user",
		name: "windows.durable",
	},
	{
		icon: "recycling",
		name: "windows.eco",
	},
	{
		icon: "architecture",
		name: "windows.design",
	},
];

export default function WindowDoor({ t }) {
	return (
		<div>
			<div className="container-padding">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
					<div className="col-span-1 lg:col-span-4 space-y-10 my-auto">
						<div className="space-y-2">
							<h6 className="text-gray-400 uppercase">
								{t("windows.rightchoice")}
							</h6>
							<h2>{t("windows.windoor")}</h2>
						</div>

						<div className="text-justify space-y-2">
							<p>{t("windows.paragraph1")}</p>
							<p>{t("windows.paragraph2")}</p>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-5">
						<div className="relative h-[400px] w-full">
							<Image
								src="/images/fillers/windowplant.webp"
								alt={
									t("common:fereastrapbt") +
									"- Geam termopan tripan"
								}
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-3 space-y-8 my-auto">
						{[
							"windows.production",
							"windows.team",
							"windows.quality",
							"windows.measurements",
						].map((e, i) => (
							<div
								className="flex items-center space-x-2"
								key={i}
							>
								<div className="bg-theme1 h-8 w-8 grid place-content-center rounded-full">
									<span className="material-icons block text-white">
										done
									</span>
								</div>
								<div>{t(e)}</div>
							</div>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 translate-y-8">
					{cardsData.map((e, i) => (
						<div className="card flex flex-col divide-y" key={i}>
							<div className="grid grid-cols-1 xl:grid-cols-12 gap-4 pb-3">
								<div className="col-span-1 xl:col-span-8 space-y-2">
									<div>
										<h6 className="text-theme1">
											{t("common:fereastrapbt")}
										</h6>
										<h4>{t(e.name)}</h4>
									</div>
									<p>{t(e.description)}</p>
								</div>
								<div className="col-span-1 xl:col-span-4 mb-auto order-first xl:order-last">
									<div className="relative h-24 w-auto">
										<Image
											src={e.image}
											alt={t(e.name)}
											layout="fill"
											objectFit="contain"
										/>
									</div>
								</div>
							</div>

							<div className="mt-auto pt-3">
								<Link href={e.link} passhref>
									<a className="flex items-center space-x-2 w-fit mx-auto">
										<span>{t("common:moreinfo")}</span>
										<span className="material-symbols-outlined">
											trending_flat
										</span>
									</a>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-theme2 pt-14 pb-4">
				<div className="container-padding flex flex-col lg:flex-row lg:items-center justify-between w-fit lg:w-full space-y-4 lg:space-y-0">
					{specsData.map((e, i) => (
						<div
							className="flex items-center space-x-2 text-white"
							key={i}
						>
							<span className="material-symbols-outlined m-icon-36">
								{e.icon}
							</span>
							<div className="text-xl">{t(e.name)}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
