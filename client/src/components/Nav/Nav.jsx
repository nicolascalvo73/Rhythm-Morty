import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Title from '../Title/Title'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faPowerOff, faHeart } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ logout, onSearch, gravityHandle, closeAll, getRandom }) => {
	return (
		<>
			<nav className={styles.container}>
				<SearchBar onSearch={onSearch} closeAll={closeAll} getRandom={getRandom} />
				<Title className={styles.title} />
				<div className={styles.gravityContainer}>
					<Link to="/home">
						<button className={styles.button}>
							<FontAwesomeIcon icon={faHouse} />
							<tool-tip>Go home!</tool-tip>
						</button>
					</Link>
					<Link to="/favorites">
						<button className={styles.button}>
							<FontAwesomeIcon icon={faHeart} />
							<tool-tip>Your Favs</tool-tip>
						</button>
					</Link>
					<Link to="/about">
						<button className={styles.button}>
							<FontAwesomeIcon icon={faAddressCard} />
							<tool-tip>About me</tool-tip>
						</button>
					</Link>
					<Link to="/">
						<button className={styles.button}>
							<FontAwesomeIcon icon={faPowerOff} />
							<tool-tip>Log Out</tool-tip>
						</button>
					</Link>

					<Toggle className={styles.toggle} gravityHandle={gravityHandle} />
				</div>
			</nav>
		</>
	)
}

export default Nav
