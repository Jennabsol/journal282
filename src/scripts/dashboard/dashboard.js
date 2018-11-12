import {dashHtml} from "./dashHtml"
import {journal} from "../journal/journal"
import {auth} from "../auth/auth";
import {logout} from "../auth/logout"
import {navHtml} from "../nav/navHtml";
import {getUserName} from "../auth/getUserName"

const dashboard =(activeUser)=>{
    if (!activeUser){
        auth()
    }
    else if (activeUser) {

        document.querySelector("#container").innerHTML = dashHtml()

        getUserName(activeUser).then((username) => {
            document.querySelector("nav").innerHTML = navHtml(username)
            logout()
        })
        journal(activeUser)

    }
}
export {dashboard}
