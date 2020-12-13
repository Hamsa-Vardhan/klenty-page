import { NextPage } from "next"
import Main from "../components/organisms/main"
import Menu from "../components/organisms/menu"



interface compProps {

}
const Index: NextPage<compProps> = () => {

    return (

        <>
            <div className="home">
                <Menu />
                <Main />
            </div>
        </>
    )
}

export default Index