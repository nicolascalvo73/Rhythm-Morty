const { login } = require('../controllers/login')
const { getCharById } = require('../controllers/getCharacterById')
const { getCharacterByName } = require('../controllers/getCharacterByName')
const { postFav, deleteFav } = require('../controllers/handleFavorites')
const router = require('express').Router()

router.get('/character/:id', (req, res) => {
	const { id } = req.params
	!isNaN(id) ? getCharById(req, res) : getCharacterByName(req, res)
})
router.get('/login', (req, res) => {
	login(req, res)
})
router.post('/fav', (req, res) => {
	postFav(req, res)
})
router.delete('/fav/:id', (req, res) => {
	deleteFav(req, res)
})

module.exports = router
