const http = require('http')
const data = require('./utils/data.js')
const PORT = 3001

const server = http.createServer((req, res) => {
	console.log(`Server born & raised in port ${PORT}`)
	res.setHeader('Access-Control-Allow-Origin', '*')
	const { url } = req

	if (url.includes('/rickandmorty/character')) {
		const id = parseInt(url.split('/').at(-1))
		const personaje = data.find((personaje) => personaje.id === id)
		if (personaje) {
			res.setHeader('Content-Type', 'application/json')
			res.statusCode = 200
			res.end(JSON.stringify(personaje))
		} else {
			res.setHeader('Content-Type', 'application/json')
			res.statusCode = 404
			res.end(JSON.stringify({ error: 'Character not found' }))
		}
	} else {
		res.setHeader('Content-Type', 'application/json')
		res.statusCode = 403
		res.end(JSON.stringify({ error: 'Invalid route' }))
	}
})

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})

module.exports = server
