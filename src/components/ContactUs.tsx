import { ContactInfoModel } from "../models";

type Props = {
    contactDetails: ContactInfoModel
}

const ContactUs = ({ contactDetails }: Props) => {
    const addr = `mailto: ${contactDetails.email}`
    return (
        <a href={addr}>Email me</a>
    )
}

export default ContactUs