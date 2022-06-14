import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./css/Novelties.css"
import Card from '../Card'
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
                    return (
                    
                        <Card el={el}/>
                )
                })
                  
              }
              {show && <button className='novelties_wrapper_more' onClick={btnMore}>Eще</button>}
        </div>
    </section>
  )
}
