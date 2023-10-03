import { BookData } from "./BookData";

function search(queryTitle:string | undefined) {

        return fetch(`http://localhost:8080/api/v1/books/search?query=${queryTitle}`, {
            method: "get",
        })
        //Response mostly is a pure string
            .then((response) => response.json())
            .then((data: BookData[]) => {

                return data;  
        }
    )
}
export default search;