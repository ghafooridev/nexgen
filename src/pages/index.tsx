import { useEffect } from "react"
import Image from "next/image"
import { ToastContainer, toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { EXPERIENCE_LEVEL, MESSAGES } from "@/constants"

import useFetch from "@/hooks/useFetch/useFetch"

import "react-toastify/dist/ReactToastify.css"
import styles from "../styles/Home.module.scss"

import type { NextPage } from "next"

const Home: NextPage = () => {
	const schema = yup.object().shape({
		firstName: yup.string(),
		lastName: yup.string(),
		age: yup.number().min(18).max(99),
		email: yup.string().email().required(),
		password: yup.string().min(4).required(),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Confirm Password does not mach with Password")
			.required(),
		bio: yup.string(),
		gender: yup.string(),
		level: yup.string(),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })

	const { response, sendData, loading } = useFetch({ url: "user", method: "POST" })

	const onSubmit = (values: any) => {
		return sendData({
			data: {
				...values,
			},
		})
	}

	const ErrorContainer = () => {
		const errorElements = []

		for (const error in errors) {
			errorElements.push(
				<li key={error} className={styles.error}>
					{errors[error]?.message?.toString()}
				</li>
			)
		}

		return errorElements
	}

	useEffect(() => {
		if (response) {
			toast.success(MESSAGES.SUCCESSFUL_REGISTER, {
				position: toast.POSITION.BOTTOM_CENTER,
			})
		}
	}, [response])

	return (
		<div className={styles.container}>
			<aside className={styles.description}>
				<Image src={"/logo.png"} alt="Logo" width={150} height={45} />
				<h3>Welcome</h3>
				<p>Create Account to join our intelligent team</p>
			</aside>
			<form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
				<h2>Register</h2>
				<div className={styles.row}>
					<span>
						<input type="text" placeholder={"First Name"} {...register("firstName")} />
					</span>
					<span>
						<input type="text" placeholder="LastName" {...register("lastName")} />
					</span>
				</div>

				<div className={styles.row}>
					<span>
						<input
							type="text"
							placeholder="Email *"
							className={errors.email?.message && styles.error}
							{...register("email")}
						/>
					</span>
					<span>
						<input
							type="number"
							className={errors.age?.message && styles.error}
							placeholder={"Age"}
							{...register("age")}
						/>
					</span>
				</div>

				<div className={styles.row}>
					<span>
						<input
							type="password"
							className={errors.password?.message && styles.error}
							placeholder="Password *"
							{...register("password")}
						/>
					</span>
					<span>
						<input
							type="password"
							placeholder="Confirm Password *"
							{...register("confirmPassword")}
							className={errors.confirmPassword?.message && styles.error}
						/>
					</span>
				</div>

				<div className={styles.row}>
					<span>
						<select id="level" {...register("level")}>
							{EXPERIENCE_LEVEL.map(item => (
								<option key={item.value} value={item.value}>
									{item.label}
								</option>
							))}
						</select>
					</span>
					<span>
						<div className={styles.radio}>
							<input type="radio" id="M" value="M" checked {...register("gender")} />
							<label htmlFor="M">Male</label>
						</div>
						<div className={styles.radio}>
							<input type="radio" value="F" {...register("gender")} />
							<label htmlFor="F">Female</label>
						</div>
					</span>
				</div>
				<div className={styles.row}>
					<span>
						<textarea placeholder="Biography" {...register("bio")} />
					</span>
				</div>
				<div className={styles.action}>
					<ul>{ErrorContainer()}</ul>
					<button type="submit">{loading ? "Loading..." : "Register"}</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	)
}

export default Home
