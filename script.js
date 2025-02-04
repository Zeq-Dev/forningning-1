window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

function timeSinceNov16() {
    const startDate = new Date(2024, 10, 16);
    const today = new Date();

    const timeDiv = document.getElementById('time-count');

    let months = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonthDays;
    }
    
    console.log(`${months} months, ${days} days`);
    timeDiv.innerHTML += `${months} months & ${days} days`;
}

timeSinceNov16();

let count = 1
let msgTarget = `msg-${count}`

let msgDiv = document.getElementById(msgTarget)
const msgBtn = document.getElementById('msg-btn')

function msgFunc() {
    msgDiv.style.visibility = "hidden";
    count += 1
    let msgTarget = `msg-${count}`
    msgDiv = document.getElementById(msgTarget)
    msgDiv.style.visibility = "visible"
}

const yesBtn = document.querySelector('.yesBtn')

function noBtn() {
    let currentWidth = yesBtn.offsetWidth
    console.log(currentWidth)
    yesBtn.style.width = (currentWidth+30) + 'px'
}