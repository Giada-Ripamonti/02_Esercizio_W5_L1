// DATA 
const today = new Date()
console.log(today);
document.getElementById('date').innerHTML = today;

document.getElementById('day').innerHTML = today.getDate();

let month = today.getMonth()
month = ++month
let printMonth;

switch (month) {
    case 1:
        printMonth = 'gennaio';
        break;
    case 2:
        printMonth = 'febbraio';
        break;
    case 3:
        printMonth = 'marzo';
        break;
    case 4:
        printMonth = 'aprile';
        break;
    case 5:
        printMonth = 'maggio';
        break;
    case 6:
        printMonth = 'giugno';
        break;
    case 7:
        printMonth = 'luglio';
        break;
    case 8:
        printMonth = 'agosto';
        break;
    case 9:
        printMonth = 'settembre';
        break;
    case 10:
        printMonth = 'ottobre';
        break;
    case 11:
        printMonth = 'novembre';
        break;
    case 12:
        printMonth = 'dicembre';
        break;
}

document.getElementById('month').innerHTML = printMonth;

document.getElementById('year').innerHTML = today.getFullYear()

document.getElementById('eu_date').innerHTML = today.getDate() + (' ') + printMonth + (' ') + today.getFullYear();

// OROLOGIO DIGITALE
function currentTime() {
    const time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    document.getElementById('time').innerHTML   = (hours > 9 ? hours : '0' + hours) + (':') 
                                                + (mins > 9 ? mins : '0' + mins) + (':')
                                                + (secs > 9 ? secs : '0' + secs);
}

setInterval(currentTime, 1000);

// CRONOMETRO DIGITALE
let stopWatch;
let minsChrono = 0;
let secsChrono = 0;
let msecsChrono = 0;
printChrono();

function setChrono() {
    msecsChrono++;
    if(msecsChrono >= 60) {
        msecsChrono = 0;
        secsChrono++;
        if(secsChrono >= 60) {
            secsChrono = 0;
            minsChrono++;
    }
    }
    printChrono();
}

function printChrono() {
    document.getElementById('chronometer').innerHTML    = (minsChrono > 9 ? minsChrono : '0' + minsChrono) + (' : ') 
                                                        + (secsChrono > 9 ? secsChrono : '0' + secsChrono) + (' : ') 
                                                        + (msecsChrono > 9 ? msecsChrono : '0' + msecsChrono);
}

function startChrono() {
    if(stopWatch === undefined) {
    stopWatch = setInterval(setChrono, 100);
    }
}

function stopChrono(){
    clearInterval(stopWatch);
    stopWatch = undefined;
}

function resetChrono(){
    stopChrono();
    minsChrono = 0;
    secsChrono = 0;
    msecsChrono = 0;
    printChrono();
    stopWatch = undefined;
}