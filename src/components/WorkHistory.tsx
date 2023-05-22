import { useState } from "react"
import { WorkHistoryModel } from "../models"
import Period from "./Period"

export function WorkHistory({ list }: { list: Array<WorkHistoryModel> }) {

    return (
        <div className="row">
            <div className="col-6 p-2">
                {list.map((item) => <WorkHistoryItem key={item.org} historyItem={item}></WorkHistoryItem>)}
            </div>
        </div>
    )
}

export function WorkHistoryItem({ historyItem }: { historyItem: WorkHistoryModel }) {

    const [canShowDesc, setCanShowDesc] = useState(false);

    const roles = historyItem.roles.map((item, index) =>
        <div className="my-2" key={index}>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-light">{item}</span>
            </div>
        </div>
    )

    return (
        <div key={historyItem.org} className="d-flex card">
            {/* TO DO : image */}
            <div key={historyItem.org} className={historyItem.isCurrentJob ? 'current-highlight' : ''}>
                <div className="d-flex justify-content-between">
                    <div className="text-decoration-underline fw-bold" key={historyItem.org}>{historyItem.org}</div>
                    <div>
                        <Period period={historyItem.period}></Period>
                    </div>
                </div>

                <div>
                    {roles}
                </div>
                <button type="button" className="btn btn-link" onClick={() => setCanShowDesc(!canShowDesc) }>Show description</button>
                {canShowDesc && !!historyItem.desc &&
                    <div>
                        <div>Description</div>
                        <div>{historyItem.desc}</div>
                    </div>
                }
            </div>
        </div>
    )
}