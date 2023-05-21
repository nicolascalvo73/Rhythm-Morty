import Card from '../Card/Card'
import styles from './Cards.module.css'

export default function Cards({ characters, onClose }) {
	return (
		<div className={styles.Container}>
			{characters.map(({ id, type, location, name, status, species, origin, gender, image }) => {
				return <Card id={id} name={name} image={image} onClose={onClose} />
			})}
		</div>
	)
}
