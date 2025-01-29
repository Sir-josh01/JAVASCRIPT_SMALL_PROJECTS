const bodyElement = document.querySelector('body')
bodyElement.addEventListener('mousemove', (event) => {
  const Xposition = event.offsetX;
  const Yposition = event.offsetY;
  const newSpan = document.createElement('span')
  newSpan.style.left = Xposition + 'px'
  newSpan.style.top = Yposition + 'px'

  const size = Math.random() * 100;
  newSpan.style.width = size + 'px'
  newSpan.style.height = size + 'px'

  setTimeout(() => {
    newSpan.remove()
  }, 3000);
  bodyElement.appendChild(newSpan);
})