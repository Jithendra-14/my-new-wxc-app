import { PrimaryButton } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import "../MainContainer/mainContainer.scss";
import { Constants } from "../constants/Constants";
// import errorImage from '../../icons/images/errorImage.png'

export const ErrorNotFound = () => {
    const navigate = useNavigate();

    let handleClick = (props: any) => {
        navigate('')

    }
    return (
        <main>
            <section className="error-section">
                <h3 className="error-message">{ Constants.OopsThisPageDoesNotExist }</h3>
                <PrimaryButton text="Go Back to Home" onClick={handleClick} allowDisabledFocus />
            </section>


        </main>
    )
}