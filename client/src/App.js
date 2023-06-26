import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favorites'
import Form from './components/Form/Form'
import Modal from './components/Modal/Modal'
import Nav from './components/Nav/Nav.jsx'
import { removeFav } from './redux/actions/actions'

const App = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	const [characters, setCharacters] = useState([])
	const [gravity, setGravity] = useState('App')
	const [access, setAccess] = useState(false)
	const [modal, setModal] = useState({
		open: false,
		title: '',
		content: '',
	})

	useEffect(() => {
		if (!access) {
			navigate('/')
		}
	}, [access, navigate])

	const gravityHandle = () => {
		setGravity((prevGravity) => (prevGravity === 'App' ? 'App-no-gravity' : 'App'))
	}

	const login = (userData) => {
		const { email, password } = userData
		const URL = 'http://localhost:3001/rickandmorty/login/'
		axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
			const { access } = data
			setAccess(data)
			access && navigate('/home')
		})
	}

	const logout = () => {
		setAccess(false)
		setCharacters([])
	}

	const idNotFound = () => {
		setModal({
			open: true,
			title: 'No encontre ese ID',
			content: 'Estas promteando mal... serás castigada!',
		})
		setTimeout(() => {
			setModal({
				open: false,
				title: '',
				content: '',
			})
		}, 3500)
	}

	const nameNotFound = (name) => {
		let str = name.toLowerCase()
		let nombre = str.charAt(0).toUpperCase() + str.slice(1)
		setModal({
			open: true,
			title: `${nombre} no esta aquí!`,
			content: 'Estas tipeando mal... serás castigada!',
		})
		setTimeout(() => {
			setModal({
				open: false,
				title: '',
				content: '',
			})
		}, 3500)
	}

	const onClose = (id) => {
		dispatch(removeFav(id))
		setCharacters(characters.filter((char) => char.id !== id))
	}

	const closeAll = () => {
		characters.forEach((char) => dispatch(removeFav(char.id)))
		setCharacters([])
		navigate('/home')
	}

	const getRandom = () => {
		const value = Math.floor(Math.random() * 827)
		onSearch(value)
		navigate('/home')
	}

	const onSearch = (input) => {
		fetch(`http://localhost:3001/rickandmorty/character/${input}`)
			.then((res) => res.json())
			.then((data) => {
				if (!isNaN(input)) {
					if (data.name) {
						setCharacters((prevChars) => [...prevChars, data])
						navigate('/home')
						console.log(data)
					} else {
						idNotFound()
					}
				} else {
					if (data) {
						setCharacters((oldChars) => [...oldChars, ...data])
						navigate('/home')
					} else {
						nameNotFound(input)
					}
				}
			})
	}

	return (
		<div className={gravity}>
			<div className={pathname === '/' && 'hidden'}>
				<Nav
					logout={logout}
					onSearch={onSearch}
					gravityHandle={gravityHandle}
					closeAll={closeAll}
					getRandom={getRandom}
				/>
				<Modal isOpen={modal.open} modalTitle={modal.title} modalContent={modal.content} />
			</div>
			<Routes>
				<Route path="/" element={<Form login={login} />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	)
}

export default App
