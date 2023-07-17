import { useEffect, useState } from "react"
import GenericList from "./GenericList";
import { ResumeModel } from "../models";
import { WorkHistory } from "./WorkHistory";
import ContactUs from "./ContactUs";
import Header from "./Header";
import GenericSummary from "./GenericSummary";
import SocialMediaWidget from "./SocialMediaWidget";


export default function Resume() {
    const [data, setData] = useState<ResumeModel | null>(null);
    const fetchData = () => {
        return fetch('resume.json').then((res) => res.json()).then((response) => setData(response));
    }

    useEffect(() => { fetchData() }, []);

    return (
        <main>
            {!!data &&
                <>
                    <Header title={data.name} designation={data.occupation}>
                        <div className="d-flex align-items-center">
                            <SocialMediaWidget mediaObjects={data.socialMedia}></SocialMediaWidget>
                            <ContactUs contactDetails={data.contactDetails}></ContactUs>
                        </div>
                        <a className="d-flex mt-2 justify-content-end text-decoration-none" target="_blank" href={import.meta.env.VITE_GOOGLE_MAP}>
                            <i className="bi bi-geo-alt-fill"></i>
                            {import.meta.env.VITE_LOCATION}
                        </a>
                    </Header>
                    {/* <header className="d-flex justify-content-between align-items-center">
                        <h2>{data.name}</h2>
                    </header> */}

                    <div className="container">
                        <GenericSummary title={'Summary'} desc={data.summary}></GenericSummary>

                        <GenericSummary title={'Skills'}>
                            <GenericList list={data.skills} listClassName="d-flex gap-2 p-0 m-0" className="badge bg-secondary fw-400"></GenericList>
                        </GenericSummary>

                        <GenericSummary title={'Work History'}>
                            <WorkHistory list={data.workHistory}></WorkHistory>
                        </GenericSummary>
                    </div>

                    {/* <Link to="contact-us" state={data.contactDetails}>Write to us!</Link>
                    <Outlet></Outlet> */}
                </>
            }
        </main>
    )
}