type HeaderModel = {
    title: string;
    designation: string;
    children: any;
}

const Header = ({ title, designation, children }: HeaderModel) => {
    return (
        <header className="sticky-top header py-3">
            <div className="container d-flex align-items-center justify-content-between">
                <div>
                    <h1 className="brand">{title}</h1>
                    <div className="d-flex">
                        <div>{designation}</div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Header