import React, { Component } from 'react'
import {signOut} from '../../actions/actionCreators';
import {connect} from 'react-redux';

class SignOut extends Component {
    componentDidMount(){
        this.props.signOut();
    }

    render() {
        return (
            <div>
                successfully signed out
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(null, mapDispatchToProps)(SignOut);
