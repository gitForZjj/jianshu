import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { 
    DetailWrapper,
    Header,
    Author,
    AuthText,
    AuthPraise,
    AuthFoot,
    FollowDetail,
    MateBottom
} from './style';

class Detail extends Component {

    render() {

        const { 
            title,
            authImg,
            authName,
            signature,
            authContent
         } = this.props

        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Author>
                    <img className='authImg' src={authImg} alt=""/>
                    <div className='authInfo'>
                        <p>
                            <span className='authName'>{authName}</span>
                            <span className='focusAuth'>＋关注</span>
                        </p>
                        <p className='authMeta'>
                            2019.03.20 18:22 字数 920 阅读 2591评论 5喜欢 51
                        </p>
                    </div>
                </Author>
                <AuthText dangerouslySetInnerHTML={{__html: authContent}}></AuthText>
                <AuthPraise>
                    <p className='praTitle'>您的支持和鼓励是我前进的动力</p>
                    <div className='btnPra'>赞赏支持</div>
                </AuthPraise>
                <AuthFoot>
                    <span className='suibi'>随笔</span>
                    <div className='copyRight'>            
                         © 著作权归作者所有
                    </div>
                    <div className='report'>
                        举报文章
                    </div>
                </AuthFoot>
                <FollowDetail>
                    <div className='info'>
                        <img className='infoImg' src={authImg} alt=""/>
                        <span className='infoFos'>＋关注</span>
                        <span className='infoName'>{authName}</span>
                        <p className='infoText'>写了 645899 字，被 2202 人关注，获得了 14932 个喜欢</p>
                    </div>
                    <div className='signature'>{signature}</div>
                </FollowDetail>
                <MateBottom>
                    <div className='like'>
                        <div className='like-group'>
                            <div className='btn-like'>
                                <span>喜欢</span>
                            </div>
                            <div className='modal-wrap'>
                                <span>51</span>
                            </div>
                        </div>
                    </div>
                    <div className='share-group'>
                        <span className='share-circle weixin'></span>
                        <span className='share-circle weibo'></span>
                        <span className='share-circle share-img'></span>
                        <span className='share-circle more-share'>更多分享</span>
                    </div>
                </MateBottom>
            </DetailWrapper>      
        )
    }
    componentDidMount() {
        this.props.getCircle()
    }
}


const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    authImg: state.getIn(['detail', 'authImg']),
    authName: state.getIn(['detail', 'authName']),
    signature: state.getIn(['detail', 'signature']),
    authContent: state.getIn(['detail', 'authContent'])
})

const mapDispatch = (dispatch) => ({
    getCircle() {
        axios.get('/api/detail.json').then((res) => {
            const action = {
                type: 'get_cricle',
                data: res.data.data
            }
            dispatch(action)
        }).catch((err) =>{
            console.log(err)
        })
    }
})

export default connect(mapState, mapDispatch)(Detail);