import React,{useState} from 'react'
import './css/Header.css'
import logo from '../../img/logo.png'
import basket from '../../img/basket.png'
import liked from '../../img/liked.png'

export default function Header() {
    const [Search,UseSearch] = useState('Search')
 
    
  return (
      <header>
          <div className="container">
            <div className='HeaderUp burger'>
              <nav>
                  <ul>
                      <li>О нас</li>
                      <li>Коллекции</li>
                      <li>Новости</li>
                  </ul>
                  <ul>
                      <li><p>тел: </p>+996 999 00 00 00</li>
                  </ul>
                </nav>
              </div>
              <div className="HeaderDown">
                    <img src={logo} alt="Logo" className='logo' />
                     <div class="d3">
                      <form>
                        <input type="text" placeholder="Искать здесь..." className={Search}/>
                        <button type="submit"></button>
                      </form>
                      </div>
                    <div className="liked"><img src={liked} alt="liked"/><p>избранное</p></div>
                    <div className="basket"><img src={basket} alt="basket"/><p>корзина</p></div>  
              </div>
            </div>
    </header>
  )
}
