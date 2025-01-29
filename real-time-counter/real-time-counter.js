const input = document.querySelector('.input-box')
const total = document.querySelector('.blue-answer')
const remaining = document.querySelector('.red-answer')
calculateCharacter();

function calculateCharacter() {
  total.innerHTML = input.value.length;
  remaining.innerHTML = input.getAttribute('maxlength') - input.value.length;
}

input.addEventListener('keyup', () => {
  calculateCharacter();
  
})