import React from 'react'
import './css/Footer.css'
import logoF from '../../img/LogoFooter.png'
export default function Footer() {
  return (
      <footer >
      <div className="container">
        <div className="footer">
        <img src={logoF} alt="Logo" className='logoFooter'/>
        <div className="company">
          <h3>Компания</h3>
            <p>О нас</p>
            <p>Новости</p>
            <p>Помощь</p>
        </div>
        <div className="contact">
          <h3>Контакты</h3>
              <p>+996 500 123 456</p>  
              <p>+996 500 123 456</p>
              <p>mail@gmail.com</p>
        </div>
        <div className="messenger">
          <h3>Наши соц сети </h3>
               <p>instagram</p>
               <p>telegram</p>
               <p>whatsapp</p>
        </div>
        </div>
        </div>
    </footer>
  )
}
