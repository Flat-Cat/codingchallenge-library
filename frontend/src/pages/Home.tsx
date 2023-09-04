import listBooks from "../api/list";
import { Link, useParams } from "react-router-dom";

function Home() {

    const data = listBooks();

    return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th><abbr title="bookId">Id</abbr></th>
                            <th><abbr title="bookTitle">Title</abbr></th>
                            <th><abbr title="bookAuthor">Author</abbr></th>
                            <th><abbr title="bookPubYear">PubYear</abbr></th>
                            <th><abbr title="bookIsbn">ISBN</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>
                                <Link to={`/books/${item.id}`}>{item.title}
                                </Link>
                                </td>
                                <td>{item.author}</td>
                                <td>{item.pubYear}</td>
                                <td>{item.isbn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

export default Home;
