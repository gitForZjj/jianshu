import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store' // 拿到组件中的reduce
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers({ // 整合并导出大的reduce
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer