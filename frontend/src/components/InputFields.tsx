import { ChangeEvent, FormEvent, FunctionComponent, JSX } from "react";
import { BookData } from '../api/BookData';
import "./InputFields.scss"

//events return mostly void
interface Props {
    pageTitle: string;
    bookData: BookData
    onSubmitCallback?: (e: FormEvent) => void
    onInputCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    children: JSX.Element
}

const InputFields: FunctionComponent<Props> = (props: Props) => {

    return (

        <>
        <div className="column">
            <h4 className="title is-4 has-text-left has-text-grey-dark">{props.pageTitle}</h4>
        </div>

        <div className="box">
                <article className="field">
                    <div className="textfield">
                        <form onSubmit={props.onSubmitCallback}>

                            <h4 className="subTitle">Title</h4>
                            <input
                                className="input mb-3 is-primary"
                                onInput={props.onInputCallBack}
                                name="title"
                                type="text"
                                value={props.bookData.title}
                                placeholder="Book Title..."
                                required>
                            </input>
                            <h4 className="subTitle">Author Name</h4>
                            <input
                                className="input mb-3 is-primary"
                                onInput={props.onInputCallBack}
                                name="author"
                                type="text"
                                value={props.bookData.author}
                                placeholder="Author Name..."
                                required>
                            </input>
                            <h4 className="subTitle">Publication Year</h4>
                            <input
                                className="input mb-3 is-primary"
                                onInput={props.onInputCallBack}
                                name="pubYear"
                                type="number"
                                value={props.bookData.pubYear}
                                placeholder="Publication Year..."
                                required>
                            </input>

                            <h4 className="subTitle">ISBN</h4>
                            <input
                                className="input mb-3 is-primary"
                                onInput={props.onInputCallBack}
                                name="isbn"
                                type="text"
                                value={props.bookData.isbn}
                                placeholder="ISBN..."
                                required>
                            </input>

                            <div className="box-footer">
                                {props.children}
                            </div>
                        </form>
                    </div>

                </article>
            </div></>
    )
}
export default InputFields;