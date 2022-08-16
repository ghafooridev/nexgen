import type { NextPage } from "next"
import Image from "next/image"
import styles from "../styles/Home.module.scss"
import { EXPERIENCE_LEVEL } from "@/constants"

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<aside className={styles.description}>
				<Image src={"/logo.png"} alt="Logo" width={150} height={45} />
				<h3>Welcome</h3>
				<p>Register to join a lot of intelligent developers</p>
			</aside>
			<main className={styles.card}>
				<h2>Register</h2>
				<div className={styles.row}>
					<span>
						<input type="text" placeholder="First Name*" value="" />
					</span>
					<span>
						<input type="text" placeholder="Last Name *" value="" />
					</span>
				</div>

				<div className={styles.row}>
					<span>
						<input type="email" placeholder="Email *" value="" />
					</span>
					<span>
						<input type="text" placeholder="Phone Number *" value="" />
					</span>
				</div>

				<div className={styles.row}>
					<span>
						<input type="password" placeholder="Password *" value="" />
					</span>
					<span>
						<input type="password" placeholder="Confirm Password *" value="" />
					</span>
				</div>

				<div className={styles.row}>
					<span>
						<select name="cars" id="cars">
							{EXPERIENCE_LEVEL.map(item => (
								<option key={item.value} value={item.value}>
									{item.label}
								</option>
							))}
						</select>
					</span>
					<span>
						<div className={styles.radio}>
							<input type="radio" name="group1" id="M" value="M" checked />
							<label htmlFor="M">Male</label>
						</div>
						<div className={styles.radio}>
							<input type="radio" name="gender" value="F" />
							<label htmlFor="F">Female</label>
						</div>
					</span>
				</div>
				<div className={styles.row}>
					<span>
						<textarea placeholder="Biography" value="" />
					</span>
				</div>
				<div className={styles.row}>
					<button>Register</button>
				</div>
			</main>
		</div>
	)
}

export default Home
