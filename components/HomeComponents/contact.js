import React, { useState } from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "react-toastify";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline, MdOutlineMap } from "react-icons/md";
import styled from "styled-components";

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

export default function Contact({ t }) {
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
							{t("contact.thankyou")}, {formData.name}! <br />
							{t("contact.shortly")}
						</div>,
						{}
					);
					e.target.reset();
				} else {
					toast.error("");
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div className="container-padding space-y-10">
			<h2>{t("common:contact")}</h2>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
				<div className="col-span-1 lg:col-span-4">
					<FormStyles>
						<form onSubmit={handleSubmit} className="card bg-theme2 text-white space-y-6">
							<TextField name="name" label={t("contact.name")} variant="standard" fullWidth />

							<TextField name="email" label="Email" variant="standard" fullWidth />
							<TextField name="phone_number" label={t("contact.phone")} variant="standard" fullWidth />

							<TextField name="subject" label={t("contact.subject")} variant="standard" fullWidth />
							<TextField
								name="message"
								label={t("contact.message")}
								variant="standard"
								rows={5}
								multiline
								fullWidth
							/>

							<div className="flex flex-col sm:flex-row items-center justify-between space-x-4 pt-4">
								<div className="flex items-center space-x-2">
									<Checkbox
										value={consent}
										onChange={(e) => setConsent(e.target.checked)}
										className="p-0"
										id="consent"
									/>
									<label htmlFor="consent">
										{t("contact.agreewith")}{" "}
										<Link href="/politica-confidentialitate" passHref>
											<a className="text-sky-400 underline opacity-100 hover:opacity-75">
												{t("common:privacypolicy")}
											</a>
										</Link>
									</label>
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

				<div className="col-span-1 lg:col-span-8 space-y-10 my-auto order-first lg:order-last">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
						<div itemType="https://schema.org/Organization" itemScope>
							<div className="flex items-center space-x-2 mb-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2">
									<MdOutlinePhoneInTalk className="h-6 w-6 text-white" />
								</div>
								<p className="text-2xl">{t("contact.callus")}</p>
							</div>

							<a
								href="tel:+40786422450"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p>
									<span itemProp="telephone">+40 786 422 450</span> - Claudiu Miron
								</p>
							</a>
							<a
								href="tel:+40723391843"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p>
									<span itemProp="telephone">+40 723 391 843</span> - Ionut Nita
								</p>
							</a>
						</div>

						<div itemType="https://schema.org/Organization" itemScope>
							<div className="flex items-center space-x-2 mb-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2">
									<MdOutlineMailOutline className="h-6 w-6 text-white" />
								</div>
								<p className="text-2xl">{t("contact.emailus")}</p>
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

						<div itemType="https://schema.org/Organization" itemScope>
							<div className="flex items-center space-x-2">
								<div className="bg-theme2 w-fit grid place-content-center p-2 mb-2">
									<MdOutlineMap className="h-6 w-6 text-white" />
								</div>
								<p className="text-2xl">{t("contact.visitus")}</p>
							</div>

							<a
								href="https://goo.gl/maps/xgbzgJTLwbP6MpGn9"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-fit hover:text-cyan-700"
							>
								<p itemProp="location">Șoseaua Tudor Vladimirescu 393</p>
								<p itemProp="location">Domnești, Ilfov</p>
							</a>
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
						className="block h-64 w-full"
					></iframe>
				</div>
			</div>
		</div>
	);
}
