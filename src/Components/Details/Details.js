import React,{useState,useEffect} from 'react'
import './css/Details.css'
import liked from '../../img/likedWhite.png'
import basket from '../../img/basketWhite.png'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom' 
 import image from '../../img/Hit.jpg'
export default function Details() {
    const dispatch = useDispatch()
    const { name, id } = useParams() 
    
    useEffect(() => {
    axios.get(`http://localhost:3005/${name}/${id}`)
      .then(({ data }) => {
        dispatch({ type: "actionAddCurrentCollection", currentCollections: data })
      })
  }, [])
    const { currentCollection } = useSelector((store) => store)
   console.log(currentCollection);
  return (
      <div className='container'>
                    <div className="details_wrapper" key={currentCollection.id}>
                <div className="details_img_wrapper">
                 
                </div>
                <div className="details_text_wrapper">
                              <p className='titleDetails'>{currentCollection.title}</p>
                              <p className='articleDetails'>Артикул: <span>{currentCollection.article}</span></p>
                  <p className='circleDetails'>Цвет:
                     {
                      currentCollection.colors.map((el,index) => {
                          return  (<button className='circle' style={{ backgroundColor:el}} key={index}></button>)
                      })
                    }
                    </p>
                              <p className='priceDetails'>{currentCollection.price} p</p>
                              <p className="tovar">о товаре: <br /> <span>{currentCollection.discriiption}</span></p>
                    <div className="optionsDetails">
                                  <p className='sizeDetails'>Размерный ряд: <span>{currentCollection.amount}</span> </p>
                                  <p className='sizeDetails'>Состав ткани: <span>{currentCollection.strmaterial}</span> </p>
                        <p className='sizeDetails'>Количество: <span>{currentCollection.count}</span> </p>
                        <p className='sizeDetails'>Материал: <span>{currentCollection.materual}</span> </p>
                    </div>
                    <div className="buttonDetails">
                        <button className='addBasket'><img className="basketWhite" src={basket} alt="" />Добавить в карзину</button>
                        <button className='liked'><img src={liked} alt="" /></button>
                        </div>
                    </div>
                 </div>
      </div>
  )
}
