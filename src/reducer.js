<<<<<<< HEAD
import { MAKE_DEPOSIT } from "./actions";

const initialState = {
	checking: 20,
	savings: 50,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MAKE_DEPOSIT:
            const { amount, account } = action.payload
            const newAmount = parseInt(amount) + state[account]
            return {
                ...state,
                [account]: newAmount,
            }
        default:
            return state
    }
=======
import { MAKE_DEPOSIT } from './actions'

const initialState = {
	checking: 0,
	savings: 0,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case MAKE_DEPOSIT:
			const { amount, account } = action.payload
			const newAmount = parseInt(amount) + state[account]
			
			return {
				...state,
				[account]: newAmount,
			}
		default:
			return state
	}
>>>>>>> 600cb810cc5b907c3da32b4bb56820af1474e13a
}