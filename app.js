const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');
const sec = document.querySelector('.sec');



function rot(ele, prop){
  ele.style.setProperty('--rotate', prop * 360)
}

setInterval(()=>{
const date = new Date();

var second= date.getSeconds() /60;

var minutes =((date.getMinutes())/60) ;

var hours = ((date.getHours() )/12);
rot(minute, minutes);
rot(sec, second);
rot(hour, hours)
}, 1000)

