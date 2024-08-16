import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Torso from './components/Torso'
// import Footer from './components/Footer'

// import RecipeList from './components/RecipeList'
// import ExpandedRecipeItem from './components/ExpandedRecipeItem'

export default function App() {
  
  const [weekday, setWeekday] = useState("");

  return (
    <div className='app'>

    <Header />
    <Nav weekday={weekday} setWeekday ={setWeekday} />
    <Torso weekday={weekday} setWeekday ={setWeekday}/>
    {/* <Footer/> */}


    </div>
  )
}

