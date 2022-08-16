/** @type {import('next').NextConfig} */

const path = require("path")

const srcDir = path.join(__dirname, "src")
const publicDir = path.join(__dirname, "public")
const stylesDir = path.join(srcDir, "styles")

const nextConfig = {
  webpack(config) {
		// Resolve absolute imports
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			"@": srcDir,
			public: publicDir,
		}

		return config
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [stylesDir],
	},
}

module.exports = nextConfig
