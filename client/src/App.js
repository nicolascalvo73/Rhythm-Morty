import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { BASE_URL } from './falseEnv'
import './App.css'
import About from './components/About/About'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favorites'
import Form from './components/Form/Form'
import Modal from './components/Modal/Modal'
import Nav from './components/Nav/Nav'
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

	const login = async (userData) => {
		const { email, password } = userData
		const URL = `${BASE_URL}/rickandmorty/login/`
		try {
			const { data } = await axios(`${URL}?email=${email}&password=${password}`)
			const { access } = data
			setAccess(data)
			access ? navigate('/home') : window.alert(`Look Morty ${email.split('@')[0]} no puede entrar!`)
		} catch (error) {
			window.alert(error.message)
		}
	}

	const logout = () => {
		setAccess(false)
		setCharacters([])
	}

	const showModal = (title, content) => {
		setModal({
			open: true,
			title: title,
			content: content,
		})
		setTimeout(() => {
			setModal({
				open: false,
				title: '',
				content: '',
			})
		}, 3500)
	}

	const idNotFound = () => {
		showModal('No encontre ese ID', 'Estas promteando mal... serás castigada!')
	}

	const nameNotFound = (name) => {
		let str = name.toLowerCase()
		let nombre = str.charAt(0).toUpperCase() + str.slice(1)
		showModal(`${nombre} no esta aquí!`, 'Estas tipeando mal... serás castigada!')
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

	const onSearch = async (input) => {
		const exists = characters.find((char) => char.id === +input)
		if (!exists) {
			try {
				const { data } = await axios(`${BASE_URL}/rickandmorty/character/${input}`)
				if (!isNaN(input)) {
					if (data.name) {
						setCharacters((prevChars) => [...prevChars, data])
						navigate('/home')
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
			} catch (error) {
				showModal('algo falló...', error.message)
			}
		} else {
			showModal('Ya está aqui', 'pay atention man!')
		}
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
