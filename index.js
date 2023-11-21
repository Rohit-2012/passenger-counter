let count = 0;

let countEl = document.getElementById("passenger-count")
let saveEl = document.getElementById("save-el")
function increment() {
    count++
    countEl.textContent = count
}


function save() {
    let entries = count + " - "
    saveEl.textContent += entries

    count = 0
    countEl.textContent = count
}
