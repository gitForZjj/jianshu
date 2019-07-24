import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecoList, Comma } from '../style'

class Recommen extends PureComponent {
    render() {
        const { list } = this.props

        return(
            <RecoList>
                {
                    list.map((item) => {
                        return(
                            <a key={item.get('id')} href='/'>
                                <img className='comImg' src={item.get('img')} alt=""/>
                            </a> 
                        )
                    })
                }
                <Comma href="/">
                    <img className='commImg' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    <div className='info'>
                        <div className='title'>
                            下载简书手机App
                        </div>
                        <div className='description'>
                            随时随地发现和创作内容
                        </div>
                    </div>
                </Comma>
            </RecoList>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommList'])
})

export default connect(mapState, null)(Recommen);