import { createStore } from "redux";

const initialState = {
    hitProduct:[],
    newProduct: [],
    hollectionProduct: [],
    sliderProduct: [],
    aboutProduct: [],
    newsProduct: [],
    supProduct: [],
    collectionProduct: [],
    currentCollection: [],
    favorite: localStorage.getItem("favorits") ?
        JSON.parse(localStorage.getItem("favorits")):[]
}
const actionAddHitProduct = "actionAddHitProduct"
const actionAddNewProduct = "actionAddNewProduct"
const actionAddCollectionProduct = "actionAddCollectionProduct"
const actionAddSliderProduct = "actionAddSliderProduct"
const actionAddAboutProduct = "actionAddAboutProduct"
const actionAddNewsProduct = "actionAddNewsProduct"
const actionAddSupProduct = "actionAddSupProduct"
const actionAddCurrentCollection = "actionAddCurrentCollection"
const actionFavorite = "actionFavorite"
const actionRemoveFavorite = "actionRemoveFavorite"
const Reduser = (state = initialState,action) => {
    switch (action.type) {
        case actionAddHitProduct:
            return {
                ...state,
                hitProduct: action.hitProducts
            }
        case actionFavorite:
            localStorage.setItem("favorits", JSON.stringify([...state.favorite, action.favorits ]))
            return {
                ...state,
                favorite: [...state.favorite, action.favorits]
            }
        case actionRemoveFavorite:
            localStorage.removeItem("favorits", JSON.stringify([...state.favorite, action.favorits ]))
        return {
            ...state,
            favorite: [...state.favorite, action.favorits]
        }
        case actionAddNewProduct:    
            return {
                ...state,
                newProduct: action.newProducts
            }
        case actionAddCollectionProduct:
            return {
                ...state,
                collectionProduct: action.collectionProducts
            }
        case actionAddCurrentCollection:
            return {
                ...state,
                currentCollection: action.currentCollection
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