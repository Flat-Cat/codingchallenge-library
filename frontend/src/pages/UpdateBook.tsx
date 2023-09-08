import { useNavigate, useParams } from 'react-router-dom'
import SendUpdatedBook from '../api/update';
import { ChangeEvent, FormEvent, useState } from 'react';
import getBook from '../api/getBook';
import { BookData } from '../api/BookData';

function UpdateBook() {

    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
     })
   
    const { id } = useParams<{ id: string }>();

    //XNEW Nicht das:
    //let data = getBook(id);
    //const data = getBook(); hiergebe ich das in data raus die anfangsdaten
      
    //DAS: 
    getBook(id).then (data => {
        setData(data)
    })

    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()
    };

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
//XNEW
const titleHandler = function (e: ChangeEvent<HTMLInputElement>) {

    const target = e.target as HTMLInputElement;
    console.log(target.value)
    setData ({
        ...data, title:target.value
    })

    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input className="input is-link" onChange={titleHandler} name="title" type="text" value={data.title}></input>
                <input className="input is-link"  name="author" type="text" value={data.author}></input>
                <input className="input is-link"  name="pubYear" type="number" value={data.pubYear}></input>
                <input className="input is-link"  name="isbn" type="text" value={data.isbn}></input>

                <button className="button is-link is-light is-pulled-left mr-6 mt-6" type="submit">Change Book</button>
                {/* <button className="button is-link is-pulled-left mr-6 mt-6" onClick={handleClick} type="button">go Back</button> */}

            </form>

            <button
                className=" button is-link is-light is-pulled-left mr-6 mt-6"
                onClick={goBack}>Back
            </button>
        </div>
    )
}
export default UpdateBook;

