import getBook from '../api/getBook';
import { useNavigate, useParams } from 'react-router-dom'

function Books() {
    const data = getBook();

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
     const changeBook = () => {
        navigate(`/books/update/${data.id}`)
     }
   
    return (
        <div>
            <div className="subtitle is-4 has-text-left">Id: {data.id}</div>
            <div className="subtitle is-4 has-text-left">Title: {data.title}</div>
            <div className="subtitle is-4 has-text-left">Author: {data.author}</div>
            <div className="subtitle is-4 has-text-left">PubYear: {data.pubYear}</div>
            <div className="subtitle is-4 has-text-left">ISBN: {data.isbn}</div>

            <button 
            className=" button is-link is-light is-pulled-left  mr-6 mt-6"
            onClick= {goBack}>Back
            </button>
            
            <button className=" button is-link is-pulled-left  mr-6 mt-6" onClick={changeBook}> Change Book
            </button>
            
                               
        </div>
    )
}
export default Books

