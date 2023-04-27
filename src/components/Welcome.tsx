import sammy from './../img/sammy.jpeg';
import '../css/main.css';

export function Welcome() {
    return (
        <>
        <div className="welcome-class">
            <img src={sammy} />
            This is going to be the coolest class in the world!
        </div>
        </>
    );
}