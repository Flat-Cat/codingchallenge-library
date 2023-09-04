import getBook from '../api/getBook';
import { useParams } from 'react-router-dom'

function Books() {
    const data = getBook();
    let { id } = useParams();

    return (
        <div>

            <div className="subtitle is-4 has-text-left">Id: {data.id}</div>
            <div className="subtitle is-4 has-text-left">Title: {data.title}</div>
            <div className="subtitle is-4 has-text-left">Author: {data.author}</div>
            <div className="subtitle is-4 has-text-left">PubYear: {data.pubYear}</div>
            <div className="subtitle is-4 has-text-left">ISBN: {data.isbn}</div>

        </div>
    )
}
export default Books

