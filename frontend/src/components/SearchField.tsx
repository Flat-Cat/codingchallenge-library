import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookData } from "../api/BookData";
import search from "../api/search";


function SearchField() {

    // das eingegebene mit search öffnen 
    // Variable für SearchInput
    // wert von title soll sich ändern 
    // useEffect: eher bei ascyn.Prozessesn 
    //(erst was senden, dann anfrage und antwort)

    const navigate = useNavigate();
    const { queryTitle } = useParams<{ queryTitle: string }>();
    const [query, setQuery] = useState<string>("")

    // ______inputHandler_______________________________________________________________
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // HTMLInputElement:Kann mehrere Input felder Beeinflussen

        const target = e.target as HTMLInputElement;
        setQuery(target.value);
    }

    //___submitForm_____________________________________________________________________
    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()
        //_Default = Get Request + Reload der Seite

        //___useNavigate_________________________________________________________________
        search(query)
            .then(() => {
                navigate("/")
            })
        console.log(query)
        
    }
    return (

        <form onSubmit={submitForm} className="column is-three-fifths is-offset-one-fifth">
            <div className="control">
                <input
                    className="input is-focused mb-5"
                    type="text"
                    placeholder="Search..."
                    onInput={inputHandler}>
                </input>
            </div>
        </form>
    )
}
export default SearchField;