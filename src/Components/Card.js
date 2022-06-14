import React from 'react'
import { useNavigate } from 'react-router-dom'
import heart from '../img/likedFollow.png'
import heartOn from '../img/heart.png'
import './css/card.css'
import { useDispatch } from 'react-redux'
export default function Card({ el, name }) {
    
    const dispatch = useDispatch()
    const nav = useNavigate()
    const addFollow = (item) => {
        console.log(item)
        if (item.id) {
            dispatch({ type: "actionFavorite", favorits: item })
        }
        else {
            console.log("равен")
        }
    }
  return (
          <div className="card" key={el?.idx} >
                            <img src={el?.img} alt="img" className="card_img" onClick={()=>nav(`/collection/${el?.product}/${el?.id}`)}/>
                            <div className="card_follow" onClick={() => {
                                addFollow(el)
                            }}>
                              <img src={heart} alt="" />
                            </div>
                            <p className='card_title'>{el?.title}</p>
                                <div className="prices">
                                    <p className='card_price'>{el?.price} p</p>
                                    <s className='card_discounts'>{el?.discounts}</s>
                                </div>
                            <p className='card_size'>размер: {el?.size}</p>
                            <div className="card_color_block">
                            {
                                el?.colors?.map((it,index) => {
                                    return <button className='circle' style={{ backgroundColor:it}} key={index}></button>
                                })    
                            }
                        </div>
            </div>
  )
}
