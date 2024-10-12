import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

// export default function MicDetails (props) {

//   const [boat, setBoat] = useState('')

//   let {micID} = useParams() 

//   useEffect(() => {
//     let selectedMic = props.boats.find((boat) => boat.id === parseInt(micID))
//     setBoat(selectedMic)
//   }, [props.boats, micID])

//   return boat ? (
//     <div className="detail">
//       <Link to ='/listings'>Back to Listings</Link>
//       <div>Close button</div>
      
//       <div className="mic-card">
//           <h2>{item.name}</h2>
//           <p><strong>Host:</strong> {item.host}</p>
//           <p><strong>Start Time:</strong> {item.start_time}</p>
//           <p><strong>Link:</strong> <a href={item.link}>{item.link}</a></p>
//           <p><strong>Instagram:</strong> <a href={item.ig_link}>{item.ig_link}</a></p>
//           <p><strong>Venue:</strong> {item.venue}</p>
//           <p><strong>Address:</strong> {item.address}</p>
//           <p><strong>Weekday:</strong> {item.weekday}</p>
//           <p><strong>Frequency:</strong> {item.frequency}</p>
//           {/* <img src={item.image_url} alt={`${item.name} image`} /> */}
//           <p><strong>Notes:</strong> {item.notes}</p>
//         </div>

//     </div>
//   ) : null;
// }
