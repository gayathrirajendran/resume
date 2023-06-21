import { ContactInfoModel } from "../models";
import { useNavigate } from "react-router-dom";

export default function ContactDetails({ contactDetails }: { contactDetails: ContactInfoModel }) {
    const navigate = useNavigate();

    function handleContact(contactDetails: ContactInfoModel) {
        navigate('/contact-us', { state: contactDetails });
        console.log(contactDetails, 'contact details');
        // TO DO: route to another page which can allow the user to fill a form and reach the contact
    }

    return (
        <>
            {!!contactDetails &&
                <button className="btn btn-primary" onClick={() => handleContact(contactDetails)}>Contact me</button>
            }
        </>
    )
}