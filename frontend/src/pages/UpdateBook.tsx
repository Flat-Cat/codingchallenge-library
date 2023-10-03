import { useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import get from '../api/get';
import { BookData } from '../api/BookData';
import sendUpdatedBook from '../api/update';
import InputFields from '../components/InputFields';
import GoHomeButton from '../components/GoToHomeButton';

function UpdateBook() {
    const navigate = useNavigate();
    //___useState____________________________________________________
    const [data, setData] = useState<BookData>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        pubYear: 0
    })

    const { id } = useParams<{ id: string }>();
    ///___useEffect____________________________________________________
    useEffect(() => {
        get(id).then((modifiedBookData) => {
            setData(modifiedBookData);
            return '';
        }).catch(() => {
            console.log('error');
        })
    }, [])
    //_Function-Call[]: Hook will be triggered on render or on changes in the specified dependencies
    const submitForm = (formEvent: FormEvent) => {
        formEvent.preventDefault()

        if (id) {
            sendUpdatedBook(id, data).then(() => {
                navigate(`/book/${id}`);
            })
        } else {
            console.log("id is Undefined")
        }
    };
    const inputHandler = function (e: ChangeEvent<HTMLInputElement>) {
        //_FormEvent: Comes only from one input field
        const target = e.target as HTMLInputElement;
        const name = target.name;
        setData({ ...data, [name]: target.value });
        // [] as value should be seen as key here so we can access into the obj. (name value pair)
    }
    const pageTitle = "Update Book: " + data.title;
    // not in {} since {} contains JS code (JSX).
    // Direct concatenation in JavaScript expression; CONCAT: concatenate two or more strings
    return (

        <div className="container">
            <InputFields
                pageTitle={pageTitle}
                bookData={data}
                onInputCallBack={inputHandler}
                onSubmitCallback={submitForm}>

                <div>
                    <GoHomeButton></GoHomeButton>
                    <button
                        className="button is-primary mx-2"
                        type="submit">Save
                    </button>

                </div>

            </InputFields>
        </div>
    )
}
export default UpdateBook;
