const projects = [
  {
    id: 1,
    title: 'Etch-A-Sketch',
    image: './images/project-1-etch.jpg',
    desc: 'This is an Etch-a-sketch I built using HTML5, CSS, Vanilla JavaScript.',
    live: 'https://becks-tech.github.io/etch-a-sketch/',
    repo: 'https://github.com/becks-tech/etch-a-sketch'

  },
  {
    id: 2,
    title: 'Rock Paper Scissors',
    image: './images/project-2-rps.jpg',
    desc: 'My take on the classic game that is Rock Paper Scissors. Built using HTML, CSS and Vanilla JavaScript.',
    live: 'https://becks-tech.github.io/rock-paper-scissors/',
    repo: 'https://github.com/becks-tech/rock-paper-scissors/'

  },
  {
    id: 3,
    title: 'Techy API',
    image: './images/project-3-tech.jpg',
    desc: 'A web app that utlizes the Techy API: https://techy-api.vercel.app/api/text. Skills used were HTML, CSS, Flexbox, JavaScript, Fetch API.',
    live: 'https://becks-tech.github.io/tech-api/',
    repo: 'https://github.com/becks-tech/tech-api/'
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

window.onscroll = function() {myFunction()};
        
const header = document.getElementById("header");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// Header buttons highlight

//

// CV Button

const cvButton = document.querySelector('.cv-button')

cvButton.addEventListener('click', ()=>{
  alert('CV Coming Soon')
})