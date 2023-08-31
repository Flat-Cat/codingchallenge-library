import listBooks from "../api/list";

function Home() {

    const data = listBooks();
    const onClick = () => {
        //    listBooks()
        console.log(data);
    }

    return (
        <div>
            <button
                className="button is-primary"
                onClick={onClick}>
                Get all Books
            </button>
        </div>

    )
}

export default Home;
