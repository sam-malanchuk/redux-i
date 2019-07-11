import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducer'

<<<<<<< HEAD
const store = createStore(reducer);
=======
const store = createStore(reducer)
>>>>>>> 600cb810cc5b907c3da32b4bb56820af1474e13a

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
