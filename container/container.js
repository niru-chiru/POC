import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UserComponent from '../components/userComponent';
import {GetUserDetails} from '../actions/userAction'



class UserContainer extends Component{

    onHandleGetUser(e){
    this.props.GetUserDetails();
    }

    render(){
        return(<div>
            <UserComponent onHandleGetUser = {this.onHandleGetUser.bind(this)}
            data={this.props.userDetails} error={this.props.errorObj} />
        </div>);
    }
}

let  mapStateToProps = (state) => {
    return{
        userDetails: (state.userReducer) ? state.userReducer.userDetails : null,
        errorObj: (state.errorReducer) ? state.errorReducer.error : null
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({GetUserDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (UserContainer);
