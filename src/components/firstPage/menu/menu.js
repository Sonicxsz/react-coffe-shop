import './menu.scss'

function Menu() {
  return (
    <div className="menu">
        <div className="menu_logo"><img src = {require('./img/Group.png')} alt="logo" /></div>
        <ul className="men__ul">
            <li><a href="">Coffee house</a></li>
            <li><a href="">Our coffee</a></li>
            <li><a href="">For your pleasure</a></li>
        </ul>
    </div>
  )
}

export default Menu