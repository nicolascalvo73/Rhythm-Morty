import styles from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ id, name, image, onClose }) => {
	return (
		<div className={styles.Card}>
			<div className={styles.front}>
				<div className={styles.Header}>
					<h1 className={styles.Title}>{name}</h1>
					<div className={styles.ButtonContainer}>
						<button className={styles.CloseBtn} onClick={() => onClose(id)}>
							X
						</button>
					</div>
				</div>
				<Link to={`/detail/${id}`} className={styles.Inner}>
					<h3> Click para más info </h3>
					<img className={styles.CardImg} src={image} alt="" />
				</Link>
			</div>
		</div>
	)
}

export default Card
