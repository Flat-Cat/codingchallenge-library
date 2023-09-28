import { useState, useEffect } from "react";

//Hier musst du evtl Link hinzufügen
function listBooks() {
    //[] => destruktor
    //interface: def.wie ein obj.aussieht 
    interface Data {
        id: number,
        title: string,
        author: string
        isbn: string,
        pubYear: number
    }
    
    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/books`, {
            method: "get"
        })
            .then((response) => response.json())
            .then((data: Data[]) => {

                setData(data)
                // DATA: Leeres array (in der die formatierten Dateien der Arrays Iteriert wurde)
            })
    }, []);
    //Das Leeres array hier in React = führe es nur einmal aus(hooks)
    return data;
}
export default listBooks;