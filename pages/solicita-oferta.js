import React, { useState, useContext, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Layout from "../components/General/Layout";
import { Store } from "../utils/StateProvider";
import { productsData } from "../components/Products";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import {
	MdClose,
	MdExpandMore,
	MdOutlineDeleteOutline,
	MdOutlineEdit,
} from "react-icons/md";
import ProductRequirements from "../components/Quote";
import ModifyProduct from "../components/Quote/Modify";

export default function GetQuote() {
	const { t } = useTranslation("getquote");
	const { state, dispatch } = useContext(Store);
	const {
		selectedProduct,
		quote: { quoteItems },
	} = state;
	const [modalState, setModalState] = useState({
		state: false,
		product: null,
	});

	const [quoteData, setQuoteData] = useState([]);
	useEffect(() => {
		setQuoteData(
			state.quote.quoteItems.map((e) => Object.entries(e).slice(1, -1))
		);
	}, [state.quote]);

	const handleProduct = (e) => {
		dispatch({
			type: "SET_PRODUCT",
			payload: e,
		});

		document
			.querySelector("#product-requirements")
			.scrollIntoView({ behavior: "smooth" });
	};

	const handleQuoteSubmit = async (e) => {
		e.preventDefault();

		let formData = {};
		let form = new FormData(e.target);
		for (let pair of form.entries()) {
			Object.assign(formData, { [pair[0]]: pair[1] });
		}

		formData.quote = state.quote.quoteItems;

		await fetch("/api/send-quote", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, /*/",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => {
				if (res.status === 200) {
					toast.success(<div>{t("sentquote")}</div>, {});
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<Layout
			pageID="getquote"
			title={t("common:getquote")}
			description={t("description")}
		>
			<div className="section-spacing-lg" />

			<div className="container-padding">
				<div className="text-center space-y-2 mb-20">
					<h1>{t("common:getquote")}</h1>
					<div className="w-1/2 border-b mx-auto" />
					<p className="lg:w-4/5 lg:mx-auto">{t("description")}</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					<div className="relative z-10 col-span-1 lg:col-span-3">
						<div className="card divide-y p-0">
							{productsData.map((e, i) => (
								<div
									className={`
                                    ${
										selectedProduct === e.name &&
										"bg-theme1 text-white"
									}
                                    block hover:bg-theme1 hover:text-white duration-200 ease-in-out cursor-pointer p-2`}
									onClick={() => handleProduct(e.name)}
									key={i}
								>
									{t(`common:${e.name}`)}
								</div>
							))}
						</div>
					</div>

					<div className="col-span-1 lg:col-span-9">
						<div
							className="pt-32 -mt-32 pointer-events-none -z-10"
							id="product-requirements"
						/>
						{!selectedProduct ? (
							<div className="flex flex-col items-center justify-center h-full space-y-4">
								<div className="relative h-48 w-48">
									<Image
										src="/images/fillers/empty-box.svg"
										alt={t("emptyorder")}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<h4 className="text-center">
									{t("emptyorder")}
								</h4>
							</div>
						) : (
							<ProductRequirements
								selectedProduct={selectedProduct}
								t={t}
							/>
						)}
					</div>
				</div>

				<div
					className="pt-12 -mt-12 pointer-events-none -z-10"
					id="quote-details"
				/>
				{state?.quote?.quoteItems?.length > 0 && (
					<div className="mt-20">
						{state.quote.quoteItems.map((e, i) => (
							<Accordion className="divide-y" key={i}>
								<AccordionSummary
									sx={{
										pointerEvents: modalState.state
											? "none"
											: "auto",
									}}
									expandIcon={
										<MdExpandMore className="h-6 w-6" />
									}
								>
									<div className="flex w-full justify-between items-center pr-6">
										<span>
											{i < 9 ? "0" + (i + 1) : i + 1}.{" "}
											{e.translation_key.length <= 13
												? t(
														`common:${e.translation_key}`
												  )
												: t(
														`common:${e.translation_key}`
												  ).substring(0, 13) + ".."}
										</span>

										<div className="space-x-4">
											<Tooltip
												title={<h6>{t("edit")}</h6>}
												placement="top"
											>
												<button
													className="p-1"
													onClick={() =>
														setModalState({
															state: true,
															product: e,
														})
													}
												>
													<MdOutlineEdit className="h-6 w-6 text-theme1" />
												</button>
											</Tooltip>
											<Modal
												aria-labelledby="update-product-modal-title"
												aria-describedby="update-product-modal-description"
												open={
													modalState?.product?.key ===
													e.key
														? true
														: false
												}
												onClose={() =>
													setModalState({
														state: false,
														product: null,
													})
												}
												closeAfterTransition
											>
												<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[82vh] w-[90%] lg:max-w-4xl overflow-y-auto card">
													<div className="flex justify-between items-center">
														<h4>
															{i < 9
																? "0" + (i + 1)
																: i + 1}
															.{" "}
															{t(
																`common:${modalState?.product?.translation_key}`
															)}
														</h4>
														<MdClose
															className="h-6 w-6 cursor-pointer"
															onClick={() =>
																setModalState({
																	state: false,
																	product:
																		null,
																})
															}
														/>
													</div>
													<div className="border-b" />
													<ModifyProduct
														data={
															modalState.product
														}
														modalState={modalState}
														setModalState={
															setModalState
														}
														t={t}
													/>
												</div>
											</Modal>

											<Tooltip
												title={<h6>{t("delete")}</h6>}
												placement="top"
											>
												<button
													className="p-1"
													onClick={() => {
														dispatch({
															type: "REMOVE_ITEM",
															payload: e.key,
														});
														toast.success(
															<div>
																{t(
																	`common:${e.translation_key}`
																)}{" "}
																{t(
																	"removeditem"
																)}
															</div>,
															{}
														);
													}}
												>
													<MdOutlineDeleteOutline className="h-6 w-6 text-red-600" />
												</button>
											</Tooltip>
										</div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<div className="overflow-x-auto">
										<table className="table-auto w-full border">
											<thead className="bg-gray-100">
												<tr className="divide-x">
													{Object.entries(e)
														.slice(2, -1)
														.map((label, head) => (
															<th
																scope="row"
																className="whitespace-nowrap py-2 px-6 text-left"
																key={head}
															>
																{t(label[0])}
															</th>
														))}
												</tr>
											</thead>
											<tbody>
												<tr className="border-t divide-x">
													{Object.entries(e)
														.slice(2, -1)
														.map((value, body) => (
															<td
																scope="row"
																className="whitespace-nowrap last:whitespace-normal px-6 py-2"
																key={body}
															>
																{value[1]
																	.length >=
																125
																	? t(
																			value[1]
																	  ).substring(
																			0,
																			125
																	  ) + "..."
																	: t(
																			value[1]
																	  )}
															</td>
														))}
												</tr>
											</tbody>
										</table>
									</div>
								</AccordionDetails>
							</Accordion>
						))}
					</div>
				)}

				{state?.quote?.quoteItems?.length > 0 && (
					<form
						onSubmit={handleQuoteSubmit}
						className="card space-y-2 mt-20"
					>
						<TextField
							name="name"
							label={t("Nume")}
							variant="standard"
							fullWidth
							required
						/>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
							<TextField
								name="email"
								label="Email"
								variant="standard"
								fullWidth
								required
							/>
							<TextField
								name="phone_number"
								label={t("Numar de telefon")}
								variant="standard"
								fullWidth
								required
							/>
						</div>

						<TextField
							name="location"
							label={t("Locatie")}
							variant="standard"
							fullWidth
							required
						/>

						<div className="py-2" />
						{/* <input
							type="text"
							name="quote"
							className="hidden"
							value={Object.entries(quoteData)
								.join("<br/><br/>")
								.replace(/[[\]",]/g, "<br/>")}
							readOnly
						/> */}

						<button
							type="submit"
							className="theme-button1 block w-fit mx-auto"
						>
							{t("common:send")}
						</button>
					</form>
				)}
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "getquote"])),
		},
	};
}
