const listEl = document.getElementById("list")
let counter = 0
function populate() {
    counter++
    const listitems = document.createElement("li")
    const text = document.createTextNode('Sentence ' + counter)
    listitems.appendChild(text)
    listEl.appendChild(listitems)
}