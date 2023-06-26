// const axios = require('axios')
// const URL = 'https://rickandmortyapi.com/api/character'

// const getCharacterById = (res, id) => {
// 	axios
// 		.get(`${URL}/${id}`)
// 		.then(({ data }) => {
// 			const { name, gender, species, origin, image, status, location } = data
// 			const { name: originName } = origin
// 			const { name: locationName } = location

// 			const character = {
// 				id: id,
// 				name: name,
// 				gender: gender,
// 				species: species,
// 				origin: originName,
// 				image: image,
// 				status: status,
// 				location: locationName,
// 			}
// 			res.writeHead(200, { 'Content-Type': 'application/json' })
// 			res.end(JSON.stringify(character))
// 		})
// 		.catch((error) => {
// 			res.writeHead(500, { 'Content-Type': 'text/plain' })
// 			res.end(JSON.stringify(error.message))
// 		})
// }

// module.exports = getCharacterById

const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character'

const getCharById = (req, res) => {
	const { id } = req.params
	axios(`${URL}/${id}`)
		.then((response) => response.data)
		.then(({ id, name, gender, species, origin, image, status, location }) => {
			if (name) {
				const character = {
					id,
					name,
					gender,
					species,
					origin: origin.name,
					image,
					status,
					location: location.name,
				}
				return res.status(200).json(character)
			}
			return res.status(404).send('Not found')
		})
		.catch((error) => res.status(500).send(error.message))
}

module.exports = { getCharById }
