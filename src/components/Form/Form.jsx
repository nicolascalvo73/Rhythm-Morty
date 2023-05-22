import styles from './Form.module.css'
import { useEffect, useState } from 'react'
import validate from '../../utils/validaciones'

const Form = ({ login }) => {
	const [img, setImg] = useState('')
	const [button, setButton] = useState(false)

	const [userData, setUserData] = useState({
		email: '',
		password: '',
	})

	const [errors, setErrors] = useState({})

	const handleChange = (event) => {
		const property = event.target.name
		const value = event.target.value
		setUserData({ ...userData, [property]: value })
		setErrors(validate({ ...userData, [property]: value }))
		Object.entries(errors).length === 0 && setButton(true)
	}

	useEffect(() => {
		const value = Math.floor(Math.random() * 827)
		setImg(`https://rickandmortyapi.com/api/character/avatar/${value}.jpeg`)
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault()
		login(userData)
	}

	return (
		<div className={styles.container}>
			<img src={img} alt="Character" />
			<div className={styles.portal}></div>
			<form className={styles.data}>
				<label>
					<h2>E-mail</h2>
				</label>
				<input onChange={handleChange} value={userData.email} name="email" className={styles.input}></input>
				<span className={styles.warning}>{errors.email}</span>
				<label>
					<h2>Password</h2>
				</label>
				<input
					onChange={handleChange}
					value={userData.password}
					name="password"
					className={styles.input}></input>
				<span className={styles.warning}>{errors.password}</span>
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
