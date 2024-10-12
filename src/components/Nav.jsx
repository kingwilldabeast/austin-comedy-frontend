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
        <div className={props.weekday === '/' ? 'navtext active' : 'navtext'}>Home</div>
      </div> */}
      <div onClick={() => handleClick('Monday')}>
        <div className={props.weekday === 'Monday' ? 'navtext active' : 'navtext'}>Monday</div>
      </div>
      <div  onClick={() => handleClick('Tuesday')}>
        <div className={props.weekday === 'Tuesday' ? 'navtext active' : 'navtext'}>Tuesday</div>
      </div>
      <div  onClick={() => handleClick('Wednesday')}>
        <div className={props.weekday === 'Wednesday' ? 'navtext active' : 'navtext'}>Wednesday</div>
      </div>
      <div onClick={() => handleClick('Thursday')}>
        <div className={props.weekday === 'Thursday' ? 'navtext active' : 'navtext'}>Thursday</div>
      </div>
      <div  onClick={() => handleClick('Friday')}>
        <div className={props.weekday === 'Friday' ? 'navtext active' : 'navtext'}>Friday</div>
      </div>
      <div  onClick={() => handleClick('Saturday')}>
        <div className={props.weekday === 'Saturday' ? 'navtext active' : 'navtext'}>Saturday</div>
      </div>
      <div onClick={() => handleClick('Sunday')}>
        <div className={props.weekday === 'Sunday' ? 'navtext active' : 'navtext'}>Sunday</div>
      </div>      
    
    </div>
    
    )
  }