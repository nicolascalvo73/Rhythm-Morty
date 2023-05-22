const validate = (inputs) => {
	let errors = {}
	const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
	const regexNumber = /\d/
	if (!inputs.email) {
		errors.email = 'Se requiere un correo electrónico.'
	} else {
		if (!regexEmail.test(inputs.email)) errors.email = 'Debe ser un correo electrónico valido.'
		if (inputs.email.length >= 35) errors.email = 'Ta muy laaaaaaaaaaargo.'
	}
	if (inputs.password.length < 6 || inputs.password.length > 10) {
		errors.password = 'Longitud incorrecta de contraseña.'
	} else if (!regexNumber.test(inputs.password)) {
		errors.password = 'Debe contener al menos un numerillo.'
	}
	return errors
}

export default validate
