import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from '../actions/types'

const initialState = {
	myFavorites: [],
	allCharactersFav: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			return {
				...state,
				myFavorites: [...state.allCharactersFav, payload],
				allCharactersFav: [...state.allCharactersFav, payload],
			}

		case FILTER:
			const allCharactersFavFiletered = state.allCharactersFav.filter((char) => char.gender === payload)
			return payload === 'All'
				? { ...state, myFavorites: [...state.allCharactersFav] }
				: {
						...state,
						myFavorites: allCharactersFavFiletered,
				  }

		case ORDER:
			const allCharactersFavCopy = [...state.allCharactersFav]
			return {
				...state,
				myFavorites:
					payload === 'A'
						? allCharactersFavCopy.sort((a, b) => a.id - b.id)
						: allCharactersFavCopy.sort((a, b) => b.id - a.id),
			}

		case REMOVE_FAV:
			return {
				...state,
				myFavorites: state.myFavorites.filter((char) => char.id !== payload),
				allCharactersFav: state.allCharactersFav.filter((char) => char.id !== payload),
			}

		default:
			return { ...state }
	}
}

export default rootReducer
