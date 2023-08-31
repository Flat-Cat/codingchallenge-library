import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function getBook() {
    //[] => destruktor
    //interface: def.wie ein obj.aussieht 
    interface getBook {
        id: number,
        title: string,
        author: string
        isbn: string,
        pubDate: number
    }
    const [getBook, setgetBook] = useState<getBook[]>([])
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/getGetBooks/{id}", {
            method: "get"
        })
            .then((response) => response.json())
            .then((getBook: getBook[]) => {

                setgetBook(getBook)
                console.log(getBook)
                // DATA: Leeres array (in der die formatierten Dateien der Arrays Iteriert wurde)
            })
    }, [id]);
    //Das Leeres hier array in React = führe es nur einmal aus(hooks)
    return getBook;
}
export default getBook;



