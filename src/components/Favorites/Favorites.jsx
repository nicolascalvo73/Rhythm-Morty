import styles from './Favorites.module.css'
import Card from '../Card/Card'
import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions/actions'
import { useState } from 'react'

const Favorites = ({ myFavorites }) => {
	const [aux, setAux] = useState(false)

	const dispatch = useDispatch()

	const handleOrder = (event) => {
		dispatch(orderCards(event.target.value))
		setAux(!aux)
	}

	const handleFilter = (event) => {
		dispatch(filterCards(event.target.value))
	}

	return (
		<div className={styles.container}>
			<div className={styles.selectors}>
				<select onChange={handleOrder}>
					<option>Sort by ID</option>
					<option value="A">Ascending</option>
					<option value="D">Descending</option>
				</select>
				<select onChange={handleFilter}>
					<option>Sort by gender</option>
					<option value="All">All Genders</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			{myFavorites.map(({ id, name, image, gender }) => {
				return <Card id={id} name={name} image={image} gender={gender} />
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
