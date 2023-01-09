const { i18n } = require("./next-i18next.config");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|png)",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=9999999999, must-revalidate",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
