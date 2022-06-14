import React,{useState,useEffect} from 'react'
import './css/Details.css'
import liked from '../../img/likedWhite.png'
import basket from '../../img/basketWhite.png'
import axios from 'axios'
import { useParams } from 'react-router-dom' 
 
export default function Details() {
  const { name, id } = useParams() 
  
  const [good,setGood] = useState(null)
    useEffect(() => {
    axios.get(`http://localhost:3005/${name}/${id}`)
      .then(({ data }) => {
        setGood(data)
        })
    }, [])
  console.log(good); 
  return (
      <div className='container'>
                      {good == null ? <div>Loading</div> : <div className="details_wrapper" key={good.id}>
                <div className="details_img_wrapper">
                    {
                      good?.img?.map((el,index) => {
                        return <img src={el} alt="" key={index}/>
                                })
                    }
                </div>
                <div className="details_text_wrapper">
                              <p className='titleDetails'>{good.title}</p>
                              <p className='articleDetails'>Артикул: <span>{good.atticle}</span></p>
                  <p className='circleDetails'>Цвет:
                     {
                      good?.colors?.map((el,index) => {
                          return  (<button className='circle' style={{ backgroundColor:el}} key={index}></button>)
                      })
                    }
                    </p>
                              <p className='priceDetails'>{good.price} p</p>
                              <p className="tovar">о товаре: <br /> <span>{good.discriiption}</span></p>
                    <div className="optionsDetails">
                                  <p className='sizeDetails'>Размерный ряд: <span>{good.amount}</span> </p>
                                  <p className='sizeDetails'>Состав ткани: <span>{good.strmaterial}</span> </p>
                        <p className='sizeDetails'>Количество: <span>{good.count}</span> </p>
                        <p className='sizeDetails'>Материал: <span>{good.materual}</span> </p>
                    </div>
                    <div className="buttonDetails">
                        <button className='addBasket'><img className="basketWhite" src={basket} alt="" />Добавить в карзину</button>
                        <button className='liked'><img src={liked} alt="" /></button>
                        </div>
                    </div>
                 </div>}
      </div>
  )
}
