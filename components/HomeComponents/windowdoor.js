import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	MdDone,
	MdOutlineVolumeOff,
	MdOutlineLightMode,
	MdOutlineVerifiedUser,
	MdOutlineRecycling,
	MdOutlineArchitecture,
} from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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
		Icon: MdOutlineVolumeOff,
		name: "windows.sound",
	},
	{
		Icon: MdOutlineLightMode,
		name: "windows.sun",
	},
	{
		Icon: MdOutlineVerifiedUser,
		name: "windows.durable",
	},
	{
		Icon: MdOutlineRecycling,
		name: "windows.eco",
	},
	{
		Icon: MdOutlineArchitecture,
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
							<p className="text-gray-400 uppercase">{t("windows.rightchoice")}</p>
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
								alt={t("common:fereastrapbt") + "- Geam termopan tripan"}
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-3 space-y-8 my-auto">
						{["windows.production", "windows.team", "windows.quality", "windows.measurements"].map(
							(e, i) => (
								<div className="flex items-center space-x-2" key={i}>
									<div className="bg-theme1 h-8 w-8 grid place-content-center rounded-full">
										<MdDone className="h-6 w-6 text-white" />
									</div>
									<div>{t(e)}</div>
								</div>
							)
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 translate-y-8">
					{cardsData.map((e, i) => (
						<div className="card flex flex-col divide-y" key={i}>
							<div className="grid grid-cols-1 xl:grid-cols-12 gap-4 pb-3">
								<div className="col-span-1 xl:col-span-8 space-y-2">
									<div className="mb-2 space-y-1">
										<p className="text-theme1">{t("common:fereastrapbt")}</p>
										<h2 className="text-3xl">{t(e.name)}</h2>
									</div>
									<p>{t(e.description)}</p>
								</div>
								<div className="col-span-1 xl:col-span-4 mb-auto order-first xl:order-last">
									<div className="relative h-24 w-auto">
										<Image src={e.image} alt={t(e.name)} layout="fill" objectFit="contain" />
									</div>
								</div>
							</div>

							<div className="mt-auto pt-3">
								<Link href={e.link} passhref>
									<a className="flex items-center space-x-2 w-fit mx-auto">
										<span>{t("common:moreinfo")}</span>
										<HiOutlineArrowNarrowRight className="h-6 w-6" />
									</a>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-theme2 pt-14 pb-4">
				<div className="container-padding flex flex-col lg:flex-row lg:items-center justify-between w-fit lg:w-full space-y-5 lg:space-y-0">
					{specsData.map((e, i) => (
						<div className="flex items-center space-x-2 text-white" key={i}>
							<e.Icon className="h-8 w-8" />
							<div className="text-xl">{t(e.name)}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
