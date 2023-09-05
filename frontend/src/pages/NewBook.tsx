import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateNewBook from "../api/create";
//Hier musst du evtl Link hinzufügen
function NewBook() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pubYear, setPubYear] = useState("");
    const [isbn, setIsbn] = useState("");

   // const data = CreateNewBook();

    const submitForm = (e) => {
        e.preventDefault()
        // Default = Get Request + Reload der Seite

        console.log (title, author, pubYear, isbn)
    } 
    return (

        <div className="textfield">
            <form>

                <input className="TitleInput input is-link" type="text" onChange= {(e) => {setTitle(e.target.value)}} placeholder="Title">
                    </input>
                <input className="AuthorInput input is-link" type="text" onChange= {(e) => {setAuthor(e.target.value)}} placeholder="Author">
                    </input>
                <input className="PubYearInput input is-link" type="text" onChange= {(e) => {setPubYear(e.target.value)}} placeholder="Publication Year">
                    </input>
                <input className="IsbnInput input is-link" type="text" onChange= {(e) => {setIsbn(e.target.value)}} placeholder="ISBN">
                    </input>
                
                <button
                    className=" button is-link is-light is-pulled-left"
                    onClick={submitForm}>Create
                </button>
                
            </form>
        </div>




    )
}
export default NewBook;