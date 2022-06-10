import { axios } from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'
import './css/Collection.css'
import { useState } from 'react'
export default function Collection({setCollectionLimit}) {
    const { collectionProduct } = useSelector((store) => store)
    const nav = useNavigate()
    const [show, setShow] = useState(true)
    const btnMore = () => {
        setShow(false)
        setCollectionLimit((prev)=>prev+4)
    }
    
  return (
    <section>
          <div className="container">
              <h2>Коллекция</h2>
              <div className="collection_wrapper">
                  {
                      collectionProduct.map((el,index) => {
                          return (
                              <div className='collection_card_wrapper' onClick={() => nav(`/collection/${el.product}`)} key={index}>
                                    <img src={el.img} alt="" className='collection_img'/>
                                    <div className="text_wrap"><p className='collection_img_text'>{el.title}</p></div>
                                   <button className='collection_btn'>Cмотреть все</button>
                              </div>
                          )
                      })
                  }
              </div>
              {
                  show&&<button className='hit_wrapper_more' onClick={btnMore}>Eще</button>
              }
          </div>  
    </section>
  )
}
