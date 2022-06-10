
import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './css/Hit.css'
export default function Hit({setHitLimit}) {  
    const { hitProduct } = useSelector((store) => store)
    const [isShow, setOnShow] = useState(true)
    const nav = useNavigate()
    const btnMore = () => {
        setHitLimit(prev => prev + 4)
        setOnShow(false)
    }
    return (
      <section>
          <h3>Хит продаж</h3>
         <div className='hit_wrapper'>
            {
                hitProduct?.map((el,index)=>{
                return(
                    
                        <div className="hit_card" key={index} onClick={()=>nav(`/collection/hit/${el.id}`)}>
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
                } )
              }
                {
                    isShow&&<button className='hit_wrapper_more' onClick={btnMore}>Eще</button>    
                }
        </div>
    </section>
  )
}
