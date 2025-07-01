import { React } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Welcome from './pages/welcome'
import AnimeCharaters from './pages/animeCharacters'
import AnimeShows from './pages/animeShows'
import Footballers from './pages/footballers'
import AdultAnimationCharacters from './pages/adultAnimationCharacters'
import AdultAnimationShows from './pages/adultAnimationShows'
import LiveActionShows from "./pages/liveActionShows"
import LiveActionCharacters from './pages/liveActionCharacters'
import HistoricalFigures from './pages/historicalFigures'
import About from './pages/about'
import Contact from './pages/contact'

const App = () => {

  return (
    <div>
      <nav className='navBar'>
          <Link to='/' className='links'>Home</Link>
          <Link to='/about' className='links'>About</Link>
          <Link to='/contact' className='links'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/anime-characters' element={<AnimeCharaters />}></Route>
        <Route path='/anime-shows' element={<AnimeShows />}></Route>
        <Route path='/footballers' element={<Footballers />}></Route>
        <Route path='/adult-animation-characters' element={<AdultAnimationCharacters />}></Route>
        <Route path='/adult-animation-shows' element={<AdultAnimationShows />}></Route>
        <Route path='/live-action-shows' element={<LiveActionShows />}></Route>
        <Route path='/live-action-characters' element={<LiveActionCharacters />}></Route>
        <Route path='/historical-figures' element={<HistoricalFigures />}></Route>
      </Routes>
    </div>
  )
}

export default App
