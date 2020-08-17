import React from 'react'
import classNames from 'classnames'
import '../assets/styles/components/Search.scss'

import { connect } from 'react-redux'
import { searchChange, setSearchText } from '../actions'

const Search = ({
	isHome,
	setSearchText,
	searchChange,
	searchText,
	trends,
	originals,
}) => {
	const inputStyle = classNames('input', {
		isHome,
	})

	const handleChange = (e) => {
		const texto = e.target.value
		setSearchText(texto)

		const search = trends.concat(originals).filter((item) => {
			return `${item.title}`.toLowerCase().includes(texto.toLowerCase())
		})

		searchChange(search)
	}

	return (
		<section className="main">
			<h2 className="main__title">¿Qué quieres ver hoy?</h2>
			<input
				onChange={handleChange}
				type="text"
				value={searchText}
				className={inputStyle}
				placeholder="Buscar..."
			/>
		</section>
	)
}

const mapStateToProps = (state) => {
	return {
		searchText: state.searchText,
		trends: state.trends,
		originals: state.originals,
	}
}

const mapDispatchToProps = {
	searchChange,
	setSearchText,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
