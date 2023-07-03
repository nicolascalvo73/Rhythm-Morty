import {
	faAddressCard,
	faHeart,
	faHouse,
	faPowerOff,
	faCode,
	faBurger,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import Title from '../Title/Title'
import Toggle from '../Toggle/Toggle'
import styles from './Nav.module.css'
import { useState } from 'react'

const Nav = ({ logout, onSearch, gravityHandle, closeAll, getRandom }) => {
	const [burger, setBurger] = useState(false)
	const openBurger = () => {
		setBurger(!burger)
	}
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
					<Link to="https://github.com/nicolascalvo73/Rhythm-Morty" target="_blank">
						<button className={styles.button}>
							<FontAwesomeIcon icon={faCode} />
							<tool-tip>Repo ?</tool-tip>
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

			<hamburger className={styles.burger}>
				<button className={styles.button} onClick={openBurger}>
					<FontAwesomeIcon icon={faBurger} />
					<tool-tip>Menu</tool-tip>
				</button>
				<img
					className={styles.image}
					src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png"
					alt="Rick and Morty Title"
				/>
				<Toggle className={styles.toggle} gravityHandle={gravityHandle} />
			</hamburger>
			<menu className={burger === true ? styles.burgerMenu : styles.hidden}>
				<SearchBar onSearch={onSearch} closeAll={closeAll} getRandom={getRandom} />
				<div className={styles.gravityContainer}>
					<Link to="/home">
						<button className={styles.button} onClick={openBurger}>
							<FontAwesomeIcon icon={faHouse} />
							<tool-tip>Go home!</tool-tip>
						</button>
					</Link>
					<Link to="/favorites">
						<button className={styles.button} onClick={openBurger}>
							<FontAwesomeIcon icon={faHeart} />
							<tool-tip>Your Favs</tool-tip>
						</button>
					</Link>
					<Link to="/about">
						<button className={styles.button} onClick={openBurger}>
							<FontAwesomeIcon icon={faAddressCard} />
							<tool-tip>About me</tool-tip>
						</button>
					</Link>
					<Link to="https://github.com/nicolascalvo73/Rhythm-Morty" target="_blank">
						<button className={styles.button} onClick={openBurger}>
							<FontAwesomeIcon icon={faCode} />
							<tool-tip>Repo ?</tool-tip>
						</button>
					</Link>
					<Link to="/">
						<button className={styles.button}>
							<FontAwesomeIcon icon={faPowerOff} />
							<tool-tip>Log Out</tool-tip>
						</button>
					</Link>
				</div>
			</menu>
		</>
	)
}

export default Nav
