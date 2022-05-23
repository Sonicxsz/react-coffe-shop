import {ReactComponent as Logo} from '../firstPage/sectionOne/logo.svg'
import {ReactComponent as MainLogo} from './mainLogo.svg'

import './footer.scss'
function Footer() {
  return (
    <div className='footer_wrapp'>
        <ul className='footer_list'>
            <li className='footer_main_logo'><MainLogo/></li>
            <li><a href="#">Coffee house</a></li>
            <li><a href="#">Our coffee</a></li>
            <li><a href="#">For your pleasure</a></li>
        </ul>
    <div className='logo_fot_wrap'><Logo fill='black' stroke='black'/></div>
    </div>
    
  )
}

export default Footer