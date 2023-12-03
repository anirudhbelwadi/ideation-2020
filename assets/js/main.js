var i = 0;
var txt = 'deation 2020';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ideation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


//count down
var countDownDate = new Date("Nov 20, 2020 00:00:00").getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var difference = countDownDate - now;
            var days = ("0" + (Math.floor(difference / (1000 * 60 * 60 * 24)))).slice(-2);
            var hours = ("0" + (Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))).slice(-2);
            var minutes = ("0" + (Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))).slice(-2);
            var seconds = ("0" + (Math.floor((difference % (1000 * 60)) / 1000))).slice(-2);
            document.getElementById('days').innerText=days
            document.getElementById('hours').innerText=hours
            document.getElementById('minutes').innerText=minutes
            document.getElementById('seconds').innerText=seconds
            if(days==1){
                document.getElementById('day').innerText="day"
            }
            if(hours==1){
                document.getElementById('hour').innerText="hour"
            }
            if (difference < 0) {
                clearInterval(x);
                document.getElementById('days').innerText="00"
                document.getElementById('hours').innerText="00"
                document.getElementById('minutes').innerText="00"
                document.getElementById('seconds').innerText="00"
            }
        }, 1000);