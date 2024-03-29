import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline, MdOutlineMap } from "react-icons/md";
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
						<div itemType="https://schema.org/Organization" itemScope>
							<p className="text-2xl" itemProp="legalName">
								PROMOTION BUSINESS TEAM SRL
							</p>
							<p className="text-xl">
								{t("cui")}: <span itemProp="taxID">RO19011272</span>
							</p>
							<p className="text-xl">{t("rc")}: J40/14519/2006</p>
						</div>

						<div itemType="https://schema.org/Organization" itemScope>
							<div className="flex items-center space-x-2 mb-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2">
									<MdOutlinePhoneInTalk className="h-6 w-6 text-white" />
								</div>
								<p className="text-2xl">{t("callus")}</p>
							</div>

							<a
								href="tel:+40786422450"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p>
									<span itemProp="telephone">+40 786 422 450</span>- Claudiu Miron
								</p>
							</a>
							<a
								href="tel:+40723391843"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p>
									<span itemProp="telephone">+40 723 391 843</span>- Ionut Nita
								</p>
							</a>
						</div>

						<div itemType="https://schema.org/Organization" itemScope>
							<div className="flex items-center space-x-2 mb-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2">
									<MdOutlineMailOutline className="h-6 w-6 text-white" />
								</div>
								<p className="text-2xl">{t("emailus")}</p>
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
								href="mailto:ofertare@pbtromania.ro"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p itemProp="email">ofertare@pbtromania.ro</p>
							</a>
						</div>

						<div>
							<div className="flex items-center space-x-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2 mb-2">
									<MdOutlineMap className="h-6 w-6 text-white" />
								</div>
								<p className="text-2xl">{t("visitus")}</p>
							</div>

							<div className="space-y-4" itemType="https://schema.org/Organization" itemScope>
								<a
									href="https://goo.gl/maps/xgbzgJTLwbP6MpGn9"
									target="_blank"
									rel="noopener noreferrer"
									className="block w-fit hover:text-cyan-700"
								>
									<p itemProp="location">Soseaua Tudor Vladimirescu 393</p>
									<p itemProp="location">Domnești, Ilfov</p>
								</a>

								<div className="flex items-center space-x-8">
									<a
										href="https://ul.waze.com/ul?ll=44.40603940%2C25.97294846&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
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
										href="https://goo.gl/maps/xgbzgJTLwbP6MpGn9"
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
								<div className="flex flex-col">
									<label htmlFor="name">{t("name")}</label>
									<input
										type="text"
										name="name"
										id="name"
										className="bg-transparent outline-none border-b p-1"
										required
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-transparent outline-none border-b p-1"
										required
									/>
								</div>

								<div className="flex flex-col">
									<label htmlFor="phone_number">{t("phone")}</label>
									<input
										type="text"
										name="phone_number"
										id="phone_number"
										className="bg-transparent outline-none border-b p-1"
										required
									/>
								</div>

								<div className="flex flex-col">
									<label htmlFor="subject">{t("subject")}</label>
									<input
										type="text"
										name="subject"
										id="subject"
										className="bg-transparent outline-none border-b p-1"
										required
									/>
								</div>

								<div className="flex flex-col">
									<label htmlFor="message">{t("message")}</label>
									<textarea
										name="message"
										id="message"
										rows="5"
										className="resize-none bg-transparent outline-none border-b p-1"
									/>
								</div>

								<div className="flex flex-col sm:flex-row items-center justify-between space-x-4 pt-4">
									<div className="flex items-center space-x-2">
										<Checkbox
											value={consent}
											onChange={(e) => setConsent(e.target.checked)}
											className="p-0"
										/>
										<div>
											{t("agreewith")}{" "}
											<Link href="/politica-confidentialitate" passHref>
												<a className="text-sky-400 underline opacity-100 hover:opacity-75">
													{t("common:privacypolicy")}
												</a>
											</Link>
										</div>
									</div>

									<button
										type="submit"
										className={`theme-button1 mt-8 sm:mt-0 ${
											!consent && "opacity-50 cursor-not-allowed"
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
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.7445496637981!2d25.973106131550402!3d44.40583219758094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201dc486174b3%3A0xef650263b69335fa!2sTermopane%20ferestre%20si%20usi%20-%20tamplarie%20PVC%20si%20ALUMINIU%20PBT!5e0!3m2!1sro!2sro!4v1692774113076!5m2!1sro!2sro"
					title="location"
					aria-label="location"
					itemProp="location"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="block h-80 w-full"
				></iframe>
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
