const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character'

const getCharById = async (req, res) => {
	const { id } = req.params
	try {
		const response = await axios(`${URL}/${id}`)
		const { data } = response
		let character = { ...character, origin: data.origin.name, location: data.location.name }
		return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = { getCharById }
