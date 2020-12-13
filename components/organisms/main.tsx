import { NextPage } from "next"
import Header from "../molecules/header"
import Notifications from "../molecules/notifications"
import Schedules from "../molecules/schedules"



interface compProps {

}
const Main: NextPage<compProps> = () => {

    return (

        <>
            <div className="main" >
                <Header currentPage="home" />
                <main>
                    <Schedules />
                    <Notifications />
                </main>
            </div>
        </>
    )
}

export default Main