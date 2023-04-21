import React from "react";
import Link from "next/link";
import Image from "next/image";

const accessoriesData = [
	{
		colClass: "col-span-1",
		cardHeight: "lg:h-[200px]",
		src: "/images/accessories/glaf_pvc.webp",
		name: "accessories.glaf",
	},
	{
		colClass: "col-span-1",
		cardHeight: "lg:h-[200px]",
		src: "/images/accessories/pervaz_aluminiu.webp",
		name: "accessories.pervaz",
	},
	{
		colClass: "col-span-1 lg:row-span-2",
		cardHeight: "lg:h-full",
		src: "/images/accessories/broasca_usa.webp",
		name: "accessories.broasca",
	},
	{
		colClass: "col-span-1 lg:col-span-2 lg:row-start-2",
		cardHeight: "lg:h-[200px]",
		src: "/images/accessories/panel_pvc.webp",
		name: "accessories.panel",
	},
];

export default function Accessories({ t }) {
	return (
		<div className="container-padding space-y-10">
			<div className="space-y-2">
				<h2>{t("common:accessories")}</h2>
				<p className="lg:w-2/5">{t("accessories.paragraph")}</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 lg:row-auto gap-1">
				{accessoriesData.map((e, i) => (
					<div className={e.colClass} key={i}>
						{/* <Link href="/accesorii" passHref> */}
						{/* <a> */}
						<div className={`relative h-96 ${e.cardHeight} w-full overflow-hidden shadow`}>
							<Image
								src={e.src}
								alt={t("common:accessories")}
								layout="fill"
								objectFit="cover"
								className="hover:scale-110 duration-200 ease-in-out"
							/>
							<div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent pointer-events-none z-10" />
							<p className="absolute bottom-2 left-2 text-2xl text-white z-10">{t(e.name)}</p>
						</div>
						{/* </a> */}
						{/* </Link> */}
					</div>
				))}
			</div>

			{/* <Link href="/accesorii" passhref>
                <a className="theme-button1-outlined flex items-center space-x-2 w-fit mx-auto">
                    <span>Vezi mai mult</span>
                    <span className="material-symbols-outlined">trending_flat</span>
                </a>
            </Link> */}
		</div>
	);
}
