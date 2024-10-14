import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Torso from './components/Torso'
import MicDetails from './components/MicDetails'
// import Footer from './components/Footer'

// import RecipeList from './components/RecipeList'
// import ExpandedRecipeItem from './components/ExpandedRecipeItem'

export default function App() {
  
    // Create a new Date object
    const today = new Date();
  
    // Array of weekdays to get the name from the index
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the current day of the week
    const todayWeekday = weekdays[today.getDay()];

  const [weekday, setWeekday] = useState(todayWeekday);
  const [selectedMic, setSelectedMic] = useState("")

  return (
    <div className='app'>

    <Header />
    <Torso weekday={weekday} setWeekday ={setWeekday}/>
    {/* <MicDetails selectedMic={selectedMic} setSelectedMic={setSelectedMic}/> */}
    {/* <Footer/> */}


    </div>
  )
}

