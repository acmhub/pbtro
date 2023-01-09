import React from "react";
import Link from "next/link";
import {
	MdSupportAgent,
	MdOutlineVerified,
	MdOutlinePrecisionManufacturing,
	MdSquareFoot,
	MdOutlineLocalShipping,
} from "react-icons/md";
import { GiDrill } from "react-icons/gi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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

export default function Services({ t }) {
	return (
		<div className="container-padding space-y-10">
			<h2 className="text-center">{t("services.title")}</h2>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{servicesData.map((e, i) => (
					<div className="bg-white shadow flex items-center" key={i}>
						<div className="bg-theme2 text-white h-full w-fit flex items-center p-2">
							<e.Icon className="h-8 w-8" />
						</div>
						<div className="space-y-4 p-4">
							<h4>{t(e.title)}</h4>
							<p>{t(e.description)}</p>
						</div>
					</div>
				))}
			</div>

			<Link href="/servicii" passhref>
				<a className="theme-button2 flex items-center space-x-2 w-fit mx-auto">
					<span>{t("common:moreinfo")}</span>
					<HiOutlineArrowNarrowRight className="h-6 w-6" />
				</a>
			</Link>
		</div>
	);
}
