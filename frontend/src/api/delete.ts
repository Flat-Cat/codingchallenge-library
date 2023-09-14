import { BookData } from './BookData';


//Hier musst du evtl Link hinzufügen
function deleteBook(id: string | undefined, data: BookData)
{
    return fetch(`http://localhost:8080/api/v1/books/${id}`, {
        method: "delete",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then((deletedBookData : BookData) => {

            return deletedBookData;
         })


        // .catch(error => {

        //     console.error("Fehler beim Abrufen der Daten:", error);
        //     return false;
        // });

}

export default deleteBook;