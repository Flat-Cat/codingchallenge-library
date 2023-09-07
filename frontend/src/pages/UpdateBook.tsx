import getBook from '../api/getBook';
import { useNavigate } from 'react-router-dom'

function UpdateBook() {
    const data = getBook();

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>

            <div className="subtitle is-4 has-text-left">Id: {data.id}</div>
            <div className="subtitle is-4 has-text-left">Title: {data.title}</div>
            <div className="subtitle is-4 has-text-left">Author: {data.author}</div>
            <div className="subtitle is-4 has-text-left">PubYear: {data.pubYear}</div>
            <div className="subtitle is-4 has-text-left">ISBN: {data.isbn}</div>

            {/* <form onSubmit={updateForm}> */}

            {/*<form>
                <input className="input is-link" name="title" type="text" placeholder="Title">{data.title}</input>
                <input className="input is-link" name="author" type="text" placeholder="Author">{data.author}</input>
                <input className="input is-link" name="pubYear" type="number" placeholder="Publication Year">{data.pubYear}</input>
                <input className="input is-link" name="isbn" type="text" placeholder="ISBN">{data.isbn}</input>

                <button className="button is-link is-light is-pulled-left mr-6 mt-6" type="submit">Create</button>
                <button className="button is-link is-pulled-left mr-6 mt-6" onClick={handleClick} type="button">go Back</button>

            </form> */}

            <button
                className=" button is-link is-light is-pulled-left mr-6 mt-6"
                onClick={goBack}>Back
            </button>
        </div>
    )
}
export default UpdateBook;

