import { MAKE_DEPOSIT } from './actions'

const initialState = {
	checking: 200,
	savings: 200,
	accountActivity: [],
}

export default function(state = initialState, action) {
	switch (action.type) {
		case MAKE_DEPOSIT:
			const { amount, account, description } = action.payload
			const newAmount = parseInt(amount) + state[account]
			// const newActivity = state.accountActivity.concat([description])

			return {
				...state,
				[account]: newAmount,
				accountActivity: [...state.accountActivity, (`$${amount} for ${description}`)],
			}
		default:
			return state
	}
}