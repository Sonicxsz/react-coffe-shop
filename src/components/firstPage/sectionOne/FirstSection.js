import React from 'react'
import styled from 'styled-components'
import Menu from '../menu/menu'
import './firstSection.scss'
import {ReactComponent as Logo} from './logo.svg'



const Title = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.mt};
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.size};
    color: #FFFFFF;
`
function FirstSection() {

  return (
    <div className='wrapperHome'>
    <Menu/>
    <Title size={'45px'} mt={'110px'}>Everything You Love About Coffee</Title>
    <div className='firstPageLogo'> <Logo fill='white' stroke='white' width='340px'/></div>
    <Title size={'28px'} mt={'35px'}>We makes every day full of energy and taste</Title>
    <Title size={'26px'} mt={'20px'}>Want to try our beans?</Title>
    <div className='ffe2'>
    <button>More</button>
    </div>
</div>
  )
}

export default FirstSection