import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Hier musst du evtl Link hinzufügen
function getBook() {
    //[] => destruktor
    //interface: def.wie ein obj.aussieht 
    interface Data {
        id: number,
        title: string,
        author: string
        isbn: string,
        pubYear: number
    }
    const [data, setData] = useState<Data>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })

    const { id } = useParams<{ id: string }>();
// ${} = Hier will ich eine var. benutzen
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/books/${id}`, {
            method: "get"
        })
            .then((response) => response.json())
            .then((data: Data) => {

                setData(data)
                console.log(data)
                // DATA: Leeres array (in der die formatierten Dateien der Arrays Iteriert wurde)
            })
    }, []);

    //Das Leeres array hier in React = führe es nur einmal aus(hooks)
    return data;
}
export default getBook;