import type { AppProps } from "next/app"
import Head from "next/head"

import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>NexGen</title>
				<meta name="description" content="next generation by NexGen" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
