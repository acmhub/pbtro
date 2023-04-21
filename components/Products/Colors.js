import React, { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import { MdClose } from "react-icons/md";
import { woodImitation } from "./WoodImitations";
import { RALColors } from "./RALColors";

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
	({ theme }) => ({
		[`& .${tooltipClasses.arrow}`]: {
			color: theme.palette.primary.main,
		},
		[`& .${tooltipClasses.tooltip}`]: {
			fontSize: "16px",
			backgroundColor: theme.palette.primary.main,
		},
	})
);

export default function Colors({ t }) {
	const [wood, setWood] = useState(false);
	const [ral, setRAL] = useState(false);
	const [woodOpen, setWoodOpen] = useState({ state: false, index: null });

	return (
		<div className="space-y-10">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
				<div className="col-span-1 lg:col-span-8 space-y-8 my-auto">
					<h2>{t("common:colors.title")}</h2>
					<p>{t("common:colors.description")}</p>

					<div className="flex space-x-8">
						<button className="theme-button1" onClick={() => setWood(true)}>
							{t("common:colors.woodimitation")}
						</button>
						<Modal
							open={wood}
							onClose={() => setWood(false)}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-4 p-2">
								<div className="flex items-center justify-between">
									<p className="text-2xl">{t("common:colors.woodimitation")}</p>

									<MdClose className="h-6 w-6 cursor-pointer" onClick={() => setWood(false)} />
								</div>

								<div className="relative h-[75vh] overflow-y-scroll scrollbar-thin grid grid-cols-2 gap-1">
									{woodImitation.map((e, i) => (
										<div className="col-span-1 cursor-zoom-in" key={i}>
											<CustomTooltip className="text-2xl" title={e.name} placement="top" arrow>
												<div>
													<div
														className="relative h-16 w-full"
														onClick={() =>
															setWoodOpen({
																state: true,
																index: i,
															})
														}
													>
														<Image
															src={e.source}
															alt={e.name}
															layout="fill"
															objectFit="cover"
														/>
													</div>

													<Modal
														open={woodOpen.index === i ? true : false}
														onClose={() =>
															setWoodOpen({
																state: false,
																index: null,
															})
														}
														aria-labelledby="wood-color"
														aria-describedby="wood-color-details"
													>
														<div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-2 p-2">
															<div className="relative h-96 w-full">
																<Image
																	src={e.source}
																	alt={e.name}
																	layout="fill"
																	objectFit="cover"
																/>
															</div>
															<p className="text-xl">{e.name}</p>
														</div>
													</Modal>
												</div>
											</CustomTooltip>
										</div>
									))}
								</div>
							</div>
						</Modal>

						<button className="theme-button1" onClick={() => setRAL(true)}>
							{t("common:colors.ral")}
						</button>
						<Modal
							open={ral}
							onClose={() => setRAL(false)}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-4 p-2">
								<div className="flex items-center justify-between">
									<p className="text-2xl">{t("common:colors.ral")}</p>

									<MdClose className="h-6 w-6 cursor-pointer" onClick={() => setRAL(false)} />
								</div>

								<div className="relative h-[75vh] overflow-y-scroll scrollbar-thin grid grid-cols-2 gap-1">
									{RALColors.map((e, i) => (
										<div className="ral-card py-2" style={{ backgroundColor: e.HEX }} key={i}>
											<div className="text-center mix-blend-difference text-white">
												<p className="text-lg">{e.RAL}</p>
												<p className="text-lg">{e.English}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</Modal>
					</div>
				</div>

				<div className="col-span-1 lg:col-span-4 order-first lg:order-none">
					<div className="relative h-72 w-full">
						<Image
							src="/images/colors/colors-profile.png"
							alt="Tamplarie Imitatie Lemn"
							layout="fill"
							objectFit="contain"
							className="-scale-x-100"
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
