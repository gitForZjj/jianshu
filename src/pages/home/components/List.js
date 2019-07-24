import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore  } from '../style';
import { connect } from 'react-redux';
import { fromJS } from 'immutable'
import axios from 'axios';
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        const {list, getMoreList} = this.props;

        return (
            <div>
                {
                    list.map((item,index) => {
                        return (
                            <Link key={index} to='/detail'>
                                <ListItem >
                                    <img className='listPic' src={item.get('img')} alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='text'>{item.get('text')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                } 
                <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch) => ({
    getMoreList() {
        axios.get('/api/homeList.json').then((res) => {
            const action = {
                type: 'more_list',
                moreList: fromJS(res.data.data.moreList)
            }
            dispatch(action)
        }).catch((err) => {
            console.log(err)
        })
        
    }
})


export default connect(mapState, mapDispatch)(List);