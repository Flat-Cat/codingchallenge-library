
//ich nehme als Param. ein Obj mit diesen Eigenschaften an:
export interface Data {
    title: string,
    author: string,
    isbn: string,
    pubYear: number
}
//klein schreiben wenn kein obj zurück gegeben wird oder wenn etwas inz. wird. GOOGLE
function SendNewBook(data: Data) {

        return fetch(`http://localhost:8080/api/v1/books`, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
             .then(newData => {

                 console.log(newData);
             })
            .catch(error => {
                console.error("Fehler beim Abrufen der Daten:", error);
            });
        }

export default SendNewBook;
