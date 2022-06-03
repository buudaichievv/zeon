import React from 'react'
import image from '../../img/Coll(1).jpg'
import image2 from '../../img/Coll(2).jpg'
import image3 from '../../img/Coll(3).jpg'
import image4 from '../../img/Coll(4).jpg'
import './css/Collection.css'
export default function Collection() {
    const Cbase = [
        {
            img: image,
            title: "Последняя одежда"
        },
        {
            img: image2,
            title: "Последняя одежда"
        },
        {
            img: image3,
            title: "Последняя одежда"
        },
        {
            img: image4,
            title: "Последняя одежда"
        },
    ]
  return (
    <section>
          <div className="container">
              <h2>Коллекция</h2>
              <div className="collection_wrapper">
                  {
                      Cbase.map((el,index) => {
                          return (
                              <div className='collection_card_wrapper' key={index}>
                                    <img src={el.img} alt="" className='collection_img'/>
                                    <p className='collection_img_text'>{el.title}</p>
                                  <button className='collection_btn'>смотреть на все</button>
                              </div>
                          )
                      })
                  }
              </div>
              <button className='hit_wrapper_more'>Eще</button>
          </div>  
    </section>
  )
}
