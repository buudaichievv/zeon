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
        dispatch({ type: "actionAddCurrentCollection", currentCollections: data })
      })
  }, [])
  const { currentCollection } = useSelector((store) => store)
  return (
    <div className='container'>
      <h3>{currentCollection.titlePage}</h3>
      <div className='hit_wrapper'>
            {
          currentCollection?.map((el, index) => {
                return(
                    
                        <div className="hit_card" onClick={()=>navigate(`/collection/${el.collection}/${el.id}`)} key={index}>
                            <img src={el.img} alt="img" className="hit_card_img"/>
                            <p className='hit_card_title'>{el.title}</p>
                                <div className="prices">
                                    <p className='hit_card_price'>{el.price} p</p>
                                    <s className='hit_card_discounts'>{el.discounts}</s>
                                </div>
                            <p className='hit_card_size'>размер: {el.size}</p>
                            <div className="hit_card_color_block">
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
              {/* <button className='hit_wrapper_more' onClick={()=>{setHitLimit(prev=>prev+4)}}>Eще</button> */}
        </div>
    </div>
  )
}
