import React, {useEffect} from 'react'
import './css/News.css'
import axios from 'axios'
import { useState } from 'react'
export default function News() {
  const [newsComponent, setNewsComponent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetchingPage, setFetchingPage] = useState(true)
  const [totalCount,setTotalCount] = useState(0)
  useEffect(() => {
    if (fetchingPage) {
        axios(`http://localhost:3005/news?_page=${currentPage}&_limit=4`)
                  .then(( res ) => {
                      setNewsComponent([...newsComponent,...res.data])
                    setCurrentPage(prev => prev + 1)
                    setTotalCount(res.headers['x-total-count'])
                  })
                  .finally(()=>setFetchingPage(false))
     }
  }, [fetchingPage])
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
        document.removeEventListener('scroll', scrollHandler)
      }
  }, [fetchingPage])
  const scrollHandler = (e) => {
    
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && newsComponent.length < totalCount){
      setFetchingPage(true)
    }
  }
  return (
      <div className='news_wrapper'>
        <div className="container">
          <h2>
              Новости
        </h2>
        {
          newsComponent.map((el, index)=>{
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
