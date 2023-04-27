import { useEffect, useState } from "react"

export default function Resume() {

    const [data, setData] = useState<any>(null);

    const fetchData = () => {
        return fetch('/src/assets/data/resume.json').then((res) => res.json()).then((response) => setData(response));
    }

    useEffect(() => { fetchData() }, []);

    return (
        <>
            <h1>Resume</h1>
            Name: {data?.name}
            {/* {JSON.stringify(data)} */}
        </>
    )
}