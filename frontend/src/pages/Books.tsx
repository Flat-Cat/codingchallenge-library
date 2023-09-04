import getBook from '../api/getBook';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

//react router link damit man von "list" hier her kommt 

function Books() {

    const data = getBook();
     let { id } = useParams();
   
    return (
        <div>id aus der Url: id 
             {id}  

    <div>{data.length}</div>
    
        </div>
    )
}
export default Books

