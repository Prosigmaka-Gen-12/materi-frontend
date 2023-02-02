const initialState = {
	name: 'Abid',
	age: 17
}

function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'user/change_name':
			return { ...state, name: action.payload }
		case 'user/change_age':
			return { ...state, age: action.payload }
		case 'user/reset':
			return { ...initialState }
		default:
			return state
	}
}

export default userReducer