import listBooks from "../api/list";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const data = listBooks();

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/new";
        navigate(path);
    }

    return (
        <div className="container">
            <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr className="has-background-grey-lighter">
                        <th><div title="bookId">ID</div></th>
                        <th><div title="bookTitle">Title</div></th>
                        <th><div title="bookAuthor">Author</div></th>
                        <th><div title="bookPubYear">PubYear</div></th>
                        <th><div title="bookIsbn">ISBN</div></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td><Link to={`/book/${item.id}`}>{item.title}
                            </Link></td>
                            <td>{item.author}</td>
                            <td>{item.pubYear}</td>
                            <td>{item.isbn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
                className=" button is-link is-light is-pulled-left"
                onClick={routeChange}>Create a new entry
            </button>

        </div>
    )
}

export default Home;
