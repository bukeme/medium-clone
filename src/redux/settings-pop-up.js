import {createSlice} from '@reduxjs/toolkit';


const initialState = {
	popUpNumber: 0
}


const popUpSlice = createSlice({
	name: 'popUpNumber',
	initialState,
	reducers: {
		setPopUpNumber: (state, action) => {
			state.popUpNumber = action.payload
		}
	}
})

export const {setPopUpNumber} = popUpSlice.actions;
export default popUpSlice.reducer;