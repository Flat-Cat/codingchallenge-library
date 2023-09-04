import './App.css'
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, useParams, } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<Books />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App
