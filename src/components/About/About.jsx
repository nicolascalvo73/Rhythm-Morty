import styles from './About.module.css'
import meImage from '../../assets/images/me.png'

const About = () => {
	return (
		<div className={styles.container}>
			<img src={meImage} alt="Foto del autor RickandMortyzada" />
			<div className={styles.portal}></div>
			<div className={styles.data}>
				<h1>Nicolás Calvo</h1>
				<h2> Specie: Human (kindof) </h2>
				<h2> Type: Developer </h2>
				<h2> Gender: Male </h2>
				<h2> Status: Coding </h2>
				<h2> Origin: Unknown </h2>
				<h2> Location: Earth (C-137) </h2>
			</div>
			<div className={styles.pickleRick}></div>
		</div>
	)
}

export default About
