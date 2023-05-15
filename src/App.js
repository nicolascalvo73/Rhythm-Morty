import './App.css'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import Title from './components/Title/Title.jsx'
import { useState } from 'react'

function App() {
	const [characters, setCharacters] = useState([])
	const [gravity, setGravity] = useState('App')

	const gravityHandle = () => {
		gravity === 'App' ? setGravity('App-no-gravity') : setGravity('App')
	}

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id))
	}

	const onSearch = (input) => {
		if (!isNaN(input)) {
			fetch(`https://rickandmortyapi.com/api/character/${input}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data])
					} else {
						window.alert('¡No hay personajes con este ID!')
					}
				})
		} else {
			fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.results) {
						setCharacters((oldChars) => [...oldChars, ...data.results])
					} else {
						window.alert('¡No hay personajes con este nombre!')
					}
				})
		}
	}

	return (
		<div className={gravity}>
			<Nav onSearch={onSearch} gravityHandle={gravityHandle} />
			<Title />
			<Cards characters={characters} onClose={onClose} />
		</div>
	)
}

export default App
