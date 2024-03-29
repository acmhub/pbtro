import React, { useState } from "react";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { MdClose } from "react-icons/md";

export default function ModelsGallery({ data }) {
	const [modalState, setModalState] = useState("");

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-1">
			{data.map((e, i) => (
				<div key={i}>
					<div className="cursor-zoom-in" onClick={() => setModalState(i)}>
						<div className="relative h-52 md:h-64 w-auto">
							<Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
						</div>
						<p className="text-lg text-center">{e.name}</p>
					</div>
					<Modal
						open={modalState === i ? true : false}
						onClose={() => setModalState("")}
						aria-labelledby="rolete-model"
						aria-describedby="rolete-model-details"
						sx={{ paper: { outline: "none" } }}
					>
						<div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-xs lg:max-w-none lg:w-[600px] bg-white shadow space-y-2 p-2">
							<div
								className="absolute top-1 right-1 cursor-pointer z-10"
								onClick={() => setModalState("")}
							>
								<MdClose className="h-6 w-6" />
							</div>
							<div className="relative h-[80vh] w-full">
								<Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
							</div>
							<p className="text-xl">{e.name}</p>
						</div>
					</Modal>
				</div>
			))}
		</div>
	);
}
