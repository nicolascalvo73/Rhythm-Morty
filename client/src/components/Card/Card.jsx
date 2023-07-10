import styles from './Card.module.css'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import { addFav, removeFav } from '../../redux/actions/actions'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Card = ({ id, name, image, gender, onClose, addFav, removeFav, myFavorites }) => {
	const [isFav, setIsFav] = useState(false)
	const { pathname } = useLocation()

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true)
			}
		})
	}, [myFavorites])

	const nameFit = name.length > 14 ? `${name.substring(0, 14)}...` : name

	const handleFavorite = () => {
		isFav ? removeFav(id) : addFav({ id, name, image, gender })
		setIsFav(!isFav)
	}
	const handleClose = () => {
		removeFav(id)
		onClose(id)
	}

	return (
		<div className={styles.Card}>
			<div className={styles.Header}>
				<h1 className={styles.Title}>
					{nameFit}
					<button className={isFav ? styles.removeFav : styles.addFav} onClick={handleFavorite}>
						<FontAwesomeIcon icon={faHeart} />
					</button>
				</h1>
				<div className={styles.ButtonContainer}>
					{pathname !== '/favorites' ? (
						<button className={styles.CloseBtn} onClick={handleClose}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					) : (
						<button className={styles.disabledBtn}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}
				</div>
			</div>
			<Link to={`/detail/${id}`} className={styles.Inner}>
				<h3> Click para más info </h3>
				<img className={styles.CardImg} src={image} alt="" />
			</Link>
		</div>
	)
}
export const mapDispatchToProps = (dispatch) => {
	return {
		addFav: (char) => {
			dispatch(addFav(char))
		},
		removeFav: (id) => {
			dispatch(removeFav(id))
		},
	}
}

export const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	}
}

// export default Card
export default connect(mapStateToProps, mapDispatchToProps)(Card)
