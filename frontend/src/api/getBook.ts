import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookData } from "./BookData";


//Hier musst du evtl Link hinzufügen
function getBook(id:string | undefined) {

        return fetch(`http://localhost:8080/api/v1/books/${id}`, {
            method: "get"
        })
            .then((response) => response.json())
            .then((data: BookData) => {

                return data;
                
        }
    )
}
export default getBook;