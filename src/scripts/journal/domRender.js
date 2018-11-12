import {dataManager} from "./dataManager"
import {htmlEntry} from "./htmlEntry"


const dom = (entry) => {
    document.querySelector("#output").innerHTML += entry
}

const domRender = (activeUser) => {
    document.querySelector("#output").innerHTML = ""
    dataManager.getEntries(activeUser)
        .then(entries => {
            entries.forEach(entry => {
                const entryHtml = htmlEntry(entry)
                dom(entryHtml)
            })
        })
}

export {domRender}