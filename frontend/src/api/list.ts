import { BookData } from '../api/BookData';


function listBooks() {

    return fetch(`http://localhost:8080/api/v1/books`, {
        method: "get"
    })
        .then((response) => response.json())
        .then((data: BookData[]) => {

            return data;
        })
}
export default listBooks;