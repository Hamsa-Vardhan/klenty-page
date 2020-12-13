import { NextPage } from "next"
import { FaFilter, FaSearch } from 'react-icons/fa'
import { BiNote } from 'react-icons/bi'

interface NotificationsCompProps {

}
const Notifications: NextPage<NotificationsCompProps> = () => {

    return (

        <>
            <div className="notifications" >
                <h3> livefeed </h3>
                <div className="searches">
                    <span className="select" >
                        <p>
                            Show:ALL
                        </p>
                        <p> &#9662; </p>
                    </span>
                    <span className="icon" > <FaFilter /> </span>
                    <div className="user" > <p> User: bhuvanesh@klenty.com </p> <code> &times; </code>  </div>
                    <label htmlFor="notification-search"> <span className="icon"> <FaSearch /> </span> <input type="text" id="notification-search" placeholder="Search Notifications" /> </label>
                </div>
                <div className="content">
                    <span className="icon" > <BiNote /> </span>
                    <h2> No notifications yet </h2>
                    <p> you'll start seeing real time notifications here when your emails are opened, clicked, or replied to.</p>
                </div>
            </div>
        </>
    )
}

export default Notifications