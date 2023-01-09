import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function BackToTop() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const buttonState = () => {
			if (window.scrollY >= 500) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", buttonState, { passive: true });
		return () => window.removeEventListener("scroll", buttonState);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`
                fixed bottom-5 right-5 h-8 w-8 bg-[rgba(250,250,250,0.7)] border text-theme2 flex items-center justify-center
                translate-y-5 cursor-pointer z-[900] duration-200 ease-in-out 
                ${
					scrolled
						? "pointer-events-auto translate-y-0"
						: "pointer-events-none opacity-0"
				}
            `}
			onClick={scrollToTop}
		>
			<BsArrowUp className="h-5 w-5" />
		</div>
	);
}
