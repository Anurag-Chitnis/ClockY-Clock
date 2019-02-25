var date , hrs , min ,sec , clr;
function clock(){
     date = new Date();
     hrs = date.getHours();
     min = date.getMinutes();
     sec = date.getSeconds();

    var clocky = `${hrs} : ${min} : ${sec} `;
    clr = '#' + hrs + min + sec;
    document.body.style.backgroundColor = clr;
    document.querySelector('.root').innerHTML = clocky;
}

setInterval(clock,1000);