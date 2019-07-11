import './App.css'
import React from 'react'
import Balances from './Balances'
import Deposit from './Deposit'

class App extends React.Component {
<<<<<<< HEAD
	// makeDeposit = (amount, account) => {
	// 	this.setState({
	// 		[account]: parseInt(amount),
	// 	})
	// }

=======
>>>>>>> 600cb810cc5b907c3da32b4bb56820af1474e13a
	render() {
		return (
			<div className="app">
				<Balances />
<<<<<<< HEAD
				<Deposit makeDeposit={this.makeDeposit} />
=======
				<Deposit />
>>>>>>> 600cb810cc5b907c3da32b4bb56820af1474e13a
			</div>
		)
	}
}

export default App
