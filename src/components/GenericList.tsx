export default function GenericList({ list, listClassName, className }: { list: Array<string>, listClassName?: string, className: string }) {
    const listItems = list.map((item) =>
        <li key={item} className="list-group-item">
            <span className={className}>{item}</span>
        </li>);
    return (
        <>
            <ul className={ listClassName }>{listItems}</ul>
        </>
    )
}