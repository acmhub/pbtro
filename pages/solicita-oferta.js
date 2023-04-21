import React, { useState, useContext, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Layout from "../components/General/Layout";
import { Store } from "../utils/StateProvider";
import { productsData } from "../components/Products";
import { toast } from "react-toastify";

const ProductRequirements = dynamic(() => import("../components/Quote"));
const QuoteList = dynamic(() => import("../components/Quote/QuoteList"));

export default function GetQuote() {
	const { t } = useTranslation("getquote");
	const { state, dispatch } = useContext(Store);
	const {
		selectedProduct,
		quote: { quoteItems },
	} = state;

	const [quoteData, setQuoteData] = useState([]);
	useEffect(() => {
		setQuoteData(state.quote.quoteItems.map((e) => Object.entries(e).slice(1, -1)));
	}, [state.quote]);

	const handleProduct = (e) => {
		dispatch({
			type: "SET_PRODUCT",
			payload: e,
		});

		document.querySelector("#product-requirements").scrollIntoView({ behavior: "smooth" });
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
			canonical="https://pbtromania.ro/solicita-oferta"
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
                                    ${selectedProduct === e.name && "bg-theme1 text-white"}
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
						<div className="pt-32 -mt-32 pointer-events-none -z-10" id="product-requirements" />
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
								<p className="text-2xl text-center">{t("emptyorder")}</p>
							</div>
						) : (
							<ProductRequirements selectedProduct={selectedProduct} t={t} />
						)}
					</div>
				</div>

				<div className="pt-12 -mt-12 pointer-events-none -z-10" id="quote-details" />
				{state?.quote?.quoteItems?.length > 0 && (
					<div className="mt-20">
						{state.quote.quoteItems.map((e, i) => (
							<QuoteList e={e} t={t} i={i} key={i} />
						))}
					</div>
				)}

				{state?.quote?.quoteItems?.length > 0 && (
					<form onSubmit={handleQuoteSubmit} className="card space-y-8 mt-20">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
							<div className="flex flex-col">
								<label htmlFor="name">{t("Nume")}</label>
								<input
									type="text"
									name="name"
									id="name"
									className="outline-none border-b p-1"
									required
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									className="outline-none border-b p-1"
									required
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="phone_number">{t("Numar de telefon")}</label>
								<input
									type="text"
									name="phone_number"
									id="phone_number"
									className="outline-none border-b p-1"
									required
								/>
							</div>
						</div>

						<div className="flex flex-col">
							<label htmlFor="location">{t("Locatie")}</label>
							<input
								type="text"
								name="location"
								id="location"
								className="outline-none border-b p-1"
								required
							/>
						</div>

						<button type="submit" className="theme-button1 block w-fit mx-auto">
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
