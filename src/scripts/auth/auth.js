import {saveAuth} from "./saveAuth"
import {authFormManager} from "./authFormManager"

const auth = () =>{
    document.querySelector("#container").innerHTML = authFormManager.authForm()
    saveAuth()
}

export {auth}