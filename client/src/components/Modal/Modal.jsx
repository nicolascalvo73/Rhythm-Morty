import styles from './Modal.module.css'

const Modal = ({ isOpen, modalTitle, modalContent }) => {
	const visibility = isOpen ? styles.container : styles.nope
	return (
		<div className={visibility}>
			<div className={styles.modal}>
				<h2>{modalTitle}</h2>
				<h2>{modalContent}</h2>
			</div>
		</div>
	)
}

export default Modal
