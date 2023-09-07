import './App.css'
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NewBook from './pages/NewBook';
import UpdateBook from './pages/UpdateBook';
function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="/new" element={<NewBook />} />
          <Route path="/books/update/:id" element={<UpdateBook />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App
