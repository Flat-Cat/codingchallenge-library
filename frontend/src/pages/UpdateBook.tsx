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
    // Funk.Aufr.[]: Hook wird ausgelöst beim rendern oder bei änderungen in den angegebenen abhängigkeiten
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
        //_FormEvent: Kommt nur von eineme Input feld
        const target = e.target as HTMLInputElement;
        const name = target.name;
        setData({ ...data, [name]: target.value });
        // [], da Wert als Schlüssel hier gesehen werden soll, damit wir in das obj. zugreifen können (Namen wert paar)
    }
    const pageTitle = "Update Book: " + data.title; 
    // nicht in {} da {} JS Code beinhaltet (JSX)
    // Direkte Konkatenation in JavaScript-Ausdruck; KONKAT: zwei oder mehr Zeichenketten aneinanderzuhängen.

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
