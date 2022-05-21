import React from 'react'
import './secTwo.scss'
import {ReactComponent as Logo} from '../sectionOne/logo.svg'
import styled from 'styled-components'

const Descript = styled.div`
    display: block;
    width: 590px;
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #000000;
    margin: 0 auto;
    margin-bottom: ${props => props.marginB};
`


function SectionTwo() {
  return (
    <div className='wrapper'>
    <div className='logo_title'>About Us</div>
    <div className='secIcon'> <Logo fill='black' stroke='black'/></div>
    <Descript marginB={'25px'}>
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.
    </Descript>
    <Descript marginB={'100px'}>
    Now residence dashwoods she excellent you. Shade being under his bed her, Much
    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
    horrible but confined day end marriage. Eagerness furniture set preserved far
    recommend. Did even but nor are most gave hope. Secure active living depend son
    repair day ladies now.
    </Descript>
    </div>
  )
}

export default SectionTwo