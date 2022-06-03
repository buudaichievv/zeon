import { createStore } from "redux";

const initialState = {
    hitProduct:[],
    newProduct: [],
    hollectionProduct: [],
    sliderProduct: [],
    aboutProduct: [],
    newsProduct: [],
    supProduct:[]
}
const actionAddHitProduct = "actionAddHitProduct"
const actionAddNewProduct = "actionAddNewProduct"
const actionAddCollectionProduct = "actionAddCollectionProduct"
const actionAddSliderProduct = "actionAddSliderProduct"
const actionAddAboutProduct = "actionAddAboutProduct"
const actionAddNewsProduct = "actionAddNewsProduct"
const actionAddSupProduct = "actionAddSupProduct"
const Reduser = (state = initialState,action) => {
    switch (action.type) {
        case actionAddHitProduct:
            return {
                ...state,
                hitProduct: action.hitProducts
            }
        case actionAddNewProduct:    
            return {
                ...state,
                newProduct: action.newProducts
            }
        case actionAddCollectionProduct:
            return {
                ...state,
                hollectionProduct: action.collectionProducts
            }
        case actionAddSliderProduct:    
            return {
                ...state,
                sliderProduct: action.sliderProducts
            }
        case actionAddAboutProduct:    
            return {
                ...state,
                aboutProduct: action.aboutProducts
            }
        case actionAddNewsProduct:    
            return {
                ...state,
                newsProduct: action.newsProducts
            }
        case actionAddSupProduct:
            return {
                ...state,
                supProduct: action.supProducts
            }
    }
    return state
}
let store = createStore(Reduser);

export default store