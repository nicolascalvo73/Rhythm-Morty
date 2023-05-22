export const validateEmail = ({ email }) => {
	let errors = {}
	const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i
	if (!email) {
		errors.email = 'Se requiere un correo electrónico.'
	} else {
		if (!regexEmail.test(email)) errors.email = 'Debe ser un correo electrónico valido.'
		if (email.length >= 35) errors.email = 'Ta muy laaaaaaaaaaargo.'
	}
	return errors
}
export const validatePassword = ({ password }) => {
	let errors = {}
	const regexNumber = /\d/
	if (password.length < 6 || password.length > 10) {
		errors.password = 'Longitud incorrecta de contraseña.'
	} else if (!regexNumber.test(password)) {
		errors.password = 'Debe contener al menos un numerillo.'
	}
	return errors
}
