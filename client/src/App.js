import './App.css'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import Modal from './components/Modal/Modal'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useDispatch } from 'react-redux'
import { removeFav } from './redux/actions/actions'

function App() {
	const [characters, setCharacters] = useState([])
	const [gravity, setGravity] = useState('App')
	const [modalOpen, setModalOpen] = useState(false)
	const [modalTitle, setModalTitle] = useState('')
	const [modalContent, setModalContent] = useState('')
	const [access, setAccess] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	const EMAIL = 'mail@mail.com'
	const PASSWORD = 'admin123'

	useEffect(() => {
		!access && navigate('/')
	}, [access])

	const gravityHandle = () => {
		gravity === 'App' ? setGravity('App-no-gravity') : setGravity('App')
	}

	const login = (userData) => {
		if (userData.password === PASSWORD && userData.email === EMAIL) {
			setAccess(true)
			navigate('/home')
		}
	}

	const logout = () => {
		setAccess(false)
		setCharacters([])
	}

	const idNotFound = () => {
		setModalTitle('No encontre ese ID')
		setModalContent('Estas promteando mal... serás castigada!')
		setModalOpen(true)
		setTimeout(() => {
			setModalTitle('')
			setModalContent('')
			setModalOpen(false)
		}, 3500)
	}

	const nameNotFound = (name) => {
		let str = name.toLowerCase()
		let nombre = str.charAt(0).toUpperCase() + str.slice(1)
		setModalTitle(`${nombre} no esta aquí!`)
		setModalContent('Estas tipeando mal... serás castigada!')
		setModalOpen(true)
		setTimeout(() => {
			setModalTitle('')
			setModalContent('')
			setModalOpen(false)
		}, 3500)
	}

	const onClose = (id) => {
		dispatch(removeFav(id))
		setCharacters(characters.filter((char) => char.id !== id))
	}

	const closeAll = () => {
		setCharacters([])
		navigate('/home')
	}

	const getRandom = () => {
		const value = Math.floor(Math.random() * 827)
		onSearch(value)
		navigate('/home')
	}

	const onSearch = (input) => {
		if (!isNaN(input)) {
			fetch(`http://localhost:3001/rickandmorty/character/${input}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data])
						navigate('/home')
					} else {
						idNotFound()
					}
				})
		} else {
			fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.results) {
						setCharacters((oldChars) => [...oldChars, ...data.results])
						navigate('/home')
					} else {
						nameNotFound(input)
					}
				})
		}
	}

	return (
		<div className={gravity}>
			<div className={pathname === '/' && 'hidden'}>
				{/* {pathname !== '/' && <Nav/>} */}

				<Nav
					logout={logout}
					onSearch={onSearch}
					gravityHandle={gravityHandle}
					closeAll={closeAll}
					getRandom={getRandom}
				/>
				<Modal isOpen={modalOpen} modalTitle={modalTitle} modalContent={modalContent} />
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