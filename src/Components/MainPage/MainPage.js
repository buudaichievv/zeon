import React, { useState, useEffect} from 'react'
import Gallery from '../carousel/carousel'
import Hit from '../Hit/Hit'
import Novelties from '../Novelties/Novelties'
import Collection from '../Collection/Collection'
import './css/MainPage.css'
import axios from 'axios'
import { useDispatch} from 'react-redux'
import Premium from '../Premium/Premium'

export default function MainPage() {
    const dispatch = useDispatch()
    const [HitLimit, setHitLimit] = useState(8)
    const [NewLimit, setNewLimit] = useState(4)
    const [CollectionLimit, setCollectionLimit] = useState(4)
    useEffect(() => {
        axios(`http://localhost:3005/slider`)
            .then(({ data }) => {
                dispatch({type:"actionAddSliderProduct", sliderProducts: data})
                
            })
        // axios(`http://localhost:3005/favorite`)
        //     .then(({ data })=>{
        //         dispatch({type:"actionFavorite",favorits: data})
        //     })
         axios(`http://localhost:3005/hit?&_limit=${HitLimit}`)
            .then(({ data }) => {
                dispatch({type:"actionAddHitProduct", hitProducts: data})
                
            })
        axios(`http://localhost:3005/new?&_limit=${NewLimit}`)
            .then(({ data }) => {
                dispatch({type:"actionAddNewProduct",newProducts: data})
                
            })
        axios(`http://localhost:3005/collection?&_limit=${CollectionLimit}`)
            .then(({ data }) => {
                dispatch({type:"actionAddCollectionProduct", collectionProducts: data})
                
            })
    }, [HitLimit,NewLimit,CollectionLimit])
    
    return (
        <div className='container'>
            <Gallery />
            <Hit setHitLimit={setHitLimit}/>
            <Novelties setNewLimit={setNewLimit}/>
            <Collection setCollectionLimit={setCollectionLimit}/>
            <Premium />
            
        </div>
    )
}
