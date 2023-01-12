import { projectData } from './ProjectData.js';

const barColors = {
  blue: '#82B4FF',
  red: '#FF9587',
  green: '#97DF5F',
  yellow: '#FFE587',
  pink: '#FF93F4',
};

window.addEventListener("load", () => { 
  // create project cards
  const projectCardContainer = document.getElementById('project-card-container');
  for(let i = 0; i < projectData.length; i++) {
    const projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'card project-card');
    const cardBar = document.createElement('div');
    cardBar.setAttribute('class', 'card-bar');
    const iconContainer = document.createElement('div');
    iconContainer.setAttribute('class', 'card-bar-icon-container');
    const content = document.createElement('div');
    content.setAttribute('class', 'project-card-content card-content');
    cardBar.append(iconContainer);
    projectCard.append(cardBar, content);
    projectCardContainer.append(projectCard);
  }

  let idx = 0;
  [...document.getElementsByClassName('project-card-content')].forEach((content) => {
    // debugger
    content.innerHTML = `
      <div class="project-card-img" style="background-image: url('${projectData[idx].imagePath}');"></div>
      <div class="project-card-text-container">
        <h2 class="project-card-title">${projectData[idx].name}</h2>
        <p class="project-card-description">${projectData[idx].notes}</p>
        <a href='${projectData[idx].url}' target="_blank"><button class="btn">VISIT PROJECT</button></a>
      </div>
    `

    const cardBarTitle = document.createElement('span');
    cardBarTitle.setAttribute('class', 'card-bar-title')
    cardBarTitle.textContent = projectData[idx].name
    content.previousElementSibling.prepend(cardBarTitle);

    idx++;
  })

  // set bar colors
  const colorValues = Object.values(barColors);
  [...document.getElementsByClassName('card-bar')].forEach((bar) => {
    bar.style.backgroundColor = colorValues[Math.floor(Math.random()*colorValues.length)];
  })
  
  // add fa icons
  const iconContainers = document.getElementsByClassName('card-bar-icon-container')
  for(const iconContainer of iconContainers) {
    iconContainer.innerHTML = `
    <i class="bar-icon fa-solid fa-down-left-and-up-right-to-center"></i>
    <i class="bar-icon fa-regular fa-circle"></i>
    <i class="bar-icon fa-solid fa-xmark"></i>
    `;
  }

  // [...document.getElementsByClassName('project-card')].forEach((card) => {
  //   debugger
  // })
});