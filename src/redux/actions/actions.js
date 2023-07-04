import axios from 'axios'
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './types'

const BASE_URL = 'https://reactandmorty.onrender.com'
const endpoint = `${BASE_URL}/rickandmorty/fav`
export const addFav = (character) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(endpoint, character)
			const { data } = response
			return dispatch({
				type: ADD_FAV,
				payload: data,
			})
		} catch (error) {
			console.error('Error al agregar favorito:', error.message)
		}
	}
}
export const removeFav = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(endpoint + id)
			const { data } = response
			return dispatch({
				type: REMOVE_FAV,
				payload: data,
			})
		} catch (error) {
			console.error('Error al remover favorito:', error.message)
		}
	}
}

export const filterCards = (gender) => {
	return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
	return { type: ORDER, payload: order }
}
