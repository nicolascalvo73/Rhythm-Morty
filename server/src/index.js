const http = require('http')
const data = require('./utils/data.js')
const PORT = 3001

const server = http.createServer((req, res) => {
	console.log(`Server born & raised in port ${PORT}`)
	res.setHeader('Access-Control-Allow-Origin', '*')

	if (req.url.includes('/rickandmorty/character')) {
		const id = req.url.substring(req.url.lastIndexOf('/') + 1)
		const personaje = data.find((personaje) => personaje.id === parseInt(id))
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
		res.statusCode = 404
		res.end(JSON.stringify({ error: 'Invalid route' }))
	}
})

server.listen(3001, () => {
	console.log('Server listening on port 3001')
})

module.exports = server
