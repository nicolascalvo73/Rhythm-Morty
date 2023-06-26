// const getCharacterById = require('./controllers/getCharacterById')
// const getCharacterByName = require('./controllers/getCharacterByName')
// const http = require('http')
// const PORT = 3001

// const server = http.createServer((req, res) => {
// 	console.log(`Server born & raised in port ${PORT}`)
// 	res.setHeader('Access-Control-Allow-Origin', '*')
// 	const { url } = req

// 	if (url.includes('/rickandmorty/character')) {
// 		const input = url.split('/').at(-1)
//* 		!isNaN(input) ? getCharacterById(res, parseInt(input)) : getCharacterByName(res, input.toString())
// 	}
// })

// server.listen(PORT, () => {
// 	console.log(`Server listening on port ${PORT}`)
// })

const express = require('express')
const server = express()
const router = require('./routes/index')
const morgan = require('morgan')
const PORT = 3001

server.use(express.json())
server.use(morgan('dev'))

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', 'true')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
	next()
})

server.use('/rickandmorty', router)

server.listen(PORT, () => {
	console.log(`Server escuchanding in port: ${PORT}`)
})
