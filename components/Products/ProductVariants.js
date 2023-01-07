import React from "react";
import Image from "next/image";

export default function ProductVariants({ data, t }) {
	return (
		<div className="space-y-10">
			{data.map((e, i) => (
				<div
					className="grid card p-0 grid-cols-1 lg:grid-cols-2"
					key={i}
				>
					<div
						className={i % 2 == 0 ? "order-first" : "lg:order-last"}
					>
						<div className="relative h-96 lg:min-h-[400px] lg:h-full w-full">
							<Image
								src={e.src}
								alt={t(e.name)}
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
					<div className="space-y-8 my-auto p-4 xl:p-8">
						<h3>{t(e.name)}</h3>
						<div className="space-y-2">
							{e.description.map((desc, idx) => (
								<p key={idx}>{t(desc)}</p>
							))}
						</div>

						{e.stats && (
							<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-fit mx-auto lg:w-full lg:mx-0 gap-4">
								{e.stats.map((stat, id) => (
									<div className="space-y-2" key={id}>
										<div className="flex space-x-2 items-center">
											<stat.Icon className="h-6 w-6 text-theme1" />
											<h6>{t(stat.label)}</h6>
										</div>
										<h5>{t(stat.value)}</h5>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
