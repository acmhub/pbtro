import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utils/createEmotionCache";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const styledComponentsSheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		const cache = createEmotionCache();
		const { extractCriticalToChunks } = createEmotionServer(cache);

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						styledComponentsSheet.collectStyles(
							<App emotionCache={cache} {...props} />
						),
				});

			const initialProps = await Document.getInitialProps(ctx);
			const emotionStyles = extractCriticalToChunks(initialProps.html);
			const emotionStyleTags = emotionStyles.styles.map((style) => (
				<style
					data-emotion={`${style.key} ${style.ids.join(" ")}`}
					key={style.key}
					dangerouslySetInnerHTML={{ __html: style.css }}
				/>
			));

			return {
				...initialProps,
				styles: (
					<React.Fragment>
						{initialProps.styles}
						{styledComponentsSheet.getStyleElement()}
						{emotionStyleTags}
					</React.Fragment>
				),
			};
		} finally {
			styledComponentsSheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					{this.props.emotionStyleTags}
					{/* Meta */}
					<meta name="robots" content="index, follow" />
					<meta
						property="og:title"
						content="Promotion Business Team - Producător Tâmplărie PVC și Aluminiu"
					/>
					<meta
						property="og:description"
						content="Produsele noastre constituie o investiție pe termen lung sigură, fără costuri suplimentare de întreținere, reparații , recondiționare etc. Montajul este executat de către specialiștii echipei noastre, la care se adaugă și servicii de consultanță disponibile oricând pentru clienții nostri."
					/>
					<meta
						property="og:image"
						content="/images/logos/logo.svg"
					/>

					{/* FavIcon */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<meta name="msapplication-TileColor" content="#ffc40d" />
					<meta name="theme-color" content="#ffffff" />

					{/* Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
								page_path: window.location.pathname,
								});
							`,
						}}
					/>

					{/* Google Font */}
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap"
						rel="stylesheet"
					/>

					{/* Material Icons */}
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
						rel="stylesheet"
					/>

					{/* Font Awesome */}
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
						integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
