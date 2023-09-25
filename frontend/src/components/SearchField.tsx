import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import search from "../api/search";

function SearchField() {

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

        search(query)

            .then(dbData =>
                console.log(dbData)
            )
            .catch(error => {
                console.error(error);
            });
    /*_So nicht! 
    search(query)
    .then(() => {search(query)
    console.log(search(query)) }) */

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