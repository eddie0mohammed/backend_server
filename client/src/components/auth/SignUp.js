import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import {compose } from 'redux';
import {withRouter} from 'react-router-dom';

class SignUp extends Component {

    onSubmit = (formProps) => {
        this.props.signUp(formProps, () => {
            this.props.history.push('/feature');
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field name="email" type="text" component="input" autoComplete="off"/>
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field name="password" type="password" component="input" autoComplete="off"/>
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign Up!</button>

                
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (formProps, callback) => dispatch(actionCreators.signUp(formProps, callback)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'signUp'}),
    withRouter


)(SignUp);