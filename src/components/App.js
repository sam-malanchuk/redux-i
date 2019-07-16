import './App.css'
import React from 'react'
import { connect } from 'react-redux'
import Balances from './Balances'
import Deposit from './Deposit'
import { getAccount } from '../actions'

class App extends React.Component {
	componentDidMount() {
		this.props.getAccount()
	}
	render() {
		return (
			<div className="app">
				<Balances />
				<Deposit />
			</div>
		)
	}
}

const mapDispatchToProps = {
	getAccount,
}

export default connect(null, mapDispatchToProps)(App)