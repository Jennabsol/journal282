import {dashboard} from "../dashboard/dashboard"

const logout = ()=>{
    document.querySelector("#logoutBtn").addEventListener("click", ()=>{
        sessionStorage.removeItem("activeUser")
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        dashboard(activeUser)
    })
}

export {logout}