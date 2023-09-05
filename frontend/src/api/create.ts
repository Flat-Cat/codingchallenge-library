import { useState, useEffect } from "react";

function CreateNewBook() {

    interface Data {
        title: string,
        author: string,
        isbn: string,
        pubYear: number
    }
    const [data, setData] = useState<Data>({
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    });

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/books`, {
            method: "post"
        })
            .then(response => response.json())
            .then(newData => {
                setData(newData); // Hier sollte newData statt data verwendet werden
                console.log(newData);
            })
            .catch(error => {
                console.error("Fehler beim Abrufen der Daten:", error);
            });
    }, [data]);

    return data;
}

export default CreateNewBook;
