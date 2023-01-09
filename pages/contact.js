import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import {
	MdOutlinePhoneInTalk,
	MdOutlineMailOutline,
	MdOutlineMap,
} from "react-icons/md";
import { toast } from "react-toastify";
import styled from "styled-components";
import Layout from "../components/General/Layout";

const FormStyles = styled.div`
	.MuiInputBase-root,
	label {
		color: white;
	}

	.MuiInputBase-root:hover::before,
	.MuiInputBase-root::before {
		border-color: white;
	}

	.MuiInputBase-root::after {
		border: none;
	}

	.MuiCheckbox-root {
		color: white;

		&.Mui-checked {
			color: var(--theme1);
		}
	}

	.Mui-focused {
		color: white;
	}
`;

export default function Contact() {
	const { t } = useTranslation("contact");
	const [consent, setConsent] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let formData = {};
		let form = new FormData(e.target);
		for (let pair of form.entries()) {
			Object.assign(formData, { [pair[0]]: pair[1] });
		}

		await fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, /*/",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => {
				if (res.status === 200) {
					toast.success(
						<div>
							{t("thankyou")}, {formData.name}! <br />
							{t("shortly")}
						</div>,
						{}
					);
					e.target.reset();
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<Layout
			pageID="contact"
			title={t("common:contact")}
			description={t("common:productcta.title")}
			canonical="https://pbtromania.ro/contact"
		>
			<div className="section-spacing-lg" />

			<div className="container-padding space-y-20">
				<h1 className="text-center">{t("title")}</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="col-span-1 space-y-10 my-auto">
						<div
							itemType="https://schema.org/Organization"
							itemScope
						>
							<h4 itemProp="legalName">
								PROMOTION BUSINESS TEAM SRL
							</h4>
							<h6>
								{t("cui")}:{" "}
								<span itemProp="taxID">RO19011272</span>
							</h6>
							<h6>{t("rc")}: J40/14519/2006</h6>
						</div>

						<div
							itemType="https://schema.org/Organization"
							itemScope
						>
							<div className="flex items-center space-x-2 mb-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2">
									<MdOutlinePhoneInTalk className="h-6 w-6 text-white" />
								</div>
								<h4>{t("callus")}</h4>
							</div>

							<a
								href="tel:+40786422450"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p>
									<span itemProp="telephone">
										+40 786 422 450
									</span>
									- Claudiu Miron
								</p>
							</a>
							<a
								href="tel:+40723391843"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p>
									<span itemProp="telephone">
										+40 723 391 843
									</span>
									- Ionut Nita
								</p>
							</a>
						</div>

						<div
							itemType="https://schema.org/Organization"
							itemScope
						>
							<div className="flex items-center space-x-2 mb-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2">
									<MdOutlineMailOutline className="h-6 w-6 text-white" />
								</div>
								<h4>{t("emailus")}</h4>
							</div>

							<a
								href="mailto:pbtromania@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p itemProp="email">pbtromania@gmail.com</p>
							</a>
							<a
								href="mailto:ofertare@pbtromania.com"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p itemProp="email">ofertare@pbtromania.com</p>
							</a>
						</div>

						<div>
							<div className="flex items-center space-x-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2 mb-2">
									<MdOutlineMap className="h-6 w-6 text-white" />
								</div>
								<h4>{t("visitus")}</h4>
							</div>

							<div
								className="space-y-4"
								itemType="https://schema.org/Organization"
								itemScope
							>
								<a
									href="https://goo.gl/maps/MsJhkRS4S4CgE8zNA"
									target="_blank"
									rel="noopener noreferrer"
									className="block w-fit hover:text-cyan-700"
								>
									<p itemProp="location">
										Soseaua Tudor Vladimirescu 393
									</p>
									<p itemProp="location">Domnești, Ilfov</p>
								</a>

								<div className="flex items-center space-x-8">
									<a
										href="https://ul.waze.com/ul?place=ChIJl9kQDvwAskARDZmpRVVl5Wo&ll=44.40579360%2C25.97266790&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										<div className="relative h-6 w-6">
											<Image
												src="/images/icons/waze-icon.svg"
												alt="Waze"
												title="Waze"
												layout="fill"
												objectFit="contain"
											/>
										</div>
									</a>
									<a
										href="https://goo.gl/maps/BagSA8DLGLCE8gTv8"
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										<div className="relative h-6 w-6">
											<Image
												src="/images/icons/gmaps-icon.svg"
												alt="Google Maps"
												title="Google Maps"
												layout="fill"
												objectFit="contain"
											/>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-1">
						<FormStyles>
							<form
								onSubmit={handleSubmit}
								className="card bg-theme2 text-white col-span-1 lg:col-span-4 space-y-6"
							>
								<TextField
									name="name"
									label={t("name")}
									variant="standard"
									fullWidth
								/>

								<TextField
									name="email"
									label="Email"
									variant="standard"
									fullWidth
								/>
								<TextField
									name="phone_number"
									label={t("phone")}
									variant="standard"
									fullWidth
								/>

								<TextField
									name="subject"
									label={t("subject")}
									variant="standard"
									fullWidth
								/>
								<TextField
									name="message"
									label={t("message")}
									variant="standard"
									rows={5}
									multiline
									fullWidth
								/>

								<div className="flex flex-col sm:flex-row items-center justify-between space-x-4 pt-4">
									<div className="flex items-center space-x-2">
										<Checkbox
											value={consent}
											onChange={(e) =>
												setConsent(e.target.checked)
											}
											className="p-0"
										/>
										<div>
											{t("agreewith")}{" "}
											<Link
												href="/politica-confidentialitate"
												passHref
											>
												<a className="text-sky-400 underline opacity-100 hover:opacity-75">
													{t("common:privacypolicy")}
												</a>
											</Link>
										</div>
									</div>

									<button
										type="submit"
										className={`theme-button1 mt-8 sm:mt-0 ${
											!consent &&
											"opacity-50 cursor-not-allowed"
										}`}
										disabled={!consent}
									>
										{t("common:send")}
									</button>
								</div>
							</form>
						</FormStyles>
					</div>
				</div>

				<iframe
					title="location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.3339008248113!2d25.97047921552232!3d44.40579357910266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200fc0e10d997%3A0x6ae5655545a9990d!2sDistribuitor%20Ferestre%20si%20Usi%20-%20Promotion%20Business%20Team!5e0!3m2!1sro!2sro!4v1644401679264!5m2!1sro!2sro"
					className="block h-80 w-full"
				/>
			</div>

			<div className="section-spacing" />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "contact"])),
		},
	};
}
