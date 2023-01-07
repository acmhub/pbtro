import dynamic from "next/dynamic";
import Image from "next/image";
import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

function ConstructiveOptions({ data, t }) {
	return (
		<Swiper
			loop={true}
			effect={"fade"}
			navigation={{
				prevEl: ".arrow-left",
				nextEl: ".arrow-right",
			}}
			modules={[Navigation, EffectFade]}
			className="constructive-swiper"
		>
			{data.map((e, i) => (
				<SwiperSlide
					className="h-auto bg-white lg:bg-transparent"
					key={i}
				>
					<div className="relative lg:p-4 lg:py-10" id="export">
						<div className="lg:absolute top-0 left-0 h-full w-2/3 bg-theme2 z-0" />

						<div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-10 z-10">
							<div className="space-y-4 p-8 lg:text-white my-auto">
								<h2>{t(e.title)}</h2>

								<div className="space-y-1">
									{e.description.map((desc, idx) => (
										<p className="text-justify" key={idx}>
											{t(desc)}
										</p>
									))}
								</div>

								<div className="flex justify-center lg:justify-start lg:text-white lg:absolute lg:bottom-0 lg:left-8 space-x-4">
									<HiOutlineArrowNarrowLeft className="h-7 w-7 cursor-pointer arrow-left" />
									<HiOutlineArrowNarrowRight className="h-7 w-7 cursor-pointer arrow-right" />
								</div>
							</div>

							<div className="order-first lg:order-last">
								<div className="relative h-96 w-auto lg:shadow-xl">
									<Image
										src={e.source}
										alt={t(e.title)}
										layout="fill"
										objectFit="cover"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default dynamic(() => Promise.resolve(ConstructiveOptions), {
	ssr: false,
});
