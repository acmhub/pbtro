import dynamic from "next/dynamic";

const Landing = dynamic(() => import("./landing"));
const Products = dynamic(() => import("./products"));
const About = dynamic(() => import("./about"));
const WindowDoor = dynamic(() => import("./windowdoor"));
const Services = dynamic(() => import("./services"));
const Portfolio = dynamic(() => import("./portfolio"));
const CallToAction = dynamic(() => import("./call-to-action"));
const Accessories = dynamic(() => import("./accessories"));
const Testimonials = dynamic(() => import("./testimonials"));
const Contact = dynamic(() => import("./contact"));

export {
	Landing,
	Products,
	About,
	WindowDoor,
	Services,
	Portfolio,
	CallToAction,
	Accessories,
	Testimonials,
	Contact,
};
