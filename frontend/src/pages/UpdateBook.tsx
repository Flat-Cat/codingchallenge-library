import { useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import getBook from '../api/getBook';
import { BookData } from '../api/BookData';
import sendUpdatedBook from '../api/update';

function UpdateBook() {

    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getBook(id).then((modifiedBookData) => {
            setData(modifiedBookData);
            return '';
        }).catch(() => {
            console.log('error');
        })
    }, [])
    // Funk.Aufr.[]: Hook wird ausgelöst beim rendern oder bei änderungen in den angegebenen abhängigkeiten
    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()

        if (id) {
            sendUpdatedBook(id, data).then (() => {
                navigate(`/books/${id}`);
            })        
        } else {
            console.log("id is Undefined")
        }
    };
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/books/${id}`)
    }
    const inputHandler = function (e: ChangeEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;
        const name = target.name;
        setData({ ...data, [name]: target.value });
        // [], da Wert als Schlüssel hier gesehen werden soll, damit wir in das obj. zugreifen können (Namen wert paar)
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <input
                    className="input is-link"
                    onInput={inputHandler}
                    name="title"
                    type="text"
                    value={data.title}
                />
                <input
                    className="input is-link"
                    onInput={inputHandler}
                    name="author"
                    type="text"
                    value={data.author}
                />
                <input
                    className="input is-link"
                    onInput={inputHandler}
                    name="pubYear"
                    type="text"
                    value={data.pubYear}
                />
                <input
                    className="input is-link"
                    onInput={inputHandler}
                    name="isbn"
                    type="text"
                    value={data.isbn}
                />
                <button className="button is-link is-light is-pulled-left mr-6 mt-6" type="submit">Change Book</button>
            </form>
            <button
                className=" button is-link is-light is-pulled-left mr-6 mt-6"
                onClick={goBack}>Back
            </button>
        </div>
    )
}
export default UpdateBook;

