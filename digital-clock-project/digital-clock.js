const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const Ampm = document.querySelector('.ampm');

timer();

function timer() {
  const clock = new Date();
  hours.innerHTML = clock.getHours();
  minutes.innerHTML = clock.getMinutes();
  seconds.innerHTML = clock.getSeconds();

  // hours >= 12 ? Ampm.innerHTML = 'PM' : 'AM';
  if (hours >= 12) {
    hours -= 12;
    Ampm.innerHTML = 'PM';
  } else {
    Ampm.innerHTML = 'AM'; 
  }

  setTimeout(timer, 1000)
}
