import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight, HiOutlineEmojiHappy } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
import { BiRuler } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const stepsData = [
	{
		Icon: RiDraftLine,
		title: "calltoaction.draft",
		description: "calltoaction.draftdesc",
	},
	{
		Icon: MdSupportAgent,
		title: "calltoaction.support",
		description: "calltoaction.supportdesc",
	},
	{
		Icon: BiRuler,
		title: "calltoaction.paymeasure",
		description: "calltoaction.paymeasuredesc",
	},
	{
		Icon: VscTools,
		title: "calltoaction.production",
		description: "calltoaction.productiondesc",
	},
	{
		Icon: HiOutlineEmojiHappy,
		title: "calltoaction.happy",
		description: "calltoaction.happydesc",
	},
];

export default function CallToAction({ t }) {
	return (
		<div className="container-padding">
			<h2 className="text-center mb-10">{t("calltoaction.title")}</h2>

			<div className="relative py-3 sm:max-w-5xl sm:mx-auto w-full px-2 sm:px-0">
				<div className="hidden sm:block w-px bg-theme1 absolute h-full left-1/2 transform -translate-x-1/2"></div>

				{stepsData.map((e, i) => (
					<div className="mt-6 sm:mt-0" key={i}>
						<div className="flex flex-col sm:flex-row items-center">
							<div
								className={`flex ${
									i % 2 == 0 ? "justify-start" : "justify-end"
								} w-full mx-auto items-center`}
							>
								<div className={`w-full sm:w-1/2 ${i % 2 == 0 ? "sm:pr-8" : "sm:pl-8"}`}>
									<div className="relative bg-white rounded shadow space-y-1 pt-8 sm:pt-4 p-4">
										<p
											className={`${
												i % 2 ? "text-left" : "sm:text-right"
											} text-xl text-theme1 tracking-widest font-bold opacity-80`}
										>
											0{i + 1}
										</p>

										<p className="text-2xl">{t(e.title)}</p>
										<p>{t(e.description)}</p>
									</div>
								</div>
							</div>
							<div className="lg:hidden my-3" />
							<div className="rounded-full bg-theme1 w-11 h-11 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
								<e.Icon className="h-7 w-7 text-white" />
							</div>
						</div>
					</div>
				))}
			</div>

			<Link href="/solicita-oferta" passhref>
				<a className="theme-button1-outlined flex items-center space-x-2 w-fit mx-auto mt-0 sm:mt-10 lg:mt-20">
					<span>{t("common:getquote")}</span>
					<HiOutlineArrowNarrowRight className="h-6 w-6" />
				</a>
			</Link>
		</div>
	);
}
