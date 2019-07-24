import * as constants from './constants'
import { fromJS } from 'immutable'

const defauletState = fromJS({
    focused: false,
    mouseIn: false,
    List: [], // 热搜列表
    page: 1,
    totalPage: 1
});

export default (state = defauletState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true)
        case constants.SEARCH_BLUR:
            return state.set('focused', false)
        case constants.CHANGE_LIST:
            return state.merge({ // 同时改变多向数据
                List: action.data,
                totalPage: action.totalPage
            })
            // .set('List', action.data)
            // .set('totalPage', action.totalPage)
        case constants.MOUSE_ENTERS:
            return state
            .set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state
            .set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state
            .set('page', action.page)
        default: return state;
    }
    // if(action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
        // return state.set('focused', true)
        // {
        //     focused: true
        // }
    // }
    // if(action.type === constants.SEARCH_BLUR) {
        // return state.set('focused', false)
        // {
        //     focused: false
        // }
    // }
    // if(action.type === constants.CHANGE_LIST) { // 派发出来的请求数据
        // return state.set('List', action.data)
    // }
    // return state;
}