import { ChangeEvent, FormEvent, FunctionComponent, JSX } from "react";
import { BookData } from '../api/BookData';
//events geben meistens Void zurück
interface Props {
    bookData: BookData
    onSubmitCallback?: (e: FormEvent) => void
    onInputCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    children: JSX.Element
}
//_Hier onsub.callb definiert ein rerror (?)
// bookData BookData
const InputFields: FunctionComponent<Props> = (props: Props) => {

    return (
        <div className="textfield">
            <form onSubmit={props.onSubmitCallback}>

                <input
                    className="input is-warning"
                    onInput={props.onInputCallBack}
                    name="title"
                    type="text"
                    value={props.bookData.title}
                    placeholder="Title"
                    required>
                </input>
                <input
                    className="input is-warning"
                    name="author"
                    type="text"
                    value={props.bookData.author}
                    placeholder="Author"
                    required>
                </input>
                <input
                    className="input is-warning"
                    name="pubYear"
                    type="number"
                    value={props.bookData.pubYear}
                    placeholder="Publication Year"
                    required>
                </input>
                <input
                    className="input is-warning"
                    name="isbn"
                    type="text"
                    value={props.bookData.isbn}
                    placeholder="ISBN"
                    required>
                </input>
                {props.children}
            </form>
        </div >
    )
}
export default InputFields;