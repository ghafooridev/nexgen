import { useState } from "react"

import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

import { instance } from "./config"

const useFetch = (axiosParams: AxiosRequestConfig) => {
	const [response, setResponse] = useState<AxiosResponse>()
	const [error, setError] = useState<AxiosError>()
	const [loading, setLoading] = useState(false)

	const execute = async (params: AxiosRequestConfig) => {
		try {
			setLoading(true)
			const result = await instance.request(params)
			setResponse(result)
		} catch (e) {
			const err = e as AxiosError
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	const sendData = (params: AxiosRequestConfig = {}) => {
		execute({ ...axiosParams, ...params })
	}

	return { response, error, loading, sendData }
}

export default useFetch
