import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SendNewBook from '../api/create';
import { BookData } from '../api/BookData';
import InputFields from "../components/InputFields";

//_FormEvent: Ereignis wenn ein Form.Element abgesendet wird. enthält inform. über das ausgelöste Ereignis
function NewBook() {

    //const { id } = useParams<{ id: string }>();

    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })

    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()
        //_Default = Get Request + Reload der Seite

        const target = formEvent.target as HTMLFormElement;
        const formData = new FormData(target);
        //_targets Datentyp = <Form>. DOM-Element, auf das ein Ereignis ausgelöst wird(Button)
        //_formData = speichert alles aus den InputFeldern in ein HtmlFormElement(JS Obj). autom.Iteration

        const data: BookData = {
            //Data Soll wie folgt aussehen..
            title: formData.get("title") as string,
            author: formData.get("author") as string,
            isbn: formData.get("isbn") as string,
            pubYear: parseInt(formData.get("pubYear") as string)
            //form Data sind oft Strings.
        };
        SendNewBook(data)
            .then(() => {
                navigate("/")
            })
    };
    //___inputHandler____________________________________________________________________-
    const inputHandler = function (e: ChangeEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;
        const name = target.name;
        setData({ ...data, [name]: target.value });
        // [], da Wert als Schlüssel hier gesehen werden soll, damit wir in das obj. zugreifen können (Namen-wert paar)
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    };1
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