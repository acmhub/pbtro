import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing({ t }) {
	const [wordIndex, setWordIndex] = useState(0);
	const textOptions = [
		"common:product.tamplariepvc",
		"common:product.tamplariealuminiu",
		"common:product.tamplarielemn",
		"common:product.panelornamental",
		"common:product.usaantifoc",
		"common:product.balustrada",
		"common:product.peretecortina",
		"common:product.sticla",
		"common:product.rulouexterior",
		"common:product.roletatextila",
		"common:product.pergola",
		"common:product.copertina",
		"common:product.usagaraj",
		"common:product.pereteantivant",
		"common:product.plasainsecte",
	];
	useEffect(() => {
		const handleText = () => {
			let index = wordIndex > textOptions.length ? 0 : wordIndex + 1;
			setWordIndex(index);

			if (index === 4) {
				setWordIndex(0);
			}
		};

		const interval = setInterval(() => handleText(), 4000);
		return () => clearInterval(interval);
	}, [wordIndex, textOptions.length]);

	return (
		<div className="relative">
			<div className="section-spacing" />
			<div className="container-padding">
				<div className="relative bg-gradient-to-tr from-[#13528e] to-[#61abe4] shadow-xl">
					<div className="h-full grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
						<div className="space-y-10 px-8 py-8 lg:py-4 text-white my-auto">
							<div className="space-y-4">
								<div>
									<p className="uppercase text-sm">{t("landing.subtitle")}</p>
									<p className="text-2xl capitalize">{t("landing.title")}</p>
								</div>
								<div className="relative h-20 lg:h-8">
									<AnimatePresence initial={false}>
										<motion.div
											initial={{
												opacity: 0,
												y: -20,
												filter: "blur(10px)",
											}}
											animate={{
												opacity: 1,
												y: 0,
												filter: "blur(0px)",
											}}
											exit={{
												opacity: 0,
												y: 20,
												filter: "blur(10px)",
											}}
											transition={{ duration: 0.75 }}
											key={wordIndex}
										>
											<h1 className="absolute text-4xl">{t(textOptions[wordIndex])}</h1>
										</motion.div>
									</AnimatePresence>
								</div>
							</div>

							<p className="lg:max-w-md text-justify">{t("landing.description")}</p>

							<Link href="/solicita-oferta" passHref>
								<a className="block w-fit">
									<button className="theme-button1">{t("common:getquote")}</button>
								</a>
							</Link>
						</div>

						<div className="flex items-end justify-end">
							<div className="relative h-64 w-96 xl:h-96 xl:w-[36rem]">
								<Image
									src="/images/fillers/landing-image.webp"
									alt="Tamplarie Termopan si Tripan Bucuresti"
									className="h-auto w-auto object-contain"
									layout="fill"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
