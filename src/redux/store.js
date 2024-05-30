import {configureStore} from '@reduxjs/toolkit';
import settingsPopUpReducer from './settings-pop-up.js';


const store = configureStore({
	reducer: {
		settingsPopUp: settingsPopUpReducer
	}
});

export default store;