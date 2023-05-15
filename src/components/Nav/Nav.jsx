import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Toggle from '../Toggle/Toggle'

const Nav = ({ onSearch, gravityHandle }) => {
	return (
		<nav className={styles.container}>
			<SearchBar onSearch={onSearch} />
			<Toggle className={styles.toggle} gravityHandle={gravityHandle} />
		</nav>
	)
}

export default Nav
