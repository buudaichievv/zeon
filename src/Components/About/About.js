import React,{useState,useEffect} from 'react'
import './css/About.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function About() {
  const dispatch = useDispatch()
  useEffect(() => {
     axios.get(`http://localhost:3005/about`)
       .then(({ data }) => {
                dispatch({type:"actionAddAboutProduct", aboutProducts: data})        
        })
  }, [])
  const { aboutProduct } = useSelector((store) => store)
  return (
    <div>
      <div className="container">
        
        <div className="about_wrapper">
          <div className="about_img_block">
            {
              aboutProduct.map((el,index) => {
                return <img src={el.img} alt="" className={"about_img img_" + el.id} key={index}/>
              })
            }
          </div> 
          <div className="about_text">
            <h4>О нас</h4>
            {
              aboutProduct.map((el,index) => {
                return <p >{el.text}</p>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
