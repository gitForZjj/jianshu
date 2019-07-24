import { fromJS } from 'immutable';

const defaultState = fromJS({
    articleList: [],
    recommList: [],
    scrollTopShow: false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'chang_home_data':
           return state.merge({
                articleList: fromJS(action.articleList),
                recommList: fromJS(action.recommList)
            })
        case 'more_list':
            return state.set('articleList', state.get('articleList').concat(action.moreList))
        case 'show_top': 
            return state.set('scrollTopShow', action.blo)
        default:
            return state;
    }
}