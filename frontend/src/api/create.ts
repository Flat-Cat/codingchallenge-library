import { BookData } from "./BookData";

function SendNewBook(data: BookData) {

        return fetch(`http://localhost:8080/api/v1/books`, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .catch(error => {
                console.error("Fehler beim Abrufen der Daten:", error);
            });
        }

export default SendNewBook;
