// Greeting
function greeting(){
  let hour = new Date().getHours();
  if (hour < 12){
    greeting = "Good Morning"
    const para = document.querySelector(".greeting");
    para.style.color="#FFBF00";
  } else if (hour <19){
    greeting = "Good Afternoon"
    const para = document.querySelector(".greeting");
    para.style.color="#58ACFA";
  } else {
    greeting = "Good Evening"
    const para = document.querySelector(".greeting");
    para.style.color="#088A4B";
  }
  document.querySelector("p").textContent = greeting;
  }
  greeting();

const projects = [
  {
    id: 1,
    title: 'Etch-A-Sketch',
    image: './images/project-1-etch.jpg',
    desc: 'This is an Etch-a-sketch I built using HTML5, CSS3, Vanilla JavaScript.',
    live: 'https://becks-tech.github.io/etch-a-sketch/',
    repo: 'https://github.com/becks-tech/etch-a-sketch'

  },
  {
    id: 2,
    title: 'Rock Paper Scissors',
    image: './images/project-2-rps.jpg',
    desc: 'My take on the classic game that is Rock Paper Scissors. Built using HTML5, CSS3 and Vanilla JavaScript.',
    live: 'https://becks-tech.github.io/rock-paper-scissors/',
    repo: 'https://github.com/becks-tech/rock-paper-scissors/'

  },
  {
    id: 3,
    title: 'Techy API',
    image: './images/project-3-tech.jpg',
    desc: 'A web app that utlizes the Techy API: https://techy-api.vercel.app/api/text. Skills used were HTML5, CSS3, Flexbox, Vanilla JavaScript, Fetch API.',
    live: 'https://becks-tech.github.io/tech-api/',
    repo: 'https://github.com/becks-tech/tech-api/'
  },
  {
    id: 4,
    title: 'Password Generator',
    image: './images/project-4-password.jpg',
    desc: 'A password generator, user determines length, given strength and can copy to clipboard.',
    live: 'https://becks-tech.github.io/password-generator/',
    repo: 'https://github.com/becks-tech/password-generator'
  },
  
]

// Projects loop

const sectionCenter = document.querySelector('.section-center');

//load items
window.addEventListener('DOMContentLoaded', ()=>{
    displayProjectItems(projects)
})

function displayProjectItems(projectItems){
  let displayProject = projectItems.map((item)=>{
    return ` <article class="project-item">
    <div class="project-info">
        <h4>${item.title}</h4>
    </div>
    <div class="project-image">
        <img src="${item.image}" alt="${item.title}" class="project">
    </div>
            <p class="project-text">
                ${item.desc}
            </p>
            <div class="project-buttons">
                <button>
                    <a href="${item.live}">Live Site</a>
                </button>
                <button>
                    <a href="${item.repo}">Repository</a>
                </button>
            </div>
        </div>
    </div>
</article>`
  })

  displayProject = displayProject.join('');
  sectionCenter.innerHTML = displayProject
}


// Sticky Header
        
const header = document.getElementById("header");
const sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {myFunction()};
document.onscroll = function() {myFunction()};


// Theme
 const setTheme = () => {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
 }
 document.querySelector('input').addEventListener('click', setTheme)

