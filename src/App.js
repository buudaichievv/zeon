import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Routes ,Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import About from './Components/About/About'
import News from './Components/News/News'
import Support from './Components/Support/Support'
import CollectionPage from './Components/CollectionPage/CollectionPage'
import Besseler from './Components/besselerPage/Besseler'
import Details from './Components/Details/Details'
import Basket from './Components/Basket/Basket'
import Liked from './Components/Liked/Liked'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/liked' element={<Liked/>}/>
        <Route exact path='/basket' element={<Basket/>}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/support' element={<Support />} />
        <Route exact path='/collection' element={<CollectionPage />} />
        <Route exact path='/collection/:name' element={<Besseler/>} />
        <Route exact path='/collection/:name/:id' element={<Details/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}
