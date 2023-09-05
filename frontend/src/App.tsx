import './App.css'
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NewBook from './pages/NewBook';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="/new" element={<NewBook />} />
          
        </Routes>
      </Router>
    </div>
  )
}
export default App
