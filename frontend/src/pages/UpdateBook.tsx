import { useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import get from '../api/get';
import { BookData } from '../api/BookData';
import sendUpdatedBook from '../api/update';
import InputFields from '../components/InputFields';

function UpdateBook() {
    //___useState____________________________________________________
    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })

    const { id } = useParams<{ id: string }>();
    ///___useEffect____________________________________________________
    useEffect(() => {
        get(id).then((modifiedBookData) => {
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
            sendUpdatedBook(id, data).then(() => {
                navigate(`/books/${id}`);
            })
        } else {
            console.log("id is Undefined")
        }
    };
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/`)
    }
    const inputHandler = function (e: ChangeEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;
        const name = target.name;
        setData({ ...data, [name]: target.value });
        // [], da Wert als Schlüssel hier gesehen werden soll, damit wir in das obj. zugreifen können (Namen wert paar)
    }
    return (
        <div>

            <InputFields
                bookData={data}
                onInputCallBack={inputHandler}
                onSubmitCallback={submitForm}>

                <button className="button is-link is-pulled-left mr-6 mt-6">Change Book
                </button></InputFields>

            <button className=" button is-link is-light is-pulled-left mr-6 mt-6" onClick={goBack}>Back
            </button>
        </div>
    )
}
export default UpdateBook;
