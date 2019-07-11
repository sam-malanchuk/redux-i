<<<<<<< HEAD
//action type
export const MAKE_DEPOSIT = 'MAKE_DEPOSIT'

//action creator
export function makeDeposit(amount, account) {
    return {
        type: MAKE_DEPOSIT,
        payload: {
            amount,
            account
        } 
    }
}

=======
// action type
export const MAKE_DEPOSIT = 'MAKE_DEPOSIT'

// action creator
export function makeDeposit(amount, account) {
	// action
	return {
		type: MAKE_DEPOSIT,
		payload: {
			amount,
			account,
		}
	}
}
>>>>>>> 600cb810cc5b907c3da32b4bb56820af1474e13a
