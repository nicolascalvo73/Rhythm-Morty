import './App.css'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import Title from './components/Title/Title.jsx'
import Modal from './components/Modal/Modal'
import { useEffect, useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'

function App() {
	const [characters, setCharacters] = useState([])
	const [gravity, setGravity] = useState('App')
	const [modalOpen, setModalOpen] = useState(false)
	const [modalTitle, setModalTitle] = useState('')
	const [modalContent, setModalContent] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/home')
	}, [])

	const gravityHandle = () => {
		gravity === 'App' ? setGravity('App-no-gravity') : setGravity('App')
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
			fetch(`https://rickandmortyapi.com/api/character/${input}`)
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
			<Nav onSearch={onSearch} gravityHandle={gravityHandle} closeAll={closeAll} getRandom={getRandom} />
			<Title />
			<Modal isOpen={modalOpen} modalTitle={modalTitle} modalContent={modalContent} />
			<Routes>
				<Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	)
}

export default App
