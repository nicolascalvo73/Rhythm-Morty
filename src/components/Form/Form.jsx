import styles from './Form.module.css'
import { useEffect, useState } from 'react'
import { validateEmail, validatePassword } from '../../utils/validation'

const Form = ({ login }) => {
	const [img, setImg] = useState('')
	const [button, setButton] = useState(false)

	const [userData, setUserData] = useState({
		email: '',
		password: '',
	})

	const [errors, setErrors] = useState({})

	const handleChange = (event) => {
		const { value, name } = event.target
		setErrors(
			name === 'email'
				? validateEmail({ ...userData, [name]: value })
				: validatePassword({ ...userData, [name]: value })
		)
		setUserData({ ...userData, [name]: value })
		Object.entries(errors).length === 0 && setButton(true)
	}

	useEffect(() => {
		const value = Math.floor(Math.random() * 827)
		setImg(`https://rickandmortyapi.com/api/character/avatar/${value}.jpeg`)
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault()
		Object.entries(errors).length === 0 && login(userData)
		setUserData({
			email: '',
			password: '',
		})
	}

	return (
		<div className={styles.container}>
			<div className={styles.portal}></div>
			<img className={styles.overlayImg} src={img} alt="Character" />
			<form className={styles.data}>
				<label>
					<h2>E-mail...</h2>
				</label>
				<input onChange={handleChange} value={userData.email} name="email" className={styles.input}></input>
				<span className={styles.warning}>{` ${
					errors.email ? errors.email : 'ingresa con mail@mail.com'
				}`}</span>
				<label>
					<h2>Password</h2>
				</label>
				<input
					onChange={handleChange}
					value={userData.password}
					name="password"
					className={styles.input}></input>
				<span className={styles.warning}>{` ${
					errors.password ? errors.password : 'ingresa con admin123'
				}`}</span>
				<button
					disabled={!button}
					className={button ? styles.button : styles.disabledButton}
					onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Form
