const listEl = document.getElementById("list")
let counter = 0
function populate() {
    counter++
    const listitems = document.createElement("li")
    const text = document.createTextNode('Sentence ' + counter)
    //Add the text to the list item
    listitems.appendChild(text)
    //Add the list item to the list
    listEl.appendChild(listitems)
}