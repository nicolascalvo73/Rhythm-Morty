import styles from './Title.module.css'

const Title = () => {
	return (
		<div className={styles.Title}>
			<img
				className={styles.Image}
				src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png"
				alt="Rick and Morty Title"
			/>
		</div>
	)
}
export default Title
