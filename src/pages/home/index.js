import React, { PureComponent } from 'react';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
 } from './style';
 import List from './components/List';
 import Recommen from './components/Recommen';
 import axios from 'axios';
 import { connect } from 'react-redux'

class Home extends PureComponent {
    handleBackTop() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommen></Recommen>
                </HomeRight>
                {
                    this.props.scrollTopShow ? 
                    <BackTop onClick={this.handleBackTop.bind(this)}>回到顶部</BackTop> : ''
                }
                
            </HomeWrapper>      
        )
    }

    componentDidMount() {
        this.props.changDispatch()
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScroll)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScroll)
    }
}

const mapState = (state) => ({
    scrollTopShow: state.getIn(['home', 'scrollTopShow'])
})

const mapDispatch = (dispatch) => ({
    changDispatch() {
        axios.get('/api/home.json').then((res) =>{
            const action = {
                type: 'chang_home_data',
                articleList: res.data.data.articleList,
                recommList:res.data.data.recommList
            }
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        }) 
    },
    changeScroll() {
        const action = {
            type: 'show_top',
            blo: false
        }
        if (document.documentElement.scrollTop > 400) {
            action.blo = true
        } else {
            action.blo = false
        }
        dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(Home);