import { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ onSearch, closeAll, getRandom }) => {
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
			<button
				className={styles.Button}
				onClick={() => {
					getRandom()
				}}>
				Get Shuffle
			</button>
			<button
				className={styles.Button}
				onClick={() => {
					closeAll()
				}}>
				Kill'em all
			</button>
		</div>
	)
}

export default SearchBar
