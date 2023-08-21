import './App.css'
import Home from './pages/Home'
import Articles from './pages/Articles'

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {

  return (

    <div>
       
    <Router>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/articles/:index" element={<Articles/>}/>

      </Routes>

    </Router>
    </div>


  )
}

export default App
