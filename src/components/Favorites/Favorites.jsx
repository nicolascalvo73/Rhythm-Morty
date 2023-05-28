import styles from './Favorites.module.css'
import Card from '../Card/Card'
import { connect } from 'react-redux'

const Favorites = ({ myFavorites }) => {
	return (
		<div className={styles.container}>
			{myFavorites.map(({ id, name, image }) => {
				return <Card id={id} name={name} image={image} />
			})}
		</div>
	)
}

export const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	}
}

export default connect(mapStateToProps, null)(Favorites)
