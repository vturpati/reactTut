import {combineReducers} from 'redux';

//default params
function results(state=[],action){
    if(action.type === "result"){ 
        return action.payload.data.items;
    }

    return state;
}

var reducers =combineReducers({results : results});
export default reducers;