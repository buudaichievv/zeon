import React,{useState} from 'react'
import './css/Header.css'
import logo from '../../img/logo.png'
import basket from '../../img/basket.png'
import liked from '../../img/liked.png'
import search from '../..//img/search.png'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    
  return (
      <header>
          <div className="container">
            <div className='HeaderUp burger'>
              <nav>
                  <ul>
                      <li><NavLink to = '/about'>О нас</NavLink></li>
                      <li><NavLink to = '/collection'>Коллекции</NavLink></li>
                      <li><NavLink to = '/news'>Новости</NavLink></li>
                  </ul>
                  <ul>
                      <li><p>тел: </p><a href='tel:+996 999 00 00 00'>+996 999 00 00 00</a></li>
                  </ul>
                </nav>
              </div>
              <div className="HeaderDown">
                    <NavLink to='/'><img src={logo} alt="Logo" className='logo' /></NavLink>
                      <form>
                        <input type="text" placeholder="Искать здесь..." className="Search"/>
                        <button type="submit" className='header_search_btn'><img src={search} alt="" /></button>
                      </form>
                      
                    <div className="liked" data-number='1'><img src={liked} alt="liked" className='likedIcon'/><p>избранное</p></div>
                    <div className="basket" data-number='1'><img src={basket} alt="basket" className='basketIcon'/><p>корзина</p></div>  
              </div>
        
              </div>
    </header>
  )
}
