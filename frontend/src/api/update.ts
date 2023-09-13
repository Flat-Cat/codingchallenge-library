import { BookData } from './BookData';
import UpdateBook from '../pages/UpdateBook';

//if(!Data.id) throw Error ("ID is missing");

//let id = UpdateBook();

function sendUpdatedBook(id:string, data: BookData) {

    console.log("ID-Wert:",);
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
