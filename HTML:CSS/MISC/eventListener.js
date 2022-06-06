const counterbtn = document.querySelector('#increment')
let num = 0

function increment() {
    const webCounter = document.getElementById('counter')
    num++
    alert(num)
    webCounter.innerHTML = num
}
counterbtn.addEventListener('click', increment)