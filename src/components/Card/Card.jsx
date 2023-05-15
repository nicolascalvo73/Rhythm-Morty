import styles from './Card.module.css'
import { useState } from 'react'

const Card = ({ id, type, location, name, species, gender, image, onClose, status, origin }) => {
	const [isFlipped, setIsFlipped] = useState(false)

	const handleFlipClick = () => {
		setIsFlipped(!isFlipped)
		console.log(isFlipped)
	}

	return (
		<div className={`${styles.Card} ${isFlipped ? styles.flipped : ''}`}>
			<div className={styles.front}>
				<div className={styles.Header}>
					<h1 className={styles.Title}>{name}</h1>
					<div className={styles.ButtonContainer}>
						<button className={styles.CloseBtn} onClick={() => onClose(id)}>
							X
						</button>
					</div>
				</div>

				<div className={styles.Inner} onClick={handleFlipClick}>
					<h3> Click para más info </h3>
					<img className={styles.CardImg} src={image} alt="" />
				</div>
			</div>
			<div className={styles.back} onClick={handleFlipClick}>
				<h2> Name: {name} </h2>
				<h2> Specie: {species} </h2>
				<h2> Type: {type} </h2>
				<h2> Gender: {gender} </h2>
				<h2> Status: {status} </h2>
				<h2> Origin: {origin.name} </h2>
				<h2> Location: {location.name} </h2>
			</div>
		</div>
	)
}

export default Card
