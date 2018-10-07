import axios from 'axios';
import {APP_CONSTANTS} from '../constants/appConstants';

export function GetUserDetails(){
    const getUserDetails = axios({
        method: 'get',
        //url: 'https://raw.githubusercontent.com/naikpavan56/JsonData/master/EmployeeData'
        url: 'https://jsonplaceholder.typicode.com/users'
    });

    return(dispatch) => {
        return getUserDetails.then(({ data }) => {
            dispatch({type: APP_CONSTANTS.GET_DETAILS, payload: data});
        }).catch(error => {
            dispatch({type: APP_CONSTANTS.ERROR , errorMessage: error});
            //console.log(error);
        });
    }
}
