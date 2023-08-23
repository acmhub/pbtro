import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Layout from "../components/General/Layout";

const portfolioData = [
	{ src: "/images/portfolio/1.webp" },
	{ src: "/images/portfolio/2.webp" },
	{ src: "/images/portfolio/3.webp" },
	{ src: "/images/portfolio/4.webp" },
	{ src: "/images/portfolio/5.webp" },
	{ src: "/images/portfolio/6.webp" },
	{ src: "/images/portfolio/7.webp" },
	{ src: "/images/portfolio/8.webp" },
	{ src: "/images/portfolio/9.webp" },
	{ src: "/images/portfolio/10.webp" },
	{ src: "/images/portfolio/11.webp" },
	{ src: "/images/portfolio/12.webp" },
	{ src: "/images/portfolio/13.webp" },
	{ src: "/images/portfolio/14.webp" },
	{ src: "/images/portfolio/15.webp" },
	{ src: "/images/portfolio/16.webp" },
	{ src: "/images/portfolio/17.webp" },
	{ src: "/images/portfolio/18.webp" },
	{ src: "/images/portfolio/19.webp" },
	{ src: "/images/portfolio/20.webp" },
	{ src: "/images/portfolio/21.webp" },
	{ src: "/images/portfolio/22.webp" },
	{ src: "/images/portfolio/23.webp" },
	{ src: "/images/portfolio/24.webp" },
	{ src: "/images/portfolio/25.webp" },
	{ src: "/images/portfolio/26.webp" },
	{ src: "/images/portfolio/27.webp" },
	{ src: "/images/portfolio/28.webp" },
	{ src: "/images/portfolio/29.webp" },
	{ src: "/images/portfolio/30.webp" },
	{ src: "/images/portfolio/31.webp" },
	{ src: "/images/portfolio/32.webp" },
	{ src: "/images/portfolio/33.webp" },
	{ src: "/images/portfolio/34.webp" },
	{ src: "/images/portfolio/35.webp" },
	{ src: "/images/portfolio/36.webp" },
	{ src: "/images/portfolio/37.webp" },
	{ src: "/images/portfolio/38.webp" },
	{ src: "/images/portfolio/39.webp" },
	{ src: "/images/portfolio/40.webp" },
	{ src: "/images/portfolio/41.webp" },
	{ src: "/images/portfolio/42.webp" },
	{ src: "/images/portfolio/43.webp" },
	{ src: "/images/portfolio/44.webp" },
	{ src: "/images/portfolio/45.webp" },
	{ src: "/images/portfolio/46.webp" },
	{ src: "/images/portfolio/47.webp" },
	{ src: "/images/portfolio/48.webp" },
	{ src: "/images/portfolio/49.webp" },
	{ src: "/images/portfolio/50.webp" },
	{ src: "/images/portfolio/51.webp" },
	{ src: "/images/portfolio/52.webp" },
	{ src: "/images/portfolio/53.webp" },
	{ src: "/images/portfolio/54.webp" },
	{ src: "/images/portfolio/55.webp" },
];

export default function Portfolio() {
	const { t } = useTranslation("portfolio");
	const [modalState, setModalState] = useState();

	const handlePrev = () => {
		if (modalState === 0) {
			setModalState(portfolioData.length - 1);
		} else setModalState(modalState - 1);
	};

	const handleNext = () => {
		if (modalState === portfolioData.length - 1) {
			setModalState(0);
		} else setModalState(modalState + 1);
	};

	return (
		<Layout
			pageID="portfolio"
			title={t("common:portfolio")}
			description={t("common:footer.about")}
			canonical="https://pbtromania.ro/portofoliu"
		>
			<div className="section-spacing-lg" />

			<div className="container-padding">
				<h1 className="text-center mb-20">{t("common:portfolio")}</h1>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
					{portfolioData.map((e, i) => (
						<div key={i}>
							<div
								className="relative cursor-zoom-in h-96 w-auto"
								onClick={() => setModalState(i)}
								key={i}
							>
								<Image src={e.src} alt="Tamplarie pvc si aluminiu" layout="fill" objectFit="cover" />
							</div>
						</div>
					))}
				</div>

				<Modal
					open={modalState != null ? true : false}
					onClose={() => setModalState(null)}
					aria-labelledby="portfolio-modal"
					aria-describedby="portfolio-modal-details"
				>
					<div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-xs lg:w-[600px] bg-white shadow-xl">
						<div
							className="absolute top-2 right-2 flex justify-end cursor-pointer z-10"
							onClick={() => setModalState(null)}
						>
							<MdClose className="h-6 w-6" />
						</div>
						<div className="relative h-[80vh] w-full">
							{modalState != null && (
								<Image
									src={portfolioData[modalState]}
									alt="Fereatra Tamplarie PVC termopan tripan Bucuresti"
									layout="fill"
									objectFit="cover"
								/>
							)}
						</div>

						<div className="flex items-center justify-center space-x-5 my-2">
							<HiOutlineArrowNarrowLeft className="h-7 w-7 cursor-pointer" onClick={handlePrev} />
							<HiOutlineArrowNarrowRight className="h-7 w-7 cursor-pointer" onClick={handleNext} />
						</div>
					</div>
				</Modal>
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
