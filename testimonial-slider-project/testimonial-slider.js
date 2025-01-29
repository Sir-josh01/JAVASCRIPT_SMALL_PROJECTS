const testimonials = [
  {
    image: '/Images/sir-frank.jpg',
    text: 'This is simple, unbelievable, i would be lost without apple. for me it is the very best. The speed, size and even capacity is amazing!! Thank you steve jobs.',
    username: 'Sir. Frank.' 
  },
  {
    image: '/Images/jemima.jpg',
    text: 'Wow i must say i am impressed with all the further upgrade they decided to work on and for me, my most favorite part is the customer service, such awesome reception and keen to listen to listen so as to give directions properly. Apples',
    username: 'Miss. Jemimma.' 
  },
  {
    image: '/Images/parnty.jpg',
    text: 'Being better with better results came with hardwork but this brand and products helped in the efficiency of the products. you should give it a try and come back to thank me',
    username: 'Mr. General Parnty' 
  },
  {
    image: '/Images/peace-1.jpg',
    text: 'heyoo, the junks lord has finally found a satisfaction i=on a product. Apples, you be doing well and great more of such products to come.',
    username: 'Miss. Crystal.' 
  },
  {
    image: '/Images/sammy.jpeg',
    text: 'Great job apples, my boredom have been twilted to a blissful day and great experiene. Apples all the way.',
    username: 'Sir. Sammyfresh.' 
  },
  {
    image: '/Images/twinny.jpg',
    text: 'What can i say, keep dong what you are doing and keep making waves apples. cheers to your win and expansion.',
    username: 'Mr. Floki.' 
  }
]


const imageElement = document.querySelector('img')
const textElement = document.querySelector('.text')
const userElement = document.querySelector('.username')
let id = 0;
updateProfile();



function updateProfile() {
const {image, text, username} = testimonials[id];
  imageElement.src = image;
  textElement.innerText = text;
  userElement.innerText = username;
  id++

  setTimeout(() => {
    updateProfile();
    if (id === testimonials.length) {
      id = 0;
    }
  }, 8000)
}

