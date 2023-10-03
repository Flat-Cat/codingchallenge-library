import search from "../api/search";
import { Link, useParams } from "react-router-dom";
import SearchField from "../components/SearchField";
import { BookData } from "../api/BookData";
import { useEffect, useState } from "react";
import GoHomeButton from "../components/GoToHomeButton";
import "./SearchResult.scss"

function SearchResult() {

    const [noBooksFound, setNoBooksFound] = useState(false);
    const [data, setData] = useState<BookData[]>([])
    const { query } = useParams<{ query: string }>();

    useEffect(() => {
        search(query)

            .then(dbData => {
                if (dbData.length === 0) {
                    setNoBooksFound(true);
                    alert("No Books found")
                } else {
                    setData(dbData);
                }
            })
            .catch(error => {
                console.error("Error: " + error);
            });
    }, [query]);

    return (

        <div className="container">
            <div className="column">
                <div className="columns">
                    <SearchField></SearchField>
                    <div className="columns  py-5 px-2">
                        <GoHomeButton></GoHomeButton>
                    </div>
                </div>
            </div>
            <h5 className="subtitle is-5">Search for "{query}":</h5>
            <div className="cardGrid">

                {data.map((item, index) => (

                    <div className="card" key={index}>
                        <Link to={`/book/${item.id}`}>
                            <div className="bookHeader">

                                {/* ___________Placeholder Image___________ */}
                                <div className="bookImage">
                                    <figure className="image is-16x24">
                                        <img src="/BookCover02.jpeg" alt="Placeholder" />
                                    </figure>
                                </div>

                                {/* ___________Card-Content___________ */}
                                <div className="bookContent">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="subtitle is-6 has-text-left has-text-grey mx-5 my-2">{item.author}</p>
                                            <p className="title is-4 has-text-left mx-5 my-1">{item.title}</p>
                                            <p className="subtitle is-6 has-text-left has-text-grey-light mx-5 my-5">{item.pubYear}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ___________Card-Footer___________ */}
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span>
                                        <span className="has-text-grey-light">ISBN: </span> {item.isbn}</span>
                                </p>
                            </footer>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default SearchResult;
