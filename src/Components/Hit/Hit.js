
import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import heart from '../../img/likedFollow.png'
import heartOn from '../../img/heart.png'
import './css/Hit.css'
import Card from '../Card'
import { useNavigate } from 'react-router-dom'
export default function Hit({setHitLimit}) {  
    const { hitProduct } = useSelector((store) => store)
    const [isShow, setOnShow] = useState(true)
    const dispatch = useDispatch()
    const {favorite} = useSelector((store)=> store.favorite)
    const addFollow = (item) => {
        dispatch({type:"actionFavorite", favorits:item})
    }
    const btnMore = () => {
        setHitLimit(prev => prev + 4)
        setOnShow(false)
    }
    const fav = localStorage.getItem("favorits") ?
        JSON.parse(localStorage.getItem("favorits")) : []
    const nav = useNavigate()
    return (
      <section>
          <h3>Хит продаж</h3>
         <div className='hit_wrapper'>
            {
                    hitProduct?.map((el, index) => {
                        const isFav = fav && fav.some((i) => i.id === el.id)
                        return (
                            <Card el={el} idx={index}/>
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
