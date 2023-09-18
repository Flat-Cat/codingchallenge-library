import { useNavigate } from "react-router-dom";


function DeleteButton() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/`)
    }
    return (

        <button className="button is-link is-light is-outlined is-pulled-right is-middle ml-3" onClick={goBack}>
        <span className="icon">
            <i className="fas fa-arrow-left"></i> 
        </span>
    </button>
    )

}

export default DeleteButton;