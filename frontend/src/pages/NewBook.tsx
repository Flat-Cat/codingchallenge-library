import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SendNewBook from '../api/create';
import { BookData } from '../api/BookData';
import InputFields from "../components/InputFields";

//_FormEvent: Ereignis wenn ein Form.Element abgesendet wird. enthält inform. über das ausgelöste Ereignis
function NewBook() {

    //___useState________________________________________________________________________
    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })
    //___inputHandler_____________________________________________________________________
    const inputHandler = function (e: ChangeEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;
        const name = target.name;
        setData({ ...data, [name]: target.value });
        // [], da Wert als Schlüssel hier gesehen werden soll, damit wir in das obj. zugreifen können (Namen-wert paar)
    }
    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()
        //_Default = Get Request + Reload der Seite

        SendNewBook(data)
            .then(() => {
                navigate("/")
            })
    };
    //___useNavigate_____________________________________________________________________
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }; 
    return (
        <div className="textfield">

            <InputFields
                bookData={data}
                onInputCallBack={inputHandler}
                onSubmitCallback={submitForm}>
                <button
                    className="button is-link is-pulled-left mr-6 mt-6"
                    type="submit">Create
                </button></InputFields>

            <button
                className="button is-link is-light is-pulled-left mr-6 mt-6"
                onClick={handleClick}
                type="button">Back</button>
        </div>
    )
}
export default NewBook;