import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { connect } from 'react-redux'
import { logoutRequest } from '../actions'

const Header = (props) => {
	const { user, isLogin, isRegister } = props
	const hashUser = Object.keys(user).length > 0

	const handleLogOut = () => {
		props.logoutRequest({})
	}

	const headerClass = classNames('header', {
		isLogin,
		isRegister,
	})

	return (
		<header className={headerClass}>
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{hashUser ? (
						<img src={gravatar(user.email)} alt="" />
					) : (
						<img src={userIcon} alt="" />
					)}
					<p>Perfil</p>
				</div>
				<ul>
					{hashUser && (
						<li>
							<a href="/">{user.name}</a>
						</li>
					)}
					{hashUser ? (
						<li>
							<a href="#logout" onClick={handleLogOut}>
								Cerrar Sesión
							</a>
						</li>
					) : (
						<li>
							<Link to="/login">Iniciar Sesión</Link>
						</li>
					)}
				</ul>
			</div>
		</header>
	)
}

Header.propTypes = {
	user: PropTypes.object,
}

const mapStateToProps = (state) => {
	return { user: state.user }
}

const mapDispatchToProps = {
	logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
