import get from '../api/get';
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react';
import { BookData } from '../api/BookData';
import deleteBook from '../api/delete';
import "./Book.scss"
import DeleteButton from '../components/GoToHomeButton';
function Book() {

    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        get(id).then(data => {
            setData(data)
        })
    }, [])

    //___Button goBack__________________________________________________________________
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/")
    }
    //___Button changeBook______________________________________________________________
    const changeBook = () => {
        navigate(`/book/update/${data.id}`)
    }
    //___Button deleteBook__________________________________________________________________
    const deleteBookButton = (formEvent: FormEvent) => {
        formEvent.preventDefault()

        if (confirm("Are you sure you want to delete this?") == true) {
            deleteBook(id, data).then(() => {
                navigate(`/`);
            })
        } else {
            navigate(`/`);
        }
    };
    return (

        <div>
            <button className="delete is-middle is-pulled-right mt-2 mr-2" onClick={deleteBookButton}>
            </button>
            <div className="box">
                <h5 className="title is-5">Book Information</h5>
                <article className="media">

                    <figure className="image is-16x24 mr-3">
                        <img src="https://image-placeholder.com/images/actual-size/240x400.png" alt="Placeholder" />
                    </figure>

                    <div className="media-content my-4 mx-2">
                        <div className="content">
                            <table className='table'><tbody>
                                <tr>
                                    <th>Id</th>
                                    <td>{data.id}</td>
                                </tr>
                                <tr>
                                    <th>Title</th>
                                    <td>{data.title}</td>
                                </tr>
                                <tr>
                                    <th>Author</th>
                                    <td>{data.author}</td>
                                </tr>
                                <tr>
                                    <th>Publication Year</th>
                                    <td>{data.pubYear}</td>
                                </tr>
                                <tr>
                                    <th>ISBN</th>
                                    <td>{data.isbn}</td>
                                </tr>
                            </tbody></table>
                        </div>

                    </div>
                </article>
                <div className="box-footer">
                    <button className="button is-link is-outlined is-middle" onClick={changeBook}>Change Book
                    </button>
                    <DeleteButton></DeleteButton>
                </div>
            </div>


        </div>
    )
}
export default Book

