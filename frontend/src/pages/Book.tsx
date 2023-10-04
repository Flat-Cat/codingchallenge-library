import get from '../api/get';
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react';
import { BookData } from '../api/BookData';
import deleteBook from '../api/delete';
import "./Book.scss"
import GoHomeButton from '../components/GoToHomeButton';
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

    //___Button changeBook______________________________________________________________
    const navigate = useNavigate();
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

        <div className="container">
            <h4 className="title is-4 has-text-left has-text-grey-dark">Book Information</h4>


            <div className="card">
                <div className="bookHeader">
                    {/* ___________Placeholder Image___________ */}
                    <div className="column">
                        <figure className="image is-16x24">
                            <img src="/BookCover02.jpeg" alt="Placeholder" />
                        </figure>
                    </div>

                    {/* ___________Card-Content___________ */}
                    <div className="column my-4">
                        <div className="content">
                            <table className="table">
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* ___________Card-Footer___________ */}
                <div className="box-footer py-3 px-3">

                    <GoHomeButton></GoHomeButton>
                    <button className="button is-danger is-light is-outlined mx-3" onClick={deleteBookButton}>
                        <span className="icon">
                            <i className="fas fa-solid fa-trash"></i>
                        </span>
                        <span>Delete</span>
                    </button>
                    <button className="button is-primary" onClick={changeBook}>
                        Change
                    </button>

                </div>
            </div>
        </div>

    )
}
export default Book

