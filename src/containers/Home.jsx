import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/App.scss'
import Header from '../components/Header'

import { connect } from 'react-redux'

const Home = ({ mylist, trends, originals, search, searchText }) => {
	useEffect(() => {
		console.log(search)
	}, [search])
	return (
		<>
			<Header />
			<Search isHome />
			{!searchText && (
				<>
					{mylist.length > 0 && (
						<Categories title="Mi Lista">
							<Carousel>
								{mylist.map((item) => (
									<CarouselItem isList key={item.id} {...item} />
								))}
							</Carousel>
						</Categories>
					)}
					<Categories title="Tendencias">
						<Carousel>
							{trends.map((item) => (
								<CarouselItem key={item.id} {...item} />
							))}
						</Carousel>
					</Categories>
					<Categories title="Originales de Platzi Video">
						<Carousel>
							{originals.map((item) => (
								<CarouselItem key={item.id} {...item} />
							))}
						</Carousel>
					</Categories>
				</>
			)}
			{!search.length && searchText && (
				<h1>{`No se encontro resultados para: ${searchText}`}</h1>
			)}
			{search.length && searchText && (
				<Categories title={`resultados para: ${searchText}`}>
					<Carousel>
						{search.map((item) => (
							<CarouselItem isList key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		mylist: state.mylist,
		trends: state.trends,
		originals: state.originals,
		search: state.search,
		searchText: state.searchText,
	}
}

export default connect(mapStateToProps, null)(Home)
