import { NextPage } from "next"
import { useRef } from "react"
import { FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import Schedule, { ScheduleCompProps } from "../atoms/schedule"

interface SchedulesCompProps {

}
const Schedules: NextPage<SchedulesCompProps> = () => {

    const { current: scheduleData } = useRef<ScheduleCompProps[]>([
        {
            Icon: BiTime, totalVal: 5, heading: "emails", details: [
                { val: 0, context: "today" },
                { val: 0, context: "upcoming" },
                { val: 5, context: "overdue" }
            ]
        },
        {
            Icon: FaRegCalendarCheck, totalVal: 0, heading: "tasks", details: [
                { val: 0, context: "today" },
                { val: 0, context: "upcoming" },
                { val: 0, context: "awaiting approval" },
                { val: 0, context: "errors" }
            ]
        },
        {
            Icon: FaPhoneAlt, totalVal: 0, heading: "calls", details: [
                { val: 0, context: "today" },
                { val: 0, context: "upcoming" },
                { val: 0, context: "overdue" }
            ]
        },
    ])


    return (

        <>
            <div className="schedules" >
                <div className="calendar">
                    <div className="calendar-heading">
                        <h3> Scheduled Days </h3>
                        <data value="0" > 0 </data>
                    </div>
                    <div className="calendar-body">
                        {Array.apply(0, new Array(7)).map((_: any, index: number) => index < 6 ? `Dec 0${index + 4}` : `Dec ${index + 4}`).map((el: string) => <div className="calendar-dates" key={el} > <span></span> <p> {el} </p> </div>)}
                    </div>
                </div>
                {scheduleData.map(el => <Schedule key={el.heading} {...el} />)}
            </div>
        </>
    )
}

export default Schedules