import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";
import { productsData } from "../Products";

const ImageWrapper = styled.div`
	position: relative;

	&:before {
		position: absolute;
		content: "";
		top: -40px;
		left: 0;
		right: 0;
		width: auto;
		height: 50px;
		background: white;
		margin: 0 25%;
	}

	.wrapper {
		position: absolute;
		top: -40px;
		left: 0;
		right: 0;
		background: transparent;
		padding-top: 20px;
		margin: 0 25%;

		&:before {
			position: absolute;
			content: "";
			left: -50px;
			top: 0px;

			width: 0;
			height: 0;
			border-style: solid;
			border-width: 0 0 50px 50px;
			border-color: transparent transparent white transparent;
		}

		&:after {
			position: absolute;
			content: "";
			right: -50px;
			top: 0px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 50px 0 0 50px;
			border-color: transparent transparent transparent white;
		}
	}
`;

export default function Footer() {
	const { t } = useTranslation("common");

	return (
		<footer className="bg-white mt-10 pb-4">
			<ImageWrapper>
				<div className="wrapper">
					<div className="relative h-20 mx-auto mb-12">
						<Image
							src="/images/logos/logo.svg"
							alt="Promotion Business Team - Producător Tâmplărie PVC și Aluminiu"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
			</ImageWrapper>

			<div className="container-padding divide-y pt-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-5">
					<div className="col-span-1 lg:col-span-4 space-y-4">
						<p className="text-3xl">{t("about")}</p>
						<p>{t("footer.about")}</p>

						<div className="space-y-2 pt-4">
							<p className="text-xl">Social media</p>

							<div className="flex space-x-2">
								<a
									href="https://www.facebook.com/PBT-Romania-404413622991425"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="facebook"
								>
									<FaFacebookF className="h-5 w-5 facebook-icon" />
								</a>
								<a
									href="https://wa.me/+40786422450"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="whatsapp"
								>
									<FaWhatsapp className="h-5 w-5 whatsapp-icon" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-span-1 lg:col-span-2 space-y-4">
						<p className="text-3xl">{t("footer.navigation")}</p>

						<div className="flex flex-col space-y-1">
							<Link href="/" passHref>
								<a className="w-fit opacity-75 hover:opacity-100">{t("home")}</a>
							</Link>
							<Link href="/despre-noi" passHref>
								<a className="w-fit opacity-75 hover:opacity-100">{t("about")}</a>
							</Link>
							<Link href="/servicii" passHref>
								<a className="w-fit opacity-75 hover:opacity-100">{t("services")}</a>
							</Link>
							<Link href="/produse" passHref>
								<a className="w-fit opacity-75 hover:opacity-100">{t("products")}</a>
							</Link>
							<Link href="/portofoliu" passHref>
								<a className="w-fit opacity-75 hover:opacity-100">{t("portfolio")}</a>
							</Link>
							<Link href="/contact" passHref>
								<a className="w-fit opacity-75 hover:opacity-100">{t("contact")}</a>
							</Link>
						</div>
					</div>
					<div className="col-span-1 lg:col-span-6 space-y-4">
						<p className="text-3xl">{t("products")}</p>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
							{productsData.map((e, i) => (
								<Link href={e.href} passHref key={i}>
									<a className="w-fit opacity-75 hover:opacity-100">{t(e.name)}</a>
								</Link>
							))}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-5">
					<div className="col-span-1 lg:col-span-4 space-y-4">
						<p className="text-3xl">{t("contact")}</p>

						<div className="space-y-2" itemType="https://schema.org/Organization" itemScope>
							<a
								href="tel:+40786422450"
								target="_blank"
								rel="noopener noreferrer"
								className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
								aria-label="telephone"
							>
								<MdOutlinePhoneInTalk className="h-6 w-6 text-theme1" />
								<div itemProp="telephone">+40 786 422 450</div>
							</a>
							<a
								href="tel:+40723391843"
								target="_blank"
								rel="noopener noreferrer"
								className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
								aria-label="telephone"
							>
								<MdOutlinePhoneInTalk className="h-6 w-6 text-theme1" />
								<div itemProp="telephone">+40 723 391 843</div>
							</a>
							<a
								href="mailto:pbtromania@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
								aria-label="email"
							>
								<MdOutlineMailOutline className="h-6 w-6 text-theme1" />
								<div itemProp="email">pbtromania@gmail.com</div>
							</a>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-8">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.7445496637981!2d25.973106131550402!3d44.40583219758094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201dc486174b3%3A0xef650263b69335fa!2sTermopane%20ferestre%20si%20usi%20-%20tamplarie%20PVC%20si%20ALUMINIU%20PBT!5e0!3m2!1sro!2sro!4v1692774113076!5m2!1sro!2sro"
							title="location"
							aria-label="location"
							itemProp="location"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							className="h-64 lg:h-full w-full block"
						></iframe>
					</div>
				</div>

				<div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:space-y-0 text-gray-400 pt-5">
					<div className="mt-4 lg:mt-0">
						&copy; Promotion Business Team România 2006 - {new Date().getFullYear()}
					</div>
					<div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:divide-x">
							<Link href="/politica-confidentialitate" passhref>
								<a className="lg:px-2 w-fit hover:text-black">{t("privacypolicy")}</a>
							</Link>
							<Link href="/politica-cookies" passhref>
								<a className="lg:px-2 w-fit hover:text-black">{t("cookiespolicy")}</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
