import { useState, useEffect } from 'react';
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

    useEffect(() => {
      const navItems = document.querySelectorAll('.navtext');
      
      const updateNavText = () => {
        const isSmallScreen = window.innerWidth < 850;
        
        navItems.forEach(item => {
          if (isSmallScreen) {
            item.innerText = item.getAttribute('data-day')[0]; // Display only the first letter
          } else {
            item.innerText = item.getAttribute('data-day'); // Display full weekday
          }
        });
      };
    
      updateNavText();
      window.addEventListener('resize', updateNavText);
    
      return () => {
        window.removeEventListener('resize', updateNavText);
      };
    }, []);
    
    return (


    <div className= "nav">
      <div onClick={() => handleClick('info')}>
        <div className={props.weekday === 'info' ? 'navtext active' : 'navtext'} data-day="info" >info</div>
      </div> 
      <div onClick={() => handleClick('Sunday')}>
        <div className={props.weekday === 'Sunday' ? 'navtext active' : 'navtext'} data-day="Sunday" >Sunday</div>
      </div>
      <div onClick={() => handleClick('Monday')}>
        <div className={props.weekday === 'Monday' ? 'navtext active' : 'navtext'} data-day="Monday">Monday</div>
      </div>
      <div onClick={() => handleClick('Tuesday')}>
        <div className={props.weekday === 'Tuesday' ? 'navtext active' : 'navtext'} data-day="Tuesday">Tuesday</div>
      </div>
      <div onClick={() => handleClick('Wednesday')}>
        <div className={props.weekday === 'Wednesday' ? 'navtext active' : 'navtext'} data-day="Wednesday" >Wednesday</div>
      </div>
      <div onClick={() => handleClick('Thursday')}>
        <div className={props.weekday === 'Thursday' ? 'navtext active' : 'navtext'} data-day="Thursday" >Thursday</div>
      </div>
      <div onClick={() => handleClick('Friday')}>
        <div className={props.weekday === 'Friday' ? 'navtext active' : 'navtext'} data-day="Friday" >Friday</div>
      </div>
      <div onClick={() => handleClick('Saturday')}>
        <div className={props.weekday === 'Saturday' ? 'navtext active' : 'navtext'} data-day="Saturday" >Saturday</div>
      </div>

    </div>
    
    )
  }