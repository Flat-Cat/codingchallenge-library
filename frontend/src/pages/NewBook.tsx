import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SendNewBook from '../api/create';
import { BookData } from '../api/BookData';
import InputFields from "../components/InputFields";
import DeleteButton from "../components/goToHomeButton";


//_FormEvent: Ereignis wenn ein Form.Element abgesendet wird. enthält inform. über das ausgelöste Ereignis
function NewBook() {

    const pageTitle = "Create a new Entry"
    const navigate = useNavigate();
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

        //___useNavigate_____________________________________________________________________
        SendNewBook(data)
            .then(() => {
                navigate("/")
            })
    };

    return (
        <div className="textfield">

            <InputFields
                pageTitle={pageTitle}
                bookData={data}
                onInputCallBack={inputHandler}
                onSubmitCallback={submitForm}>

                <div>
                    <button
                        className="button is-link"
                        type="submit">Create
                    </button>
                    <DeleteButton></DeleteButton>
                </div>

            </InputFields>

        </div>

    )
}
export default NewBook;