export default function GenericList({ list, className }: { list: Array<string>, className: string }) {
    const listItems = list.map((item) =>
        <li key={item} className="list-group-item">
            <span className={className}>{item}</span>
        </li>);
    return (
        <>
            <ul className="list-group">{listItems}</ul>
        </>
    )
}