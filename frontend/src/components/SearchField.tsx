import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookData } from "../api/BookData";
import get from "../api/get";

// gebe ein titel ein, suche mir aber das, gebe mir die ID und zeige mir nur dieses buch per card item an in Book
function SearchField() {

    const [searchBook, setSearchBook] = useState<BookData>({
        id: 0,
        title: "hä",
        author: "",
        isbn: "",
        pubYear: 0
    })
    const inputHandler = function (e: ChangeEvent<HTMLInputElement>) {

        const target = e.target as HTMLInputElement;
        const title = target.title;
        setSearchBook({ ...searchBook, [title]: target.value });

        console.log(searchBook)
        // [], da Wert als Schlüssel hier gesehen werden soll, damit wir in das obj. zugreifen können (Namen wert paar)
    }

return (

    <form className="column is-three-fifths is-offset-one-fifth">
        <div className="control">
            <input
                className="input is-focused mb-5"
                type="text"
                placeholder="Search..."
                onChange={inputHandler}>
            </input>
        </div>
    </form>
)
}

export default SearchField;