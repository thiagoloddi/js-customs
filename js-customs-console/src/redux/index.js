import { combineReducers } from 'redux';

import themeReducer from './reducers/theme.reducer';

export default combineReducers({
  theme: themeReducer
});