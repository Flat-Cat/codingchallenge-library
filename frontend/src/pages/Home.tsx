import "./Home.scss";
import RSSFetcher from "../RSSFetcher.ts";
import { Link } from "react-router-dom";

function Home() {

    const data = RSSFetcher();
    console.log(data)
    return (

        <div>
          
            {data.map((item, index) => (
                <Link to={`articles/${index}`} key={index}>
                    <h2 className ="title is-2 ">{item.title}</h2>
                    <div className="pt-6"></div>
                </Link>
            ))}

        </div>
    )
}



export default Home