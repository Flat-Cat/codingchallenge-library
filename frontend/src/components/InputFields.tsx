import { ChangeEvent, FormEvent, FunctionComponent, JSX } from "react";
import { BookData } from '../api/BookData';
import "./InputFields.scss"

//events geben meistens Void zurück
interface Props {
    pageTitle: string;
    bookData: BookData
    onSubmitCallback?: (e: FormEvent) => void
    onInputCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    children: JSX.Element

}

//_Hier onsub.callb definiert ein rerror (?)

const InputFields: FunctionComponent<Props> = (props: Props) => {

    return (

        
        <div className="box">
            <h4 className="title is-4 has-text-left has-text-grey-lighter">{props.pageTitle}</h4>

            <article className="field">
                <div className="textfield">
                    <form onSubmit={props.onSubmitCallback}>

                        <h4 className="subTitle">Title</h4>
                        <input
                            className="input mb-3"
                            onInput={props.onInputCallBack}
                            name="title"
                            type="text"
                            value={props.bookData.title}
                            placeholder="..."
                            required>
                        </input>
                        <h4 className="subTitle">Author Name</h4>
                        <input
                            className="input mb-3"
                            onInput={props.onInputCallBack}
                            name="author"
                            type="text"
                            value={props.bookData.author}
                            placeholder="..."
                            required>
                        </input>
                        <h4 className="subTitle">Publication Year</h4>
                        <input
                            className="input mb-3"
                            onInput={props.onInputCallBack}
                            name="pubYear"
                            type="number"
                            value={props.bookData.pubYear}
                            placeholder="0000"
                            required>
                        </input>

                        <h4 className="subTitle">ISBN</h4>
                        <input
                            className="input mb-3"
                            onInput={props.onInputCallBack}
                            name="isbn"
                            type="text"
                            value={props.bookData.isbn}
                            placeholder="..."
                            required>
                        </input>

                        <div className="box-footer">
                            {props.children}
                        </div>
                    </form>
                </div >

            </article>
        </div>
    )
}
export default InputFields;