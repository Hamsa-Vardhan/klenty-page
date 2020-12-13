import { NextPage } from "next"
import { useState } from "react"
import { IoIosNotifications } from 'react-icons/io'
import ProfileOptions from "./profileOptions"


interface compProps {
    currentPage: string;
}
const Header: NextPage<compProps> = ({ currentPage }) => {


    const [showProfileOptions, setShowProfileOptions] = useState<boolean>(true)


    const changeDisplay = () => setShowProfileOptions(p => !p)

    return (

        <>
            <header>
                <h4> {currentPage} </h4>
                <div>
                    <span className="icon" ><IoIosNotifications /></span>
                    <span className="profile" >
                        <img src="https://picsum.photos/200?grayscale" alt="dp" className="dp" onClick={changeDisplay} onBlur={changeDisplay} />
                        <ProfileOptions show={showProfileOptions} key={showProfileOptions.toString()} />
                    </span>
                </div>
            </header>
        </>
    )
}

export default Header