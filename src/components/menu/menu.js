import { NavLink } from 'react-router-dom'
import './menu.scss'

function Menu() {
  return (
    <div className="menu">
        <div className="menu_logo"><img src = {require('./img/Group.png')} alt="logo" /></div>
        <ul className="men__ul">
            <li>
              <NavLink to='/' className='nav'>Coffee house</NavLink>
            </li>
            <li>
              <NavLink to='/secondPage' className='nav'>Our coffee</NavLink>
              </li>
            <li>
              <NavLink to="/lastPage" className='nav'>For your pleasure</NavLink>
              </li>
        </ul>
    </div>
  )
}

export default Menu