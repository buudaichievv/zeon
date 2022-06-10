import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./css/Novelties.css"
export default function Novelties({setNewLimit}) {
    const { newProduct } = useSelector((store) => store)
    const [show,setShow] = useState(true)
    const btnMore = () => {
        setShow(false)
        setNewLimit((prev)=>prev + 4)
    }
    const nav = useNavigate()
  return (
      <section>
          <h2>Новинки</h2>
         <div className='novelties_wrapper'>
            {
                newProduct?.map((el,index)=>{
                return(
                    
                    <div className="novelties_card" key={index} onClick={()=>nav(`/collection/new/${el.id}`)}>
                            <img src={el.img} alt="img" className="novelties_card_img"/>
                            <p className='novelties_card_title'>{el.title}</p>
                            <div className="prices">
                            <p className='novelties_card_price'>{el.price} p</p>
                            <s className='novelties_card_discounts'>{el.discounts}</s>
                            </div>
                            <p className='novelties_card_size'>размер: {el.size}</p>
                            <div className="novelties_card_color_block">
                             {
                                el.colors.map((el,index) => {
                                    return <button className='circle' style={{ backgroundColor:el}} key={index}></button>
                                })    
                             }
                            </div>
                        </div>
                )
                })
                  
              }
              {show && <button className='novelties_wrapper_more' onClick={btnMore}>Eще</button>}
        </div>
    </section>
  )
}
