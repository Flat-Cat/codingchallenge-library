import { useState, useEffect } from "react";
//ToDo: Use the hook on the page, not in the API request
function listBooks() {
    //_Interface: Defines how the Obj. should look like
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
               // DATA: Empty array (in which the formatted files of the arrays were iterated)
            })
    }, []);
//The empty array here in React = execute it only once(hooks)
    return data;
}
export default listBooks;