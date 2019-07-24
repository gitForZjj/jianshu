import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: 620px;
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 100px;
`

export const Header = styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: bold;
`
export const Author = styled.div`
    margin: 30px 0 40px;
    .authImg{
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .authInfo{
        vertical-align: middle;
        display: inline-block;
        margin-left: 8px;
        .authName{
            margin-right: 3px;
            font-size: 16px;
            vertical-align: middle;
            color: #333;
        }
        .focusAuth{
            padding: 0 7px 0 5px;
            font-size: 12px;
            border-color: #42c02e;
            border-radius: 40px;
            color: #fff;
            background-color: #42c02e;
        }
    }
    .authMeta{
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
    }
`

export const AuthText = styled.div`
`
export const AuthPraise = styled.div`
    min-height: 144px;
    padding: 20px 0;
    text-align: center;
    clear: both;
    .praTitle{
        padding: 0 30px;
        margin-bottom: 20px;
        min-height: 24px;
        font-size: 17px;
        font-weight: 700;
        color: #969696;
    }
    .btnPra{
        margin-bottom: 20px;
        padding: 8px 25px;
        font-size: 16px;
        color: #fff;
        background-color: #ea6f5a;
        border-radius: 20px;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        line-height: 1.42857;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`
export const AuthFoot = styled.div`
    margin-bottom: 30px;
    font-size: 12px;
    color: #c8c8c8;
    .suibi{
        float: left;
    }
    .copyRight{
        float: right;
        margin-top: 5px;
        font-size: 12px;
        line-height: 1.7;
        color: #c8c8c8;
    }
    .report{
        float: right;
        margin-top: 5px;
        margin-right: 20px;
        font-size: 12px;
        line-height: 1.7;
    }
`

export const FollowDetail = styled.div`
    padding: 20px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;
    .info{
        min-height: 47px;
    }
    .signature{
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e1e1e1;
        color: #969696;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .infoImg{
        float: left;
        margin-right: 10px;
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .infoFos{
        float: right;
        margin-top: 4px;
        padding: 8px 0;
        width: 100px;
        font-size: 16px;
        border-color: #42c02e;
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
        display: inline-block;
        margin-bottom: 0;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        user-select: none;
    }
    .infoName{
        margin-right: 3px;
        font-size: 17px;
        line-height: 1.8;
        vertical-align: middle;
        color: #333;
    }
    .infoText{
        font-size: 12px;
        margin-bottom: 0;
        color: #969696;
    }
`
export const MateBottom = styled.div`
    margin-top: 40px;
    margin-bottom: 80px;
    .like{
        display: inline-block;
        .like-group{
            position: relative;
            padding: 13px 0 15px 0;
            font-size: 0;
            border: 1px solid #EA6F5A;
            border-radius: 40px;
            display: inline-block;
            margin-bottom: 0;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            background-image: none;
            white-space: nowrap;
            line-height: 1.42857;
            user-select: none;
            .btn-like{
                display: inline-block;
                font-size: 19px;
                span{
                    position: relative;
                    padding: 18px 30px 18px 55px;
                    color: #EA6F5A;
                }
            }
            .btn-like::before{
                content: '';
                position: absolute;
                left: 12px;
                top: 2px;
                width: 50px;
                height: 50px;
                background-image: url(//cdn2.jianshu.io/assets/web/like_animation_steps-62a00a7….png);
                background-position: left;
                background-repeat: no-repeat;
                background-size: 1000px 50px;
            }
            .modal-wrap{
                font-size: 18px;
                border-left: 1px solid rgba(236, 97, 73, 0.4);
                display: inline-block;
                margin-left: -15px;
                span{
                    color: #EA6F5A;
                    padding: 18px 26px 18px 18px;
                }
            }
        }
    }
    .share-group{
        float: right;
        margin-top: 6px;
        .share-circle{
            width: 40px;
            height: 40px;
            margin-left: 5px;
            text-align: center;
            border: 1px solid #dcdcdc;
            border-radius: 50%;
            vertical-align: middle;
            display: inline-block;
            position: relative;
        }
        .more-share{
            width: auto;
            padding: 4px 18px;
            font-size: 14px;
            color: #9b9b9b;
            line-height: 40px;
            border-radius: 50px;
        }
    }
`