import { SocialMediaModel } from "../models"

const SocialMediaWidget = ({ mediaObjects }: { mediaObjects: SocialMediaModel[] }) => {

    console.log(mediaObjects);

    const networkImageMap: Record<string, string> = {
        "linkedIn": "bi bi-linkedin linkedin-blue",
        "instagram": "bi bi-instagram",
        "twitter": "bi bi-twitter"
    }

    const listItems = mediaObjects.map((item: SocialMediaModel) => (
        <li key={item.title} className="list-group-item">
            <a target="_blank" href={item.link}>
                <i className={networkImageMap[item.network]}></i>
            </a>
        </li>
    ))
    return (
        <ul className="d-flex mx-3 my-0">
            {listItems}
        </ul>
    )
}

export default SocialMediaWidget