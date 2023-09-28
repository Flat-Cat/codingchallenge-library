import { useNavigate } from "react-router-dom";


function GoHomeButton() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/`)
    }
    return (

        <button className="button is-primary is-light is-outlined" onClick={goBack}>
            <span className="icon">
                <i className="fas fa-arrow-left"></i>
            </span>
            <span>Back</span>
        </button>

    )
}

export default GoHomeButton;