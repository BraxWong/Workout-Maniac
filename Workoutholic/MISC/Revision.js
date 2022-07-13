const increbtn = document.querySelector('#increment')
const decrebtn = document.querySelector('#decrement')
const unorli = document.getElementById('list')
let num = 0

function increase() {
    num++
    const listitem = document.createElement('li')
    const text = document.createTextNode('Sentence: ' + num)
    listitem.appendChild(text)
    list.appendChild(listitem)
    document.getElementById('counter').innerHTML = num
}
function decrease() {
    num--
    listel.remove
    document.getElementById('counter').innerHTML = num
}
increbtn.addEventListener('click',increase)
decrebtn.addEventListener('click',decrease)
