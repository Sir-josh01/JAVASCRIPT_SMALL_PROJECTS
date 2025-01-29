const containerElement = document.querySelector('.container')

const careers = ['Techie', 'Youtuber', 'Instructor', 'Teacher', 'Freelancer', 'Doctor', 'Developer', 'Business-Consultant', 'Counselor'];

let careerIndex = 0;
let characterIndex = 0;

updateCareers()

function updateCareers() {
  characterIndex++
  let objectModel = 'I, E, A'; 
  containerElement.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>` 

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(() => {
    updateCareers()
  }, 100)

  }