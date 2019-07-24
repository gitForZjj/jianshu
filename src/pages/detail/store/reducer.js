import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: '',
    authImg: '',
    authName: '',
    signature: '',
    authContent: ''
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'get_cricle': 
            return state.merge({
                title: action.data.title,
                authImg: action.data.authImg,
                authName: action.data.authName,
                signature: action.data.signature,
                authContent: action.data.authContent
            })
        default: 
            return state
    }
}