const monthName = document.querySelector('.month-name')
const dayName = document.querySelector('.day-name')
const dayDate = document.querySelector('.day-date')
const year = document.querySelector('.year')

const date = new Date()
console.log(date.getDay())
monthName.innerHTML = date.toLocaleString('en', {
  month: 'long'
})

dayName.innerHTML = date.toLocaleString('en', {
  weekday: 'long'
})

dayDate.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();