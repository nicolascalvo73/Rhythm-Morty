import { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
	const [input, setInput] = useState('')

	const handleChange = (event) => {
		setInput(event.target.value)
	}

	return (
		<div className={styles.Header}>
			<input
				type="search"
				placeholder="Escribe aqui ID o nombre"
				className={styles.Input}
				onChange={handleChange}
				value={input}
			/>
			<button
				className={styles.Button}
				onClick={() => {
					onSearch(input)
					setInput('')
				}}>
				Get Schwifty!
			</button>
		</div>
	)
}

export default SearchBar
