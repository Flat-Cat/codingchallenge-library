import listBooks from "../api/list";

function Home() {
    
    const data = listBooks();
    // const onClick = () => {

    //     console.log(data);
    // }

    return (
        <>
        <div>
            {/* <button
                className="button is-primary"
                onClick={onClick}>
                Get all Books
            </button> */}

        </div><div className="container">
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
                        {data.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.pubYear}</td>
                            <td>{item.isbn}</td> 
                        </tr>
                        
                        ))}
                    </tbody>
                </table>
            </div>
        </>


    )
}

export default Home;
