import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'


export default function Torso(props) {

    const [micArray, setMics] = useState([])

    useEffect(() => {
        getData()
    }, [])

  const getData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/open-mics`)
    
    //assign API results to array
    setMics(response.data)

  }


  return (
    <div className='torso'>
    <div className='mic-container'>
        {props.weekday} mics
    <div className='mic-list'>
      {micArray.map((item) => (
        item.weekday == props.weekday ? 
        <div key={item.id} className="mic-card">
          <h2>{item.name}</h2>
          <p><strong>Host:</strong> {item.host}</p>
          <p><strong>Start Time:</strong> {item.start_time}</p>
          <p><strong>Link:</strong> <a href={item.link}>{item.link}</a></p>
          <p><strong>Instagram:</strong> <a href={item.ig_link}>{item.ig_link}</a></p>
          <p><strong>Venue:</strong> {item.venue}</p>
          <p><strong>Address:</strong> {item.address}</p>
          <p><strong>Weekday:</strong> {item.weekday}</p>
          <p><strong>Frequency:</strong> {item.frequency}</p>
          {/* <img src={item.image_url} alt={`${item.name} image`} /> */}
          <p><strong>Notes:</strong> {item.notes}</p>
        </div>
        :
        null
      ))}

    </div>
    </div>

    </div>
  )
}

