import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const testimonialData = [
	"testimonials.review1",
	"testimonials.review2",
	"testimonials.review3",
	"testimonials.review4",
	"testimonials.review5",
	"testimonials.review6",
	"testimonials.review7",
	"testimonials.review8",
];

function Testimonials({ t }) {
	return (
		<div className="container-padding space-y-10">
			<h3 className="text-center">{t("testimonials.title")}</h3>

			<Swiper
				loop={true}
				slidesPerView={1}
				spaceBetween={20}
				breakpoints={{
					768: {
						slidesPerView: 3,
					},
				}}
				autoplay={{
					delay: 7500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="testimonial-swiper"
			>
				{testimonialData.map((e, i) => (
					<SwiperSlide className="h-auto py-6" key={i}>
						<div className="card h-full pt-6">
							<div className="bg-theme1 text-white h-10 w-10 absolute -top-0 left-5 shadow-xl rounded-full p-2">
								<span className="material-symbols-outlined">
									format_quote
								</span>
							</div>
							<p>{t(e)}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="space-y-5">
				<h4 className="text-center">
					{t("testimonials.happyclients")}
				</h4>
				<div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
					{[
						"/images/clients/Clinica Sante.webp",
						"/images/clients/Ewe Residence.webp",
						"/images/clients/Pallady Towers.webp",
						"/images/clients/Real Residence Resort.webp",
						"/images/clients/Stejarul Residence.webp",
					].map((e, i) => (
						<div className="relative h-24 w-24 mx-auto" key={i}>
							<Image
								src={e}
								title={e.replace(/^.*[\\\/]/, "").slice(0, -5)}
								alt={e.replace(/^.*[\\\/]/, "").slice(0, -5)}
								layout="fill"
								objectFit="contain"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
