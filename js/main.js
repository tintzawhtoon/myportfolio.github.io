

// Easy Pie Chart
$(function() {
    $('.chart').easyPieChart({
        size: 100,
        barColor: "#292929",
        scaleLength: 0,
        lineWidth: 9,
        trackColor: "#d2d2d2",
        animate: 1500,
    });
});


function customise() {
    window.sr = ScrollReveal({
        duration: 1000,
        distance: '150px',
        easing: 'ease-in-out'
    });

    sr.reveal('.left', {origin: 'left', reset: false});
    sr.reveal('.right', {origin: 'right', reset: false});
    sr.reveal('.top', {origin: 'top', reset: false});
    sr.reveal('.bottom', {origin: 'bottom', reset: false});
    sr.reveal('.d1', {duration: 1100});
    sr.reveal('.d2', {duration: 1200});
    sr.reveal('.d3', {duration: 1300});
    sr.reveal('.d4', {duration: 1400});
    sr.reveal('.d5', {duration: 1500});
    sr.reveal('.d6', {duration: 1600});
}

window.addEventListener("load", () => {
    customise();
});


const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
