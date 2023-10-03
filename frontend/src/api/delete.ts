import { BookData } from './BookData';

function deleteBook(id: string | undefined, data: BookData) {
    return fetch(`http://localhost:8080/api/v1/books/${id}`, {
        method: "delete",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then((deletedBookData: BookData) => {

            return deletedBookData;
        })
}

export default deleteBook;