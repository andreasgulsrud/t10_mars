/*
    Tema 10
    24.9 - 12.10
    984 112
*/

// Background, stars
const starLayer = document.querySelector(".star-layer");

for (let i = 0; i < 100; i++) {

    const stjerne = document.createElement("div");
    stjerne.className = "stjerne";

    stjerne.style.left = Math.random() * innerWidth + "px";
    stjerne.style.top = Math.random() * innerHeight + "px";
    stjerne.style.width = stjerne.style.height = Math.random() * 5 + "px";

    starLayer.appendChild(stjerne);

}

function scramble() {

    const stjerner = document.querySelectorAll("main .stjerne");

    for (let stjerne of stjerner) {

        stjerne.style.left = Math.random() * innerWidth + "px";
        stjerne.style.top = Math.random() * innerHeight + "px";
        stjerne.style.width = stjerne.style.height = Math.random() * 5 + "px";
    }

}

document.addEventListener('scroll', function (evt) {

    const scrmsg = document.getElementById("scroll");
    const ingres = document.getElementById("ingress");

    //pointer.style.top += scrollY + "px";

    if (window.scrollY > 80) {
        // Hide scroll message
        scrmsg.style.visibility = "hidden";

        // Hide the ingres
        ingres.style.visibility = "hidden";

    } else {
        // Show scroll message
        scrmsg.style.visibility = "visible";

        // Show the ingres
        ingres.style.visibility = "visible";
    }


    // move the intro text
    const swtekst = document.getElementById("swtekst");
    swtekst.style.top = 100 - scrollY / 15 + "%";

    // move the background stars
    scramble();

});

// InSight Countdown
// set the countdown date
const countDownDate = new Date("Nov 26, 2018 21:00:00").getTime();

// update the countdown every one second
const x = setInterval(function() {

    // get todays date/time
    const now = new Date().getTime();

    // Distance between now and cd date
    const distance = countDownDate - now;

    // time calculations days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000* 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display result in element
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    //console.log(days + "d"+ hours + "h " + minutes + "m " + seconds + "s ");

    // countdown finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// the sound
const insightElm = document.getElementById("insight");
const theMusic = document.getElementById("theMusic");

insightElm.onclick = function () {
    theMusic.play();
}

// pointer
const pointer = document.getElementById("pointer");

document.onmousemove = function(evt) {
    pointer.style.left = evt.clientX - 25 + "px";
    pointer.style.top = evt.clientY - 25 + "px";
}