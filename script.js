// function getSecondsSinceStartOfDay() {
//     return new Date().getSeconds() + 
//       new Date().getMinutes() * 60 + 
//       new Date().getHours() * 3600;
// }

// setInterval( function() {
//     var time = getSecondsSinceStartOfDay();
//     console.log(time);
//     if(time <=60)
//     {
//         document.querySelector("#minutes").style.transition='none';
//     }
    
// }, 1000);

var secondHand = document.querySelector("#seconds");
var minsHand = document.querySelector("#minutes");
var hourHand = document.querySelector("#hour");

function setTime() {
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(secondHand.style.transform);

    var mins = now.getMinutes();
    var minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(minsHand.style.transform);

    var hour = now.getHours();
    var hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hourHand.style.transform);
    
    
    if(secondsDegrees >= 360){
        secondHand.style.transition='none';
    }
}

setInterval(setTime, 1000);

setTime();