import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    float: left;
    padding-top: 30px;
    width: 625px;
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .listPic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .text{
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const RecoList = styled.div`
    padding: 30px 0;
    .comImg{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`
export const Comma = styled.a`
    display:block;
    width: 286px;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .commImg{
        width: 60px;
        height: 60px;
        opacity: .85;
    }
    .info{
        width: 143px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
    }
    .title{
        font-size: 15px;
        color: #333;
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: poiner;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 13px;
`