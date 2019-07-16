import axios from 'axios'

// action type
export const MAKE_DEPOSIT = 'MAKE_DEPOSIT'

// loading out state
export const GET_ACCOUNT_START = 'GET_ACCOUNT_START'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILED = 'GET_ACCOUNT_FAILED'

// action creator
export function makeDeposit(amount, account, description) {
	// action
	return {
		type: MAKE_DEPOSIT,
		payload: {
			amount,
			account,
			description,
		}
	}
}

export function getAccount() {
	return (dispatch) => {
		dispatch({ type: GET_ACCOUNT_START })
		axios.get('http://localhost:8080/')
			.then((res) => {
				console.log(res.data)
				dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_ACCOUNT_FAILED, payload: err.response.data })
			})
	}
}