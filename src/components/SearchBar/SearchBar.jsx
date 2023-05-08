import styles from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
	return (
		<div className={styles.Header}>
			<input type="search" placeholder="Introduce aqui el coso" className={styles.Input} />
			<button
				className={styles.Button}
				onClick={(key) => {
					onSearch(key)
				}}>
				Agregar
			</button>
		</div>
	)
}

export default SearchBar
