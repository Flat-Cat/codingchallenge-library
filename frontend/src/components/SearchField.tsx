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
        formEvent.preventDefault();

        const trimmedQuery = query.trim();
        
        if (trimmedQuery === "") {
            alert("You have not entered anything :(");
        } else {
            navigate(`/searchresult/${trimmedQuery}`);
        }
    }
    return (

        <form onSubmit={submitForm} className="column is-three-fifths is-offset-one-fifth is-primary mb-4">

            <div className="control">
                <input
                    className="input is-focused is-primary"
                    type="text"
                    placeholder="Search..."
                    onInput={inputHandler}>
                </input>
            </div>
        </form>
    )
}
export default SearchField;