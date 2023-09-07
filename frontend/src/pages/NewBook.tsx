import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import SendNewBook, { Data } from '../api/create';
//_FormEvent: Ereignis wenn ein Form.Element abgesendet wird. enthält inform. über das ausgelöste Ereignis
function NewBook() {

  
    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()
        //_Default = Get Request + Reload der Seite

        const target = formEvent.target as HTMLFormElement;
        const formData = new FormData(target);
        //_targets Datentyp = <Form>. DOM-Element, auf das ein Ereignis ausgelöst wird(Button)
        //_formData = speichert alles aus den InputFeldern in ein HtmlFormElement(JS Obj). autom.Iteration

        const data: Data = {
            //Data Soll wie folgt aussehen..
            title: formData.get("title") as string,
            author: formData.get("author") as string,
            isbn: formData.get("isbn") as string,
            pubYear: parseInt(formData.get("pubYear") as string)
            //form Data sind oft Strings.
        }; 
        SendNewBook(data)
        //Promise hier.then (() => { }  
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate ("/")
    };
           

    return (
        <div className="textfield">
            <form onSubmit={submitForm}>

                <input className="input is-link" name="title" type="text" placeholder="Title"></input>
                <input className="input is-link" name="author" type="text" placeholder="Author"></input>
                <input className="input is-link" name="pubYear" type="number" placeholder="Publication Year"></input>
                <input className="input is-link" name="isbn" type="text" placeholder="ISBN"></input>

                <button className="button is-link is-light is-pulled-left mr-6 mt-6" type="submit">Create</button>
                <button className="button is-link is-danger is-pulled-left mr-6 mt-6" onClick={handleClick} type="button">go Back</button>

            </form>
        </div>
    )
}
export default NewBook;