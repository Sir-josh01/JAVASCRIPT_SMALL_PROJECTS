const labelElement = document.querySelector('.label')
const checkBox = document.getElementById('dark-mode')
const circleElement = document.getElementsByClassName('circle')
const body = document.querySelector('body')

checkBox.checked = false; 
updateBody()

function updateBody() {
  if (checkBox.checked) {
    body.style.backgroundColor = 'black';
  } else {
    body.style.backgroundColor = 'white';
  }
}

checkBox.addEventListener('input', () => {
  updateBody();
  updateLocalStorage();
})

console.log(checkBox.checked)

  let storage = JSON.stringify(checkBox.checked)
function updateLocalStorage() {
  let storage = JSON.stringify(checkBox.checked)
  localStorage.setItem('mode', storage)
}
