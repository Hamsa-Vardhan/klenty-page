import { NextPage } from "next"
import { useEffect, useRef } from "react"
import ProfileOption, { ProfileOptionCompProps } from '../atoms/profileOption'
import { RiGiftFill } from 'react-icons/ri'
import { FcLike } from 'react-icons/fc'
import { IoMdLogOut, IoMdSettings } from 'react-icons/io'

interface compProps {
    show: boolean;
}
const ProfileOptions: NextPage<compProps> = ({ show }) => {

    const { current: optionData } = useRef<ProfileOptionCompProps[]>([
        { Icon: RiGiftFill, option: "What's New?", num: 1 },
        { Icon: FcLike, option: "Refer a friend" },
        { Icon: IoMdSettings, option: "settings" },
        { Icon: IoMdLogOut, option: "Sign out" }
    ])



    useEffect(() => {
        console.log(show)
    }, [])

    return (

        <>
            <div className={show ? "hide" : ""} >
                <div className="profile-heading" >
                    <h4> bhuvanesh ram </h4>
                    <h5> bhuvanesh@klenty.com </h5>
                </div>
                <div className="profile-options">
                    {optionData.map(el => <ProfileOption key={el.option} {...el} />)}
                </div>
            </div>
        </>
    )
}

export default ProfileOptions