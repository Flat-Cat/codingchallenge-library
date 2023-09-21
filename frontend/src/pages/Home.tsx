import listBooks from "../api/list";
import { Link } from "react-router-dom";
import "./Home.scss"
import SearchField from "../components/SearchField";

function Home() {

    const data = listBooks();


    return (

        <div className="container">
            <SearchField></SearchField>
            <div className="cardGrid">

                {data.map((item, index) => (

                    <div className="card" key={index}>
                        <Link to={`/book/${item.id}`}>
                            <div className="bookHeader">

                                {/* ___________Placeholder Image___________ */}
                                <div className="bookImage">
                                    <figure className="image is-16x24">
                                        <img src="https://image-placeholder.com/images/actual-size/240x400.png" alt="Placeholder" />
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

export default Home;
