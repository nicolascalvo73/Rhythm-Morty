import styles from './Card.module.css'

const Card = ({ name, species, gender, image, onClose, status, origin }) => {
	return (
		<div className={styles.Card}>
			<div className={styles.Header}>
				<h1 className={styles.Title}>{name}</h1>
				<div className={styles.ButtonContainer}>
					<button className={styles.CloseBtn} onClick={onClose}>
						X
					</button>
				</div>
			</div>

			<div className={styles.Inner}>
				{/* <h2 className={styles.Subtitle}> {species} </h2>
				<h2 className={styles.Subtitle}> {gender} </h2> */}
				<h3> Click para más info </h3>
				<img className={styles.CardImg} src={image} alt="" />
			</div>
		</div>
	)
}

export default Card
