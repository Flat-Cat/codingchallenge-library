import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SendNewBook from '../api/create';
import { BookData } from '../api/BookData';
import InputFields from "../components/InputFields";
import GoHomeButton from "../components/GoToHomeButton";

//_FormEvent: event when a Form-element is sent. contains inform. about the triggered event.
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
        // [], since value should be seen as the key here so we can access into the obj. (name-value pair).
    }
    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()
        //_Default = Get Request + page-reload

        //___useNavigate_____________________________________________________________________
        SendNewBook(data)
            .then(() => {
                navigate("/")
            })
    };

    return (

        <div className="container">
            <InputFields
                pageTitle={pageTitle}
                bookData={data}
                onInputCallBack={inputHandler}
                onSubmitCallback={submitForm}>

                <div>
                    <GoHomeButton></GoHomeButton>
                    <button
                        className="button is-primary mx-2"
                        type="submit">Save
                    </button>
                </div>
            </InputFields>
        </div>
    )
}
export default NewBook;