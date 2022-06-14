import React,{useState,useEffect} from 'react'
import './css/besseler.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
export default function Besseler() {
  const dispatch = useDispatch()
  const { name } = useParams() 
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get(`http://localhost:3005/${name}`)
      .then(({ data }) => {
        dispatch({ type: "actionAddCurrentCollection", currentCollection: data })
      })
  }, [])
  const { currentCollection } = useSelector((store) => store)
  return (
    <div className='container'>
      <h3>{currentCollection?.titlePage}</h3>
      <div className='besseler_wrapper'>
        {
          
          currentCollection?.map((el, index) => {
            
                return(
                        <div className="besseler_card" onClick={()=>navigate(`/collection/${el?.collection}/${el?.id}`)} key={index}>
                            <img src={el.img} alt="img" className="besseler_card_img"/>
                            <p className='besseler_card_title'>{el.title}</p>
                                <div className="prices">
                                    <p className='besseler_card_price'>{el.price} p</p>
                                    <s className='besseler_card_discounts'>{el.discounts}</s>
                                </div>
                            <p className='besseler_card_size'>размер: {el.size}</p>
                            <div className="besseler_card_color_block">
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
