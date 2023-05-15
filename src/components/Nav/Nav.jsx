import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Toggle from '../Toggle/Toggle'

const Nav = ({ onSearch, gravityHandle, closeAll, getRandom }) => {
	return (
		<nav className={styles.container}>
			<SearchBar onSearch={onSearch} closeAll={closeAll} getRandom={getRandom} />
			<Toggle className={styles.toggle} gravityHandle={gravityHandle} />
		</nav>
	)
}

export default Nav
