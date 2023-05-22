import { ContactInfoModel } from "../models";

export default function ContactDetails({ contactDetails }: { contactDetails: ContactInfoModel }) {

    function handleContact(contactDetails: ContactInfoModel) {
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