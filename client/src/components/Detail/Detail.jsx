import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../../falseEnv'
import styles from './Detail.module.css'

const Detail = () => {
	const { id } = useParams()
	const [character, setCharacter] = useState([])

	useEffect(() => {
		axios(`${BASE_URL}/rickandmorty/character/${id}`).then(({ data }) => {
			if (data.name) {
				setCharacter(data)
			} else {
				window.alert('No hay personajes con ese ID')
			}
		})
		return setCharacter({})
	}, [id])

	return (
		<div className={styles.container}>
			{character.image && <img src={character.image} alt="Character" />}
			<div className={styles.portal}></div>
			<Link to="/home">
				<button className={styles.button}>
					<FontAwesomeIcon icon={faCircleArrowLeft} />
					<tool-tip>Go back!</tool-tip>
				</button>
			</Link>
			<div className={styles.data}>
				{character.name && <h1>{character.name}</h1>}
				{character.status && <h2>Status: {character.status}</h2>}
				{character.species && <h2>Species: {character.species}</h2>}
				{character.species && <h2>Type: {character.species}</h2>}
				{character.gender && <h2>Gender: {character.gender}</h2>}
				{character.gender && <h2>Id: {character.id}</h2>}
				{character.origin && character.origin.name && <h2>Origin: {character.origin.name}</h2>}
			</div>
		</div>
	)
}

export default Detail
