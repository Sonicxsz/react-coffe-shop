import './secSec.scss'
import styled from 'styled-components'
import {ReactComponent as Logo} from '../../firstPage/sectionOne/logo.svg'
import {Title} from '../../firstPage/sectionOne/FirstSection'

function SectSec() {
  return (
   <div>
        <div className='flex_wrap'>
        <div className='img_block'></div>
        <div className='desct_block'>
            <Title color={'black'} size={'24px'}>About our beans</Title> 
            <div className='logo_wrap'><Logo fill='black' stroke='black'/></div>
            <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br/>
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            </p>
        </div>
    </div>
    <div className='underLine'></div>
   </div>
  )
}

export default SectSec