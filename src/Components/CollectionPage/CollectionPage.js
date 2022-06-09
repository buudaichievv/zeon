import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './css/CollectionPage.css'
import { useNavigate } from 'react-router-dom'
export default function CollectionPage() {
    let nav = useNavigate()
    const dispatch = useDispatch()
    const [collection, setCollection] = useState(8)
    useEffect(() => {
        axios(`http://localhost:3005/collection?&_limit=${collection}`)
            .then(({ data }) => {
                dispatch({ type: 'actionAddCollectionProduct', collectionProducts: data })
                
        })
    }, [])
     const { collectionProduct } = useSelector((store) => store)
  return (
     <div className="container">
              <h2 className='CollectionPageTitle'>Коллекция</h2>
              <div className="collectionPage_wrapper">
                  {
                      collectionProduct.map((el,index) => {
                          return (
                              <div className='collectionPage_card_wrapper' key={index}>
                                    <img src={el.img} alt="" className='collectionPage_img'/>
                                   <div className="text_wrap"><p className='collection_img_text'>{el.title}</p></div>
                                  <button className='collectionPage_btn' onClick={() => nav(`/collection/${el.product}`)}>смотреть на все</button>
                              </div>
                          )
                      })
                  }
          </div>
          {/* onClick={()=>{setCollection(prev=>prev+4)}} */}
       
    </div>  
  )
}
