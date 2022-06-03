import React from 'react'
import Gallery from '../carousel/carousel'
import Hit from '../Hit/Hit'
import Novelties from '../Novelties/Novelties'
import Collection from '../Collection/Collection'
import './css/MainPage.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch} from 'react-redux'
export default function MainPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        axios(`http://localhost:3005/slider`)
            .then(({ data }) => {
                dispatch({type:"actionAddSliderProduct", sliderProducts: data})
                
            })
         axios(`http://localhost:3005/hit`)
            .then(({ data }) => {
                dispatch({type:"actionAddHitProduct", hitProducts: data})
                
            })
        axios(`http://localhost:3005/new`)
            .then(({ data }) => {
                dispatch({type:"actionAddNewProduct",newProducts: data})
                
            })
        axios(`http://localhost:3005/collection`)
            .then(({ data }) => {
                dispatch({type:"actionAddCollectionProduct", collectionProducts: data})
                
            })
    }, [])
    
    return (
        <div className='container'>
            <Gallery />
            <Hit />
            <Novelties />
            <Collection />
        </div>
    )
}
