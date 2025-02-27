const dialog = document.querySelector("dialog")
const div = document.querySelector("#add_item")
div.addEventListener("click", ()=> {
    dialog.showModal()
})
const dialog_close = document.querySelector("#close_dialog")
dialog_close.addEventListener("click", () => {
    dialog.close()
})
const submit_button =document.getElementById("submit_button")
const form = document.getElementById("new_todo")
const formData = new FormData(form)
submit_button.addEventListener("click", () => {
    console.log(form)
    formData.get("title")
    
})
