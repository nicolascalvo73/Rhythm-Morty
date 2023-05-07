export default function SearchBar({ onSearch }) {
	return (
		<div>
			<input type="search" />
			<button
				onClick={(key) => {
					onSearch(key)
				}}>
				Agregar
			</button>
		</div>
	)
}
