import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	title: 'Deserunt ea exercitation nostrud excepteur consectetur proident do et in veniam qui adipisicing commodo.',
	body: 'Sint cillum anim non laborum ullamco esse ad culpa ipsum eu do et sunt non. Nulla magna et labore cupidatat aliqua ad laborum nostrud laboris proident. Cupidatat culpa est ut ipsum labore id ullamco. Adipisicing incididunt ipsum esse mollit nulla duis ea minim. Cillum ipsum enim excepteur in id commodo consequat duis excepteur dolore culpa exercitation pariatur.',
	author: 'Bambang Nasheer',
	publish_date: '2022-03-02',
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		change_title: (state, action) => {
			state.title = action.payload
		},
		change_body_and_author: (state, action) => {
			state.body = action.payload.body
			state.author = action.payload.author
		},
		reset_value: (state, action) => {
			return { ...initialState }
		}
	}
})

export const { change_title, change_body_and_author, reset_value } = articleSlice.actions
export default articleSlice.reducer
