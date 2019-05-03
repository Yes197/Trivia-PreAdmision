var c = 30;
function timer(){
    c = c -1;
    if(c < 30 ){
        time1.innerHTML = c;
    }
    if(c < 1){
        window.clearInterval(update);
    }
}

update = setInterval("timer()", 1000)

