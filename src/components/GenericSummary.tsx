export type SummaryModel = {
    title: string;
    desc?: string;
    children?: any;
}

const GenericSummary = ({ title, desc, children }: SummaryModel) => {
    return (
        <article>
            <h4 className="heading">{title}</h4>
            {desc &&
                <p className="description">{desc}</p>
            }
            {children && <>{children}</>}
        </article>
    )
}

export default GenericSummary