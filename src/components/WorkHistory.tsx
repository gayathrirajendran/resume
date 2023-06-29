import { Fragment, useState } from "react"
import { WorkHistoryModel } from "../models"
import Period from "./Period"



export function WorkHistory({ list }: { list: Array<WorkHistoryModel> }) {

    return (
        <div className="row">
            {/* <Parent></Parent> */}
            <div className="col-12">
                {list.map((item, index) =>
                    <div key={item.org} className={index !== 0 ? 'my-2' : ''} >
                        <WorkHistoryItem key={item.org} historyItem={item} ></WorkHistoryItem>
                    </div>
                )}
            </div>
        </div >
    )
}

export function WorkHistoryItem({ historyItem }: { historyItem: WorkHistoryModel }) {

    const [canShowDesc, setCanShowDesc] = useState(false);

    const roles = historyItem.roles.map((item, index, arr) =>
        <Fragment key={index}>
            <span className="fw-light">{item}</span>
            {index < arr.length - 1 && <span >,&nbsp;</span>}
        </Fragment>
    )

    return (
        <div key={historyItem.org} className="d-flex w-100">
            {/* TO DO : image */}
            <div key={historyItem.org} className={(historyItem.isCurrentJob ? 'current-highlight' : '') + ' description w-100'}>
                <div className="d-flex justify-content-between">
                    <div className="fw-500" key={historyItem.org}>{historyItem.org}</div>
                    <div>
                        <Period period={historyItem.period}></Period>
                    </div>
                </div>

                <div className="my-2 d-flex align-items-center">
                    Designations: &nbsp; {roles}
                </div>

                {canShowDesc && !!historyItem.desc &&
                    <div>
                        <div>Description</div>
                        <div>{historyItem.desc}</div>
                    </div>
                }
                <button type="button" className="btn btn-link p-0 m-0" onClick={() => setCanShowDesc(!canShowDesc)}>{canShowDesc ? 'Hide description' : 'Show description'}</button>
            </div>
        </div>
    )
}