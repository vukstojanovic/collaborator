import counterReducer from "./counterReducer";
const { combineReducers } = require("redux");


const allReducers = combineReducers({
    count: counterReducer
});

export default allReducers;