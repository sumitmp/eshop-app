import React from "react"
import { beforeLogin } from "./HeaderConstant"

function Header() {
    console.log("beforeLogin 8888888888888888888888888888888", beforeLogin)

    const renderLinks = () => {
        return (
            <ul>
                {beforeLogin.map(row => {
                    return <li><a href="#">{row.icon} {row.name}</a></li>
                })}
            </ul>
            )

    }


    return (
        <div>
            {renderLinks()}
        </div>
    )
}


export default Header;