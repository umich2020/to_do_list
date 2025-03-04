//changes which output based on clicking the sidebar
import {today_value} from "./array.js"
let today = document.querySelector("today")
    today.addEventListener("click", () => {
        today_value.tdy = true
    })
let later = document.querySelector("later")
later.addEventListener("click", () => {
    today_value.tdy = false
})
//can add on clicick css that changes the border or something