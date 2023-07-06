import { Icon } from 'react-icons-kit';
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart';
import {menu} from 'react-icons-kit/feather/menu';
import { useState } from 'react';
import {x} from 'react-icons-kit/feather/x';

const Header = () => {
const [showLink, setShowLink] = useState(false);

  return (
    <nav>
      <div className='container'>
        <div className='nav-logo'>
          <img src='../../assets/images/blank.png' alt="" /> 
            <button className='nav-toggle' onClick={()=> setShowLink(!showLink)}>

              { showLink ? <Icon icon={x} /> : <Icon icon={menu}/> }
            </button>
        </div>
        <div className= {`${ showLink ? 'nav-links active' : 'nav-links'}`}>
          <ul className='list'>
            <li><a href= "/">خانه</a></li>
            <li><a href= "/products">محصولات</a></li>
            <li><a href= "/aboutus">درباره ما</a></li>
            <li><a href= "/contactus">تماس با ما</a></li>
            <li><a href= "/login">ثبت نام/ورود</a></li>
          </ul>
        </div>
        <div className="cart-icon">
          <span>3</span>
          <a href="/"><Icon icon={shoppingCart}/></a>
        </div>
      </div>
    </nav>
  )
}

export default Header;
