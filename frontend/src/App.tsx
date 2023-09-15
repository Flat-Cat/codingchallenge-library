import './App.css'
import Book from './pages/Book';
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
          <Route path="/book/:id" element={<Book />} />
          <Route path="/new" element={<NewBook />} />
          <Route path="/book/update/:id" element={<UpdateBook />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App
