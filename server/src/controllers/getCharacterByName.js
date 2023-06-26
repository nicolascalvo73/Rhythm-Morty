const axios = require('axios')

const getCharacterByName = (req, res) => {
	const { id } = req.params
	const initialURL = `https://rickandmortyapi.com/api/character/?name=${id}`
	let chars = []
	const fetchData = (url) => {
		axios(url)
			.then(({ data }) => {
				chars = [...chars, ...data.results]
				return data.info.next !== null ? fetchData(data.info.next) : res.status(200).json(chars)
			})
			.catch((error) => {
				res.status(500).json(error.message)
			})
	}
	fetchData(initialURL)
}

module.exports = { getCharacterByName }
