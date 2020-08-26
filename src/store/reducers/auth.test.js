import reducer from './auth'
import * as actions from '../actions/actionTypes'

describe('Auth Reducer', () => {
    it('Should Return The Initial State', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: '/'

        })
    })

    it('Should Store Token Upon Login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: '/'
        },{   
            type: actions.AUTH_SUCCESS,
            idToken: 'SomeToken',
            userId: 'SomeUserId'  
        })).toEqual({
            token: 'SomeToken',
            userId: 'SomeUserId',
            error: null,
            loading: false,
            authRedirectPath: '/'

        })
    })

})