import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { MdOutlineFormatQuote } from "react-icons/md";

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
			<h2 className="text-3xl text-center">{t("testimonials.title")}</h2>

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
								<MdOutlineFormatQuote className="h-6 w-6" />
							</div>
							<p>{t(e)}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="space-y-10">
				<p className="text-2xl text-center">{t("testimonials.happyclients")}</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
					{[
						"/images/clients/Toyota.webp",
						"/images/clients/Clinica Sante.webp",
						"/images/clients/Federatia Romana de Baschet.webp",
						"/images/clients/Politia Romana.webp",
						"/images/clients/Optimum Construction & Project Management.webp",
						"/images/clients/Spital Marius Nasta.webp",
						"/images/clients/Colegiul Mihai Bravu.webp",
						"/images/clients/Piata Drumul Taberei.webp",
						"/images/clients/Pallady Towers.webp",
						"/images/clients/Real Residence Resort.webp",
						"/images/clients/Stejarul Residence.webp",
						"/images/clients/Ewe Residence.webp",
					].map((e, i) => (
						<div className="relative h-20 w-20 mx-auto" key={i}>
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
