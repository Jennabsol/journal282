import {dataManager} from "./dataManager"
const getUserName = (activeUser)=>{
    return dataManager.singleUser(activeUser).then((user)=>{
        return user.username
    })
}
export {getUserName}