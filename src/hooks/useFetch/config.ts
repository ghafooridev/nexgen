import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_ADDRESS

const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
})

export { instance }
