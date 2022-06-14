
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import heartOn from '../../img/heart.png'
import './css/Liked.css'
export default function Liked() {
    
    const { favorite } = useSelector((store) => store)
  return (
      <div className='container'>
          <div className='favorite_wrapper'>
              {
                  favorite?.map((el, index) => {
                   const fav = favorite && favorite.some((i)=> i.id === el.id)
                  return (
                       <div className="favorite_card" key={index}>
                            <img src={el.img} alt="img" className="favorite_card_img" />
                          <div className="favorite_card_discount"></div>
                          <div className="favorite_card_follow">
                                    <img src={heartOn} />
                            </div>
                            <p className='favorite_card_title'>{el.title}</p>
                                <div className="prices">
                                    <p className='favorite_card_price'>{el.price} p</p>
                                    <s className='favorite_card_discounts'>{el.discounts}</s>
                                </div>
                            <p className='favorite_card_size'>размер: {el.size}</p>
                            <div className="favorite_card_color_block">
                            {
                                el?.colors?.map((el,index) => {
                                    return <button className='circle' style={{ backgroundColor:el}} key={index}></button>
                                })    
                            }
                        </div>
                    </div>
                  )
                    
              })
              }
              </div>
      </div>
  )
}
