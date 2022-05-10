document.querySelector('button').addEventListener('click', bible);

function bible() {
let verse = document.querySelector('input').value
fetch(`https://bible-api.com/${verse}`) 
.then(res => res.json())
.then(data => {
    console.log(data)
    
    document.querySelector('h2').innerText = data.reference
    document.querySelector('h3').innerText = data.text
})
.catch(err => {
    console.log(`error ${err}`)
})

}