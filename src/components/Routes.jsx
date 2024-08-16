import {Route, Routes} from 'react-router-dom'
import FileNotFound from './FileNotFound'
import Home from './Home'
import FilmList from './FilmList'


export default function Routes (props) {
    // console.log(props)
    // const thing = ""
    return (
      
      <div className="routes">
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/films" element={<FilmList/>}/> */}
           <Route path="*" element={<FileNotFound />}/>
        </Routes>
      </div>
    )
  }