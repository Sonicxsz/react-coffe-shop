import React from 'react'
import styled from 'styled-components'

const GoodCard = styled.div`
    padding-top: 37px;
    padding-right: 26px;
    width: 220px;
    height: 260px;
    background: #FFFFFF;
    border-radius: 8px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
    margin: 60px 70px 0 0;
    cursor: pointer;
    
    p{
        display: block;
        font-family: 'Merienda';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: end;
        color: #000000;
    };

    span{
        display: block;
        font-family: 'Merienda';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        text-align: end;
        color: #000000;
    }
`
const ImgWrap = styled.div`
    width: 167px;
    height: 115px;
    margin-bottom: 14px
    display: block;
    overflow:hidden;
    text-align: center;
    img{
        width: 80%;
    }
`
function Cards(props) {
  return (
    <GoodCard>
        <ImgWrap>
        <img src={props.img} alt="coffe" />
        </ImgWrap>
        <p>{props.title}</p>
        <p>{props.country}</p>
        <span>{props.price}</span>
    </GoodCard>
  )
}

export default Cards