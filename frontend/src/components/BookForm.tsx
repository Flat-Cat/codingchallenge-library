import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import SendNewBook from '../api/create';
import { BookData } from "../api/BookData";

//_FormEvent: Ereignis wenn ein Form.Element abgesendet wird. enthält inform. über das ausgelöste Ereignis
function NewBook() {

  
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
        //Promise hier.then (() => { }  

        .then (() => {

                navigate ("/")
        })
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate ("/")
    };
    return (
        <div className="textfield">
            <form onSubmit={submitForm}>

                <input className="input is-link" name="title" type="text" placeholder="Title" required></input>
                <input className="input is-link" name="author" type="text" placeholder="Author" required></input>
                <input className="input is-link" name="pubYear" type="number" placeholder="Publication Year" required></input>
                <input className="input is-link" name="isbn" type="text" placeholder="ISBN" required></input>

                <button className="button is-link is-pulled-left mr-6 mt-6" type="submit">Create</button>
                <button className="button is-link is-light is-pulled-left mr-6 mt-6" onClick={handleClick} type="button">Back</button>

            </form>
        </div>
    )
}
export default NewBook;