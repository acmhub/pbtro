import React, { useState, useContext } from "react";
import dynamic from "next/dynamic";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import {
	MdClose,
	MdExpandMore,
	MdOutlineDeleteOutline,
	MdOutlineEdit,
} from "react-icons/md";
import { toast } from "react-toastify";
import { Store } from "../../utils/StateProvider";
const ModifyProduct = dynamic(() => import("./Modify"));

export default function QuoteList({ e, t, i }) {
	const { state, dispatch } = useContext(Store);
	const [modalState, setModalState] = useState({
		state: false,
		product: null,
	});

	return (
		<Accordion className="divide-y" key={i}>
			<AccordionSummary
				sx={{
					pointerEvents: modalState.state ? "none" : "auto",
				}}
				expandIcon={<MdExpandMore className="h-6 w-6" />}
			>
				<div className="flex w-full justify-between items-center pr-6">
					<span>
						{i < 9 ? "0" + (i + 1) : i + 1}.{" "}
						{e.translation_key.length <= 13
							? t(`common:${e.translation_key}`)
							: t(`common:${e.translation_key}`).substring(
									0,
									13
							  ) + ".."}
					</span>

					<div className="space-x-4">
						<Tooltip title={<h6>{t("edit")}</h6>} placement="top">
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
								modalState?.product?.key === e.key
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
										{i < 9 ? "0" + (i + 1) : i + 1}.{" "}
										{t(
											`common:${modalState?.product?.translation_key}`
										)}
									</h4>
									<MdClose
										className="h-6 w-6 cursor-pointer"
										onClick={() =>
											setModalState({
												state: false,
												product: null,
											})
										}
									/>
								</div>
								<div className="border-b" />
								<ModifyProduct
									data={modalState.product}
									modalState={modalState}
									setModalState={setModalState}
									t={t}
								/>
							</div>
						</Modal>

						<Tooltip title={<h6>{t("delete")}</h6>} placement="top">
							<button
								className="p-1"
								onClick={() => {
									dispatch({
										type: "REMOVE_ITEM",
										payload: e.key,
									});
									toast.success(
										<div>
											{t(`common:${e.translation_key}`)}{" "}
											{t("removeditem")}
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
											{value[1].length >= 125
												? t(value[1]).substring(
														0,
														125
												  ) + "..."
												: t(value[1])}
										</td>
									))}
							</tr>
						</tbody>
					</table>
				</div>
			</AccordionDetails>
		</Accordion>
	);
}
