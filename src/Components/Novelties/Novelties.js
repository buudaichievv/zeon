import React from 'react'
import { useSelector } from 'react-redux'
import "./css/Novelties.css"
export default function Novelties({setNewLimit}) {
    const { newProduct } = useSelector((store) => store)
  return (
      <section>
          <h2>Новинки</h2>
         <div className='novelties_wrapper'>
            {
                newProduct.map((el,index)=>{
                return(
                    
                        <div className="novelties_card" key={index}>
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
              <button className='novelties_wrapper_more' onClick={()=>{setNewLimit(prev=>prev+4)}}>Eще</button>
        </div>
    </section>
  )
}
