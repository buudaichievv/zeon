import React, {useEffect} from 'react'
import './css/News.css'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useSelector } from 'react-redux'
export default function News() {
  const dispatch = useDispatch()
  useEffect(() => {
      axios(`http://localhost:3005/news`)
                  .then(({ data }) => {
                      dispatch({type:"actionAddNewsProduct", newsProducts: data})
                      
                  })
  }, [])
  const { newsProduct } = useSelector((store)=>store)
  return (
      <div className='news_wrapper'>
        <div className="container">
          <h2>
              Новости
        </h2>
        {
          newsProduct.map((el, index)=>{
            return (
              <div className="news_block_value" key={index}>
                  <img src={el.img} alt="" className='news_block_value_text'/>
                  <div className="news_block_value_text">
                      <h4>
                        {el.title}
                      </h4>
                      <p>
                    {el.value}
                      </p>
                  </div>
            </div>
            )
        })
        }
        </div>
    </div>
  )
}
