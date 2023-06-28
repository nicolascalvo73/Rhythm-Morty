const axios = require('axios')

const getCharacterByName = async (req, res) => {
	try {
		const { id } = req.params
		const initialURL = `https://rickandmortyapi.com/api/character/?name=${id}`
		let chars = []
		const fetchData = async (url) => {
			try {
				const response = await axios(url)
				const { data } = response
				chars = [...chars, ...data.results]
				return data.info.next !== null ? fetchData(data.info.next) : res.status(200).json(chars)
			} catch (error) {
				return res.status(404).json(error.message)
			}
		}
		await fetchData(initialURL)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}

module.exports = { getCharacterByName }
