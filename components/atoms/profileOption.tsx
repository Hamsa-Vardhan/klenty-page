import { NextPage } from "next"
import { IconType } from 'react-icons'

export interface ProfileOptionCompProps {
    Icon: IconType;
    option: string;
    num?: number;
}
const ProfileOption: NextPage<ProfileOptionCompProps> = ({ Icon, option, num }) => {

    return (

        <>
            <span className="profile-option">
                <span className="icon">
                    <Icon />
                </span>
                <p> {option} </p>
                {num && <code> {num} </code>}
            </span>
        </>
    )
}

export default ProfileOption