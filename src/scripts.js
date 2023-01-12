import { projectData } from './ProjectData.js';

const barColors = {
  blue: '#82B4FF',
  red: '#FF9587',
  green: '#97DF5F',
  yellow: '#FFE587',
  pink: '#FF93F4',
};

const colorValues = Object.values(barColors);
window.addEventListener("load", () => { 
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
    content.innerHTML = `
      <div class="project-card-img" style="background-image: url('${projectData[idx].imagePath}');"></div>
      <h2 class="card-title">${projectData[idx].name}</h2>
      <p class="card-description">${projectData[idx].notes}</p>
    `
    idx++;
  })

  const bars = document.getElementsByClassName('card-bar');
  for(const bar of bars) {
    bar.style.backgroundColor = colorValues[Math.floor(Math.random()*colorValues.length)];
  }
  
  const iconContainers = document.getElementsByClassName('card-bar-icon-container')
  for(const iconContainer of iconContainers) {
    iconContainer.innerHTML = `
      <i class="bar-icon fa-solid fa-xmark"></i>
      <i class="bar-icon fa-regular fa-circle"></i>
      <i class="bar-icon fa-solid fa-down-left-and-up-right-to-center"></i>
    `;
  }
});