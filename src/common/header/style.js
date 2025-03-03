import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    height: 58px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`
export const SearchWapper = styled.div`
    position: relative
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused {
            background: #777;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width: 160px;
height: 38px;
margin-top: 9px;
padding: 0 20px 3px 20px;
box-sizing: border-box;
border: none;
outline: none;
border-radius: 19px;
background: #eee;
font-size: 14px;
color: #777;
&::placeholder {
    color: #999;
}
&.focused{
    width: 240px;
    color: #fff;
}
&.slide-enter{
    transition: all .2s ease-out;
}
&.slide-enter-active{
    width: 240px;
}
&.slide-exit{
    transition: all .2s ease-out;
}
&.slide-exit-active{
    width: 160px;
}
`
export const SearchInfo = styled.div`
    position: absolute;
    right: 0;
    top: 50px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color:#969696;
`
export const SearchInfoSweach = styled.span`
    float: right;
    font-size: 14px;
    cursor: pointer;
    .spin{
        display: block;
        float:left;
        font-size: 12px;
        margin-left: 2px;
        transition: all .5s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;   
    line-height: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`