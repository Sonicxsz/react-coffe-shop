import styled from 'styled-components';
import './card.scss'
const CardBox = styled.div`
    width: 240px;
    height: 240px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    margin-right: 70px;
    padding-top:22px;
`
const ImgWrap = styled.div`
    display: block;
    width: 151px;
    height: 140px;
    margin: 0 auto;
    margin-bottom: 10px;
    overflow: hidden;
    img{
        width:100%
    }
`



function Card(props) {
  return (
    <CardBox>
        <ImgWrap>
        <img src={props.img}></img>
        </ImgWrap>
        <p className='good_descr'>{props.descr}</p>
        <span>{props.price}</span>
    </CardBox>
  )
}

export default Card