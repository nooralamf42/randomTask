const text = document.querySelector('#title')
const button = document.querySelector('#btn')

const API = 'http://www.boredapi.com/api/activity?participants=1'

const clickHandler = async () =>{
    let response = await fetch(API)
    let data = await response.json()
    let messege = data.activity
    title.innerText = messege
    button.innerText = 'Get Another'
}
