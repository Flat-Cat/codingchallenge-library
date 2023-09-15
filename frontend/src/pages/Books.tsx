import get from '../api/get';
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react';
import { BookData } from '../api/BookData';
import deleteBook from '../api/delete';

function Books() {

    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        get(id).then(data => {
            setData(data)
        })
    }, [])
    
    //___Button goBack__________________________________________________________________
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/")
    }
    //___Button changeBook______________________________________________________________
    const changeBook = () => {
        navigate(`/books/update/${data.id}`)
    }
    //___Button deleteBook__________________________________________________________________
    const deleteBookButton = (formEvent: FormEvent) => {
        formEvent.preventDefault()

        if (confirm("Are you sure you want to delete this?") == true) {
            deleteBook(id, data).then(() => {
                navigate(`/`);
            })
        } else {
            navigate(`/`);
        }
    };
    return (
        <div>
            <div className="subtitle is-4 has-text-left">Id: {data.id}</div>
            <div className="subtitle is-4 has-text-left">Title: {data.title}</div>
            <div className="subtitle is-4 has-text-left">Author: {data.author}</div>
            <div className="subtitle is-4 has-text-left">PubYear: {data.pubYear}</div>
            <div className="subtitle is-4 has-text-left">ISBN: {data.isbn}</div>

            <button className=" button is-link is-light is-pulled-left  mr-6 mt-6" onClick={goBack}>Back
            </button>
            <button className=" button is-link is-pulled-left  mr-6 mt-6" onClick={changeBook}>Change Book
            </button>
            <button className="delete is-large" onClick={deleteBookButton}>
            </button>
        </div>
    )
}
export default Books

