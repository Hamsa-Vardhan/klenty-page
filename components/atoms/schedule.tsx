import { NextPage } from "next"
import { IconType } from "react-icons/lib"

interface Detail {
    val: number;
    context: "today" | "upcoming" | "awaiting approval" | "errors" | "overdue"
}

export interface ScheduleCompProps {
    Icon: IconType;
    totalVal: number;
    details: Detail[];
    heading: string;
}
const Schedule: NextPage<ScheduleCompProps> = ({ Icon, totalVal, details, heading }) => {

    return (
        <>
            <div className="schedule" >
                <div className="schedule-heading">
                    <span>
                        <Icon />
                        <h3> {heading + " scheduled"} </h3>
                    </span>
                    <data value={totalVal.toString()}> {totalVal} </data>
                </div>
                <div className="schedule-body">
                    {details.map(({ context, val }) => <div className="schedule-detail" key={context}>
                        <data value={val.toString()}> {val} </data>
                        <p> {context} </p>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Schedule