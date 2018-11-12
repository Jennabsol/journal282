import {dataManager} from "./dataManager"
import {authFormManager} from "./authFormManager"
import {dashboard} from "../dashboard/dashboard"

const saveAuth = () => {
    document.querySelector("#welcome").addEventListener("click", (evt) => {
        const user = {
            username: document.querySelector("#username").value,
            password: document.querySelector("#psw").value
        }
        if (evt.target.id.startsWith("register")) {
            dataManager.searchUsername(user.username).then((person) => {
                console.log(person.length)
                if (person.length) {
                    alert(`Username ${user.username} already taken!`)
                } else if (!person.length) {
                    dataManager.saveUser(user).then(() => {
                        authFormManager.clearAuthForm()
                    })
                }
            })
        }
        if (evt.target.id.startsWith("login")) {
            dataManager.searchUsers(user.username, user.password).then((person) => {
                console.log(person)
                if(!person.length){
                    alert("wrong!")
                } else if (person.length){
                    sessionStorage.setItem("activeUser", parseInt(person[0].id))
                    const activeUser = sessionStorage.getItem("activeUser")
                    dashboard(activeUser)
                }
            })
        }
    })
}

export {saveAuth}