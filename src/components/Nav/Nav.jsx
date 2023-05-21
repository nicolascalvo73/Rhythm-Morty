import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-router-dom'

const Nav = ({ onSearch, gravityHandle, closeAll, getRandom }) => {
	return (
		<nav className={styles.container}>
			<SearchBar onSearch={onSearch} closeAll={closeAll} getRandom={getRandom} />
			<div className={styles.gravityContainer}>
				<Link to="/home">
					<button className={styles.button}>Home</button>
				</Link>
				<Link to="/about">
					<button className={styles.button}>About</button>
				</Link>

				<Toggle className={styles.toggle} gravityHandle={gravityHandle} />
			</div>
		</nav>
	)
}

export default Nav
