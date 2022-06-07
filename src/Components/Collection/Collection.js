import { axios } from 'axios'
import React from 'react'
import {useSelector } from 'react-redux'
import './css/Collection.css'
export default function Collection({setCollectionLimit}) {
     const { collectionProduct } = useSelector((store) => store)
  return (
    <section>
          <div className="container">
              <h2>Коллекция</h2>
              <div className="collection_wrapper">
                  {
                      collectionProduct.map((el,index) => {
                          return (
                              <div className='collection_card_wrapper' key={index}>
                                    <img src={el.img} alt="" className='collection_img'/>
                                    <div className="text_wrap"><p className='collection_img_text'>{el.title}</p></div>
                                  <button className='collection_btn'>смотреть на все</button>
                              </div>
                          )
                      })
                  }
              </div>
              <button className='hit_wrapper_more' onClick={()=>{setCollectionLimit(prev=>prev+4)}}>Eще</button>
          </div>  
    </section>
  )
}
