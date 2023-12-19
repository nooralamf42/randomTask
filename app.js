const text = document.querySelector('#title')
const button = document.querySelector('#btn')

const API = 'https://www.boredapi.com/api/activity?participants=1'

button.onclick = async () =>{
    let response = await fetch(API)
    let data = await response.json()
    let messege = data.activity
    title.innerText = messege
    button.innerText = 'Get Another'
}


