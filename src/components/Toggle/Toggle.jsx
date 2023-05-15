import React, { useState } from 'react'
import styles from './Toggle.module.css'

const Toggle = ({ gravityHandle }) => {
	const [isChecked, setIsChecked] = useState(true)

	const handleToggle = () => {
		setIsChecked(!isChecked)
		gravityHandle()
	}

	return (
		<div className={styles.container}>
			<h3>Gravity</h3>
			<div className={styles.toggleSwitch}>
				<input type="checkbox" className={styles.checkbox} checked={isChecked} />
				<div className={styles.slider} onClick={handleToggle}></div>
			</div>
		</div>
	)
}

export default Toggle
