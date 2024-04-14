const clock = document.getElementById('clock');



setInterval(function(){
  let date = new Date();
  const data = date.toLocaleTimeString();
  clock.innerHTML = data;
},1000)
