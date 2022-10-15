// Your code goes here

document.addEventListener('DOMContentLoaded', e => {changeText()});
// console.log("This should log first")


function changeText(){
    document.querySelector('p').textContent = document.querySelector('p').textContent.replace('JavaScript is so cool. It lets me add text to my page programmatically.', 'This is really cool!')
}