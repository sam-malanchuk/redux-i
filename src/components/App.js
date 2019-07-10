import './App.css'
import React from 'react'
import Balances from './Balances'
import Deposit from './Deposit'

class App extends React.Component {
	// makeDeposit = (amount, account) => {
	// 	this.setState({
	// 		[account]: parseInt(amount),
	// 	})
	// }

	render() {
		return (
			<div className="app">
				<Balances />
				<Deposit makeDeposit={this.makeDeposit} />
			</div>
		)
	}
}

export default App
