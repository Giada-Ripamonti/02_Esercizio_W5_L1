// DATA

const today = new Date()
console.log(today);
document.getElementById('date').innerHTML = today;

let day = today.getDate()
document.getElementById('day').innerHTML = day;

let month = today.getMonth()
month = ++month

switch (month) {
    case 1:
        document.getElementById('month').innerHTML = 'gennaio';
        break;
    case 2:
        document.getElementById('month').innerHTML = 'febbraio';
        break;
    case 3:
        document.getElementById('month').innerHTML = 'marzo';
        break;
    case 4:
        document.getElementById('month').innerHTML = 'aprile';
        break;
    case 5:
        document.getElementById('month').innerHTML = 'maggio';
        break;
    case 6:
        document.getElementById('month').innerHTML = 'giugno';
        break;
    case 7:
        document.getElementById('month').innerHTML = 'luglio';
        break;
    case 8:
        document.getElementById('month').innerHTML = 'agosto';
        break;
    case 9:
        document.getElementById('month').innerHTML = 'settembre';
        break;
    case 10:
        document.getElementById('month').innerHTML = 'ottobre';
        break;
    case 11:
        document.getElementById('month').innerHTML = 'novembre';
        break;
    case 12:
        document.getElementById('month').innerHTML = 'dicembre';
        break;
}

let year = today.getFullYear()
document.getElementById('year').innerHTML = year;

let euDate = day.toString() + ('/') + month.toString() + ('/') + year.toString();
document.getElementById('eu_date').innerHTML = euDate;

// OROLOGIO

setInterval(currentTime, 1000);

function currentTime() {
    const time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    /* if(secs <= 9){
         = "0" + secs;
      } */
    document.getElementById('time').innerHTML = hours + (':') + mins + (':') + secs; 
}

// CRONOMETRO

function startChrono() {
    let minsChrono = 0;
    let secsChrono = 0;
    let msecsChrono = 0;
    document.getElementById('chronometer').innerHTML = minsChrono + (':') + secsChrono + (':') + msecsChrono;
    
}

/* function stopChrono() {
    document.getElementById('chronometer').innerHTML = 
}
 */
function resetChrono() {
    document.getElementById('chronometer').innerHTML = ('00:00:00')
}