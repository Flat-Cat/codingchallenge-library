import "./Articles.scss";
import { useParams, useNavigate } from 'react-router-dom'
import RSSFetcher from "../api/RSSFetcher";
import Hammer, { DIRECTION_LEFT, DIRECTION_RIGHT } from "hammerjs";
import React, { useEffect } from "react";

import getBook from "../api/get";

// function Articles() {


//     const data = getBook();
//     const onClick = () => {
//         //    listBooks()
//         console.log(data);
//     }

//     return (

// <div></div>
//     )
// }

// export default Articles
