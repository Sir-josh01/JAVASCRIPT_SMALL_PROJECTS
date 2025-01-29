// const myId = document.querySelector('#myId')
// const myClass = document.querySelector('.myClass')
// const allMen = document.querySelectorAll('p, .myClass, #myId')

// const newDiv = document.createElement('div');
// const newText = document.createTextNode('Hi, good-morning')
// let anotherText = `<h3>Every Result you see, there is a price attached to it</h3>`

// newDiv.appendChild(newText)
// myId.appendChild(newDiv)
// myId.innerHTML = anotherText;

// const paragraph = document.querySelector('p')
// anotherText = 'This is a brown new text from javaScript';
// paragraph.innerText = anotherText;

// // styling
// paragraph.style.color = 'blue';
// paragraph.style.backgroundColor = 'black';

// newDiv.removeChild(newText)

const imageContainer = document.querySelector('.image-container');
const loadMoreBtn = document.querySelector('.btn');
const showLessBtn = document.getElementById('show-less-btn')


loadMoreBtn.addEventListener('click', () => {
  showLessBtn.classList.remove('hide')
  addNewImages();
})

showLessBtn.addEventListener('click', () => {
  deleteSomePhoto();
})

let nextLoadingImages = 2;

function addNewImages() {
  for (let i = 0; i < nextLoadingImages; i++) {
    const newImage = document.createElement('img');
    newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
  
    imageContainer.appendChild(newImage);
    
  }

}

function deleteSomePhoto() {
  
}
