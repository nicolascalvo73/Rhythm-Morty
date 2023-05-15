import Card from '../Card/Card'
import styles from './Cards.module.css'

export default function Cards({ characters, onClose }) {
	return (
		<div className={styles.Container}>
			{characters.map(({ id, type, location, name, status, species, origin, gender, image }) => {
				return (
					<Card
						id={id}
						type={type}
						location={location}
						name={name}
						status={status}
						species={species}
						gender={gender}
						origin={origin.name}
						image={image}
						onClose={onClose}
					/>
				)
			})}
		</div>
	)
}
