import React from 'react'
import pay from '../../img/money.png'
import track from '../../img/track.png'
import sup from '../../img/sum.png'
import shop from '../../img/shop.png'
import './css/Premium.css'
export default function Premium() {
  return (
    <div>
      <div className="premium_wrapper">
        <div className="premium_block">
          <img src={pay} alt="" />
          <p>Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
        <div className="premium_block">
          <img src={track} alt="" />
          <p>Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
        <div className="premium_block">
          <img src={sup} className="sup" alt="" />
          <p>Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
        <div className="premium_block">
          <img src={shop} alt="" />
          <p>Удобные способы оплаты</p>
          <p className="premiumText">Мы предлагаем возможность безналичной оплаты</p>
        </div>
      </div>
    </div>
  )
}
