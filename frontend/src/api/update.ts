import { BookData } from './BookData';

function sendUpdatedBook(id:string, data: BookData) {
   
        return fetch(`http://localhost:8080/api/v1/books/${id}`, {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
             .then((modifiedBookData : BookData) => {

                return modifiedBookData;
             })
            .catch(error => {
                
                console.error ("Fehler beim Abrufen der Daten:", error);
               return false;
            });
        }
export default sendUpdatedBook;
