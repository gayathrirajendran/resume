import { useEffect, useState } from "react"
import ContactDetails from "./ContactDetails";
import GenericList from "./GenericList";
import { ResumeModel, WorkHistoryModel } from "../models";
import { WorkHistory } from "./WorkHistory";

export default function Resume() {
    const [data, setData] = useState<ResumeModel | null>(null);
    const fetchData = () => {
        return fetch('resume.json').then((res) => res.json()).then((response) => setData(response));
    }

    useEffect(() => { fetchData() }, []);

    function updateList(item: WorkHistoryModel) {
        data!.workHistory = data!.workHistory.map((wItem) => {
            if(wItem.org === item.org) {
                wItem.isDescShown = !wItem.isDescShown;
                return wItem;
            } else return wItem;
        })
        setData(structuredClone(data));
    }

    return (
        <main className="container-fluid my-2">
            {!!data &&
                <>
                    <header className="d-flex justify-content-between align-items-center">
                        <h2>{data.name}</h2>
                        <ContactDetails contactDetails={data.contactDetails}></ContactDetails>
                    </header>
    
                    <div>Skills:</div>
                    <GenericList list={data.skills} className="badge bg-secondary"></GenericList>
                    
                    <div>Work history:</div>
                    <WorkHistory list={data.workHistory} setList={updateList}></WorkHistory>
                </>
            }
        </main>
    )
}