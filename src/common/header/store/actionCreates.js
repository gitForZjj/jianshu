// 创建派发用的action，用于在dispatch中派发

import * as constants from './constants'
import axios from 'axios';
import { fromJS } from 'immutable'
export const searchFocus = () => ({
type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getList = () => { // 发送请求数据
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res)=>{
            console.log(res)
            dispatch(changeList(res.data.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const handleMouseEnter = () => ({
    type: constants.MOUSE_ENTERS
})
export const handleMouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})
export const handleChangePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})