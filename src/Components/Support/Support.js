import React,{useState} from 'react'
import './css/Support.css'
import sup_img from '../../img/news.png'
import Accordion from '../Accordion/Accordion'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
export default function Support() {
    const dispatch = useDispatch()
    useEffect(() => {
         axios(`http://localhost:3005/support`)
                  .then(({ data }) => {
                      dispatch({type:"actionAddSupProduct", supProducts: data})
                      
                  })
    }, [])
    const {supProduct} = useSelector((store)=>store)
    const [active,setActive] = useState("")
    return (
        <div className='container'>
            <div className="sup_wrapper">
                <img src={sup_img} alt="" />
                <div className="accordion_wrapper">
                    <h3>Помощь</h3>
                    {
                        supProduct.map((el) => {
                            return <Accordion active={active} setActive={setActive} id={el.id} text={el.answer} title={el.quastion}/>
                        })
                    }
                </div>    
            </div>
        </div>
  )
}
