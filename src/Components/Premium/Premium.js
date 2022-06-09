import React from 'react'
import pay from '../../img/money.png'
import track from '../../img/track.png'
import sup from '../../img/sum.png'
import shop from '../../img/shop.png'
import './css/Premium.css'
export default function Premium() {
  return (
    <div>
      <h3 id="premium">Наши преимущества</h3>
      <div className="premium_wrapper">
        <div className="premium_block">
          <img src={pay} alt="" />
          <p className="premiumTextP">Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
        <div className="premium_block">
          <img src={track} alt="" />
          <p className="premiumTextP">Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
        <div className="premium_block">
          <img src={sup} className="sup" alt="" />
          <p className="premiumTextP">Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
        <div className="premium_block">
          <img src={shop} alt="" />
          <p className="premiumTextP">Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
      </div>
    </div>
  )
}
