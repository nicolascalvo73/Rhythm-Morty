import { useState } from 'react'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom, faCircleArrowDown, faShuffle } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ onSearch, closeAll, getRandom }) => {
	const [input, setInput] = useState('')

	const handleChange = (event) => {
		setInput(event.target.value)
	}
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			onSearch(input)
			setInput('')
		}
	}

	return (
		<div className={styles.Header}>
			<input
				type="search"
				placeholder="Escribe aqui ID o nombre"
				className={styles.Input}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				value={input}
			/>

			<button
				className={styles.Button}
				onClick={() => {
					onSearch(input)
					setInput('')
				}}>
				<FontAwesomeIcon icon={faCircleArrowDown} />
				<tool-tip>Get Character</tool-tip>
			</button>
			<button
				className={styles.Button}
				onClick={() => {
					getRandom()
				}}>
				<FontAwesomeIcon icon={faShuffle} />
				<tool-tip>Get Random</tool-tip>
			</button>
			<button
				className={styles.Button}
				onClick={() => {
					closeAll()
				}}>
				<FontAwesomeIcon icon={faBroom} />
				<tool-tip>Clean-em all!</tool-tip>
			</button>
		</div>
	)
}

export default SearchBar
