import './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'
import Title from './components/Title/Title'
import { useState } from 'react'

function App() {
	const [cast, setCast] = useState(characters)

	return (
		<div className="App">
			<SearchBar onSearch={(characterID) => window.alert(characterID)} />
			<Title />
			<Cards characters={cast} />

			{/* <Card
				id={Rick.id}
				name={Rick.name}
				status={Rick.status}
				species={Rick.species}
				gender={Rick.gender}
				origin={Rick.origin.name}
				image={Rick.image}
				onClose={() => window.alert('Emulamos que se cierra la card')}
			/> */}
		</div>
	)
}

export default App
