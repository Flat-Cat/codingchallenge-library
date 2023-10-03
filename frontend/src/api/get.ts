import { BookData } from "./BookData";

function get(id: string | undefined) {

    return fetch(`http://localhost:8080/api/v1/books/${id}`, {
        method: "get"
    })
        .then((response) => response.json())
        .then((data: BookData) => {

            return data;
        }
        )
}
export default get;