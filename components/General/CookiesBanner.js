import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { hasCookie, getCookie, setCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

export default function CookiesBanner() {
	const { t } = useTranslation();
	let consent =
		hasCookie("pbt_consent") || getCookie("pbt_consent") ? true : false;
	const [visible, setVisible] = useState(false);

	const handleAccept = () => {
		setVisible(false);
		setCookie("pbt_consent", true, { maxAge: 1000 * 60 * 60 * 24 * 14 });
		toast.success(<div>Cookies Acceptate</div>, {});
	};

	useEffect(() => {
		!consent && setVisible(true);

		const handleScroll = () => {
			if (!consent && window.scrollY >= 2000) {
				handleAccept();
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [consent, visible]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					className="fixed bottom-1 w-full lg:max-w-sm px-1 z-50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<button
						className="absolute top-1 right-2 z-10"
						onClick={handleAccept}
					>
						<MdClose className="h-6 w-6" />
					</button>

					<div className="card border shadow-xl bg-white space-y-4">
						<div className="flex items-center space-x-4">
							<div className="relative h-10 w-10">
								<Image
									src="/images/icons/cookie.svg"
									alt="Cookies"
									layout="fill"
									objectFit="contain"
								/>
							</div>
							<h4>{t("cookies.title")}</h4>
						</div>

						<p>
							{t("cookies.description")}{" "}
							<Link href="/politica-cookies">
								<a className="underline text-sky-800 hover:text-sky-500">
									{t("common:cookiespolicy")}.
								</a>
							</Link>
						</p>

						<button
							className="theme-button1-outlined block w-full"
							onClick={handleAccept}
						>
							Accept
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
