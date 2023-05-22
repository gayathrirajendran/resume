import { PeriodModel } from "../models";

export default function Period({ period }: { period: PeriodModel }) {

    function getDate(date: Date): string {
        return Intl.DateTimeFormat(userLocale, { month: 'short', day: "numeric", year: 'numeric' }).format(new Date(date));
    }

    const userLocale =
        navigator.languages && navigator.languages.length
            ? navigator.languages[0]
            : navigator.language;

    const start = getDate(new Date(period.startTime))
    const end = !!period.endTime ? getDate(new Date(period.endTime)) : 'Present'

    return (
        <span>{start}&nbsp;-&nbsp;{end}</span>
    )
} 