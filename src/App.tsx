import { Link } from "react-router-dom";
import Resume from "./components/Resume";

export default function App() {
    return (
        <>
            {/* {import.meta.env.VITE_LOCATION} */}
            {/* <Welcome></Welcome> */}
            {/* <Link to="/contact-us">Create your own profile</Link> */}
            <Resume></Resume>
        </>
    )
}