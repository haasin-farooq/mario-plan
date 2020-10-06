const INITIAL_STATE = {
    authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('Login Error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('Signout Error');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup Error');
            return {
                ...state,
                authError: action.payload.message
            }
        default:
            return state;
    }
}

export default authReducer;