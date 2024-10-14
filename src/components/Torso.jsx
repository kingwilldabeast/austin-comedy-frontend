import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Modal from './MicDetails';
import Nav from './Nav'


export default function Torso(props) {
  // const sheetID = process.env.REACT_APP_SHEET_ID
  // const apiKey = process.env.REACT_APP_API_KEY
  const sheetID = "129D4mFZUrfw_oOHJqafp9QXgpjIhbWFwlGItFa1G-oM";
  const apiKey = "AIzaSyAQY0XtUo2Wmx-dkWzHyNWXHm7LaVrvtzc";
  const range = "Sheet1!A1:L77";

  
  const [micArray, setMics] = useState([])
  const [activeCardId, setActiveCardId] = useState(null);  // Store the ID of the card with an open modal

  const openModal = (id) => {
    setActiveCardId(id);  // Set the clicked card's ID as active
  };
  
  const closeModal = () => {
    setActiveCardId(null);  // Close modal by resetting the active ID
  };
  
  useEffect(() => {
        getData()
    }, [])

  // const getData = async () => {
    // const response = await axios.get(`http://127.0.0.1:8000/open-mics`)
      //   setMics(response.data)
  // }

  const getData = async () => {
    try {
      const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`);
      
      if (response.status === 200) {
        const rows = response.data.values;
  
        // Extract headers (first row)
        const headers = rows[0];
  
        // Map over the remaining rows to create objects
        const dataArray = rows.slice(1).map(row => {
          let obj = {};
          row.forEach((value, index) => {
            obj[headers[index]] = value;
          });
          return obj;
        });
  
        // Set the processed data as state
        setMics(dataArray);
      } else {
        console.error('Failed to fetch data', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  return (
    <div className='torso'>
    <div className='mic-container'>
        {/* <div className='weekday-label'> {props.weekday} mics </div> */}
        <Nav weekday={props.weekday} setWeekday ={props.setWeekday} />
    <div className='mic-list'>

      {props.weekday === "info" ?
            <div className="mic-card">
                <p className='card-title'>General Info</p>
              <p><strong>Daily updates:</strong> <a className = 'link-color-override' href={"https://www.instagram.com/austintexascomedy"} target="_blank" rel="noopener noreferrer">@austintexascomedy</a></p>
              <p><strong>Raw Data:</strong> <a className = 'link-color-override' href={"https://docs.google.com/spreadsheets/d/1t0JiheP4TmhuAQR1pi3pVeI6rtGxwVoxvTtWvB0RAy4/edit?fbclid=PAZXh0bgNhZW0CMTEAAaaJzD6iavQzV8m9V1_bpEjP0oEumt5kCwAxzSl5RojUvoiHH7zbWK7PbR8_aem_ifT5NgqeydTc7C2iNMAZVQ&gid=0#gid=0"} target="_blank" rel="noopener noreferrer">Derek Dimpfl's Google sheet</a></p>
              <p><strong>Source Code:</strong> <a className = 'link-color-override' href={"https://github.com/kingwilldabeast/austin-comedy-frontend"} target="_blank" rel="noopener noreferrer">GitHub</a></p>              
              <p><strong>Found an error?</strong> <a className = 'link-color-override' href={"https://instagram.com/will.isenberg"} target="_blank" rel="noopener noreferrer">@will.isenberg</a></p>
            </div>
      :
      micArray.map((item, index) => (
        item.weekday == props.weekday && item.hiatus !== "hiatus" ? 
        <div key={index} onClick={() => openModal(index)} className="mic-card">
          <p className='card-title'>{item.name}</p>
          {/* <p><strong>Test ID:</strong> {index}</p> */}
          <p><strong>Start Time:</strong> {item.start_time}</p>
          <p><strong>Venue:</strong> {item.venue}</p>
          <p><strong>Address:</strong> {item.address}</p>
          {activeCardId === index && (  // Only show the modal for the active card
        <Modal isOpen={true} onClose={closeModal} key={`modal-${index}`}>
          <p className='card-title'>{item.name}</p>
            {/* <p><strong>Weekday:</strong> {item.weekday}</p> */}
            <p><strong>Frequency:</strong> {item.frequency}</p>
            <p><strong>Start Time:</strong> {item.start_time}</p>
            <p><strong>Venue:</strong> {item.venue}</p>
            <p><strong>Address:</strong> {item.address}</p>
            <p><strong>Host:</strong> {item.host}</p>
            {item.ig_link !== '' && (
            <p><strong>Instagram:</strong> <a className = 'link-color-override' href={"https://www.instagram.com/" + item.ig_link} target="_blank" rel="noopener noreferrer">{"@" + item.ig_link}</a></p>
            )}
            {item.link !== '' && (
              <p><strong>Link:</strong> <a className = 'link-color-override' href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
            )}
            <p><strong>Signup:</strong> {item.signup}</p>
            <p><strong>Notes:</strong> {item.notes}</p>
          </Modal>
          )}

        </div>
        :
        null
      ))
      }
    </div>
    </div>

    </div>
  )
}


