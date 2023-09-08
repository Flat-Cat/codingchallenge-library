import { useParams } from "react-router-dom"
import { BookData } from "./BookData";

const { id } = useParams<{ id: string }>();

function SendNewBook(data: BookData) {

        return fetch(`http://localhost:8080/api/v1/books/${id}`, {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
             .then((newUpdatedData : BookData) => {
                //XNEW:
                return newUpdatedData;
               
             })
            .catch(error => {
                console.error ("Fehler beim Abrufen der Daten:", error);
               return false;
            });
        }

export default SendNewBook;
