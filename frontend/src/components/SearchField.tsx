import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import search from "../api/search";
import { BookData } from "../api/BookData";
import { useNavigate } from "react-router-dom";

function SearchField() {

    const navigate = useNavigate();
    const [query, setQuery] = useState<string>("")

    // ______inputHandler_______________________________________________________________
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // HTMLInputElement:Kann mehrere Input felder Beeinflussen
        const target = e.target as HTMLInputElement;
        setQuery(target.value);
    }
    //___submitForm_____________________________________________________________________
    const submitForm = (formEvent: FormEvent) => {
        if (query) {
        formEvent.preventDefault()
        //_Default = Get Request + Reload der Seite
        navigate(`/searchresult/${query}`);
        } else {
            console.log("empty string?")
        }
    }
    return (

        <form onSubmit={submitForm} className="column is-three-fifths is-offset-one-fifth is-primary">
            
            <div className="control">
                <input
                    className="input is-primary"
                    type="text"
                    placeholder="Search..."
                    onInput={inputHandler}>
                </input>
            </div>
        </form>
    )
}
export default SearchField;