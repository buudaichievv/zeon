import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Routes ,Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import About from './Components/About/About'
import News from './Components/News/News'
import Support from './Components/Support/Support'
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/support' element={<Support/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}
