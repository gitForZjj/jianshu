import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { 
    HeaderWrapper, 
    Logo, 
    Nav,
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSweach,
    SearchInfoItem,
    SearchInfoList
} from './style'

class Header extends Component{

    getListArea = () => {
        const { List, focused, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props
        const newList = List.toJS();
        const pageList = [];

        if (newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return(
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSweach onClick={() => handleChangePage(page, totalPage, this.iconfont)}>
                        <i className="iconfont spin" ref={(icon) => {this.iconfont = icon}}>&#xe606;</i>
                            换一批
                        </SearchInfoSweach>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {   
                            pageList
                            // List.map((item) => {
                            //     return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            // })
                        } 
                    </SearchInfoList>
                </SearchInfo>
            )
        }
    }

    render() {
        return(
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className='left reddd'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            {/* CSS动画组件 */}
                            <NavSearch className={this.props.focused ? 'focused' : ''}
                                onFocus={() => this.props.handleFocus(this.props.List)}
                                onBlur={this.props.handleBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe623;
                        </i>
                        {this.getListArea()}
                    </SearchWapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe616;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => { // 获取redux中的数据
    return {
        focused: state.getIn(['header', 'focused']),
        List: state.getIn(['header', 'List']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
        // state.get('header').get('focused')
    }
}

const mapDispathToProps = (dispatch) => { // 把方法放在这里面关联redux，派发action
    return {
        handleFocus(List) {
            if(List.size === 0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.handleMouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.handleMouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, 0)
            if(originAngle <= 0) {
                // originAngle = parseInt(originAngle, 10);
                originAngle = 360;
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + originAngle + 'deg)'
            if(page < totalPage) {
                dispatch(actionCreators.handleChangePage(page + 1))
            } else {
                dispatch(actionCreators.handleChangePage(1))
            }
            
        }
    }
}


// connect 关联redux与header组件
export default connect(mapStateToProps, mapDispathToProps)(Header);