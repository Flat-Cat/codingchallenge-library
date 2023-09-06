import { FormEvent } from "react";
import SendNewBook, { Data } from '../api/create';

function NewBook() {

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        //_Default = Get Request + Reload der Seite

        // Eine Art Konstruktor:
        const target = e.target as HTMLFormElement;
        // e.targets Datentyp ist <Form>. = Das target indem ein event passiert ist vom Datentyp ein HTMLFormElement(<form>)
        //_e.target = DOM-Element, auf das ein Ereignis ausgelöst wurde: Repräsentiert den Knopfdruck.
        const formData = new FormData(target);
        //_formData = speichert alles aus den InputFeldern in ein HtmlFormElement
        // formData = DatenObj, anders strukturiert. autom.Iteration
        
        const data: Data = { 
            //payloard soll wie data aussehen..
            title: formData.get("title") as string, 
            author: formData.get("author") as string,
            isbn: formData.get("isbn") as string,
            pubYear: parseInt(formData.get("pubYear") as string),
            //form Elements sind oft String //warum kann ich as string nicht wegmachen?
        };
       SendNewBook(data) ;
        
    }

    return (

        <div className="textfield">
            <form onSubmit={submitForm}>

                <input className="input is-link" name="title" type="text" placeholder="Title">
                </input>
                <input className="input is-link" name="author" type="text" placeholder="Author">
                </input>
                <input className="input is-link" name="pubYear" type="number" placeholder="Publication Year">
                </input>
                <input className="input is-link" name="isbn" type="text" placeholder="ISBN">
                </input>

                <button className=" button is-link is-light is-pulled-left">Create</button>

            </form>
        </div>




    )
}
export default NewBook;