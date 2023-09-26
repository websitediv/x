let startbox = document.getElementById("startbox");
window.onload = function () {
    setTimeout(function () {
        startbox.style.display = "none";
    }, 7000);
};
let card1 = document.getElementById("card1");
card1.onclick = function () {
    window.location = "Football.html";
};
let card2 = document.getElementById("card2");
card2.onclick = function () {
    window.location = "School.html";
};
let card3 = document.getElementById("card3");
card3.onclick = function () {
    window.location = "Other.html";
};
let card4 = document.getElementById("card4");
card4.onclick = function () {
    window.location = "Friends.html";
};
let startimg = document.getElementById("startimg");
startimg.onclick = function () {
    startbox.style.display = "none";
};