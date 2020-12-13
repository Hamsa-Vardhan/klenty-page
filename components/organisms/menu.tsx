import { NextPage } from "next"
import { IoHome, IoKeypad } from 'react-icons/io5'
import { RiSendPlaneFill, RiSendPlaneLine } from 'react-icons/ri'
import { FaPhoneAlt, FaRegCalendarCheck, FaUser } from 'react-icons/fa'
import { AiFillSetting, AiOutlineRise } from 'react-icons/ai'
import { IoMdHelpCircleOutline, IoMdMail } from 'react-icons/io'


const Menu: NextPage = () => {

    return (

        <>
            <div className="menu" >
                <span className="icon first-icon" ><img src="/icon.png" alt="klenty" /> </span>
                <span className="icon" data-detail="Home" ><IoHome /></span>
                <span className="icon" data-detail="profile" ><FaUser /></span>
                <span className="icon" data-detail="chat" ><RiSendPlaneFill /></span>
                <span className="icon" data-detail="task" ><FaRegCalendarCheck /></span>
                <span className="icon" data-detail="mail" ><IoMdMail /></span>
                <span className="icon" data-detail="phone" ><FaPhoneAlt /></span>
                <span className="icon" data-detail="analysis" ><AiOutlineRise /></span>
                <span className="icon" data-detail="settings" ><AiFillSetting /></span>
                <span className="icon end-icon" data-detail="dailpad" ><IoKeypad /></span>
                <span className="icon" data-detail="faq" ><IoMdHelpCircleOutline /></span>
                {/* <div className="end-icon" >
                </div> */}
            </div>
        </>
    )
}

export default Menu