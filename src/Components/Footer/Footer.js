import React from 'react'
import './css/Footer.css'
import logoF from '../../img/LogoFooter.png'
import { NavLink } from 'react-router-dom'
import icon from '../../img/icon.png'
import instagram from '../../img/instagram_icon.png'
import telegram from '../../img/telegram_icon.png'
import mail from '../../img/mail_icon.png'
import whatsapp from '../../img/whatsapp_icon.png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Footer() {
  const [footerInfo,setFooterInfo] = useState({})
  useEffect(() => {
     axios.get(`http://localhost:3005/footer`)
       .then(({ data }) => setFooterInfo(data))
  },[])
  return (
      <footer >
      <div className="container">
        <div className="footer">
          <div className="logo footer_block">
            <NavLink to='/'><img src={logoF} alt="Logo" className='logoFooter' /></NavLink>
          </div>
        <div className="company footer_block">
          <h3>Компания</h3>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/news'>Новости</NavLink>
            <NavLink to='/support'>Помощь</NavLink>
        </div>
        <div className="contact footer_block">
          <h3>Контакты</h3>
                  <div className="footer_block_value">
                    <img src={icon} alt="" />
                    <p className='contactNumber'><a href='tel:+996 999 00 00 00'>{footerInfo?.contact?.number}</a></p>
            </div>
              <div className="footer_block_value">
                    <img src={icon} alt="" />
                    <p className='contactNumber'><a href='tel:+996 999 00 00 00'>{footerInfo?.contact?.number}</a></p>
            </div>
            <div className="footer_block_value">
                    <img src={icon} alt="" />
                    <p><a href="https://mail.google.com/">{footerInfo?.contact?.email}</a></p>
            </div>
        </div>
        <div className="messenger footer_block">
            <h3>Наши соц сети </h3>
            <div className="footer_block_value">
              <img src={instagram} alt="" />
               <a href='https://www.instagram.com/'>{footerInfo?.messenger?.instagram}</a>
              </div>
            <div className="footer_block_value">
              <img src={whatsapp} alt="" />
               <a href='https://www.whatsapp.com/'>{footerInfo?.messenger?.whatsapp}</a>
              </div>
            <div className="footer_block_value">
              <img src={telegram} alt="" />
                <a href='https://web.telegram.org/z/'>{footerInfo?.messenger?.telegram}</a>
              </div>

        </div>
        </div>
        </div>
    </footer>
  )
}
