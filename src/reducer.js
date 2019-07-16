import { 
	MAKE_DEPOSIT,
	GET_ACCOUNT_START,
	GET_ACCOUNT_SUCCESS,
	GET_ACCOUNT_FAILED,
 } from './actions'

const initialState = {
	isLoading: false,
	errorMessage: null,
	checking: 200,
	savings: 200,
	accountActivity: [],
}

export default function(state = initialState, action) {
	switch (action.type) {
		case MAKE_DEPOSIT: {
			const { amount, account, description } = action.payload
			const newAmount = parseInt(amount) + state[account]
			// const newActivity = state.accountActivity.concat([description])

			return {
				...state,
				[account]: newAmount,
				accountActivity: [...state.accountActivity, (`$${amount} for ${description}`)],
			}
		}
		case GET_ACCOUNT_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case GET_ACCOUNT_SUCCESS: {
			const newData = action.payload
			return {
				...state,
				isLoading: false,
				checking: newData.checking,
				savings: newData.savings,
				accountActivity: newData.accountActivity,
			}
		}
		case GET_ACCOUNT_FAILED: {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload.message,
			}
		}
		default:
			return state
	}
}