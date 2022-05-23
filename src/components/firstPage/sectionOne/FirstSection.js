import React from 'react'
import Collapse from '../collapse/Collapse'
import styled from 'styled-components'
import Menu from '../../menu/menu'
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
    color: ${props => props.color};
`
function FirstSection() {

  return (
    <div className='wrapperHome'>
    <Menu/>
    <Title color={'#FFFFFF'} size={'45px'} mt={'90px'}>Everything You Love About Coffee</Title>
    <div className='firstPageLogo'> <Logo fill='white' stroke='white' width='340px'/></div>
    <Title color={'#FFFFFF'} size={'28px'} mt={'30px'}>We makes every day full of energy and taste</Title>
    <Title color={'#FFFFFF'} size={'26px'} mt={'20px'}>Want to try our beans?</Title>
    <Collapse/>
</div>
  )
}

export default FirstSection

export {Title}