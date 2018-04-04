// const { firestore } = require('../fire')
import React from 'react'
import {userSignUp} from '~/firestore/scripts'
import {connect} from 'react-redux'
import {auth} from '../store'

// Add a new document in collection "cities"
const Login = (props) => {
    const {name, displayName, handleSubmit, error} = props

    return (
        <div>
            <form onSubmit={handleSubmit} name={name}>
                <div>
                    <label htmlFor="email"><small>Email</small></label>
                    <input name="email" type="text" />
                </div>
                <div>
                    <label htmlFor="password"><small>Password</small></label>
                    <input name="password" type="password" />
                </div>
                <div>
                    <button type="submit">{displayName}</button>
                </div>
                {error && error.response && <div> {error.response.data} </div>}
            </form>
            <a href="/auth/google">{displayName} with Google</a>
            </div>
        )
}

const mapLogin = (state) => {
    return {
        name: 'login',
        displayName: 'Login',
        error: state.user.error
    }
}

const mapSignup = (state) => {
    return {
        name: 'signup',
        displayName: 'Sign Up',
        error: state.user.error
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleSubmit (evt) {
            evt.preventDefault()
            const formName = evt.target.name
            const email = evt.target.email.value
            const password = evt.target.password.value
            dispatch(auth(email, password, formName))
        }
    }
}

export default Login

/**<h1>Login goes here</h1>
            <button onClick={() => userSignUp({email: 'testing@test.com', username: 'test', password: '123'})}>Click me to test sign up </button> */