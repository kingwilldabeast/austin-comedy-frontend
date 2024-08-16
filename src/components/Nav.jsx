import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

export default function Nav (props) {
    // const location = useLocation();
    // props.weekday = props.props.weekday
    // setWeekday = props.setWeekday

    const handleClick = (path) => {
        props.setWeekday(path);
      };

    // const [isOpen, setIsOpen] = useState(false);
  
    // const toggleMenu = () => {
    //   setIsOpen(!isOpen);
    // };
    
    return (


    <div className= "nav">

      {/* <div to="/" onClick={() => handleClick('/')}>
        <h2 className={props.weekday === '/' ? 'navtext active' : 'navtext'}>Home</h2>
      </div> */}
      <div onClick={() => handleClick('Monday')}>
        <h2 className={props.weekday === 'Monday' ? 'navtext active' : 'navtext'}>Monday</h2>
      </div>
      <div  onClick={() => handleClick('Tuesday')}>
        <h2 className={props.weekday === 'Tuesday' ? 'navtext active' : 'navtext'}>Tuesday</h2>
      </div>
      <div  onClick={() => handleClick('Wednesday')}>
        <h2 className={props.weekday === 'Wednesday' ? 'navtext active' : 'navtext'}>Wednesday</h2>
      </div>
      <div onClick={() => handleClick('Thursday')}>
        <h2 className={props.weekday === 'Thursday' ? 'navtext active' : 'navtext'}>Thursday</h2>
      </div>
      <div  onClick={() => handleClick('Friday')}>
        <h2 className={props.weekday === 'Friday' ? 'navtext active' : 'navtext'}>Friday</h2>
      </div>
      <div  onClick={() => handleClick('Saturday')}>
        <h2 className={props.weekday === 'Saturday' ? 'navtext active' : 'navtext'}>Saturday</h2>
      </div>
      <div onClick={() => handleClick('Sunday')}>
        <h2 className={props.weekday === 'Sunday' ? 'navtext active' : 'navtext'}>Sunday</h2>
      </div>      
    
    </div>
    
    )
  }