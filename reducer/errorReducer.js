import {APP_CONSTANTS} from '../constants/appConstants';

export default function errorReducer(state=null, action){
    switch(action.type){

        case APP_CONSTANTS.ERROR:
            return  Object.assign({}, state, {error: action.errorMessage});
    
        default:
        return state;
    }
    return state;
}