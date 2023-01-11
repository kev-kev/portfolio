const barColors = {
  blue: '#82B4FF',
  red: '#FF9587',
  green: '#97DF5F',
  yellow: '#FFE587',
  pink: '#FF93F4',
};

const colorValues = Object.values(barColors);

window.addEventListener("load", () => { 
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
  
  [...document.getElementsByClassName('project-card-content')].forEach((content) => {
    content.innerHTML = `
      <h2 class="card-title">Lorem ipsum dolor</h2>
      <p class="card-description">Sit amet consectetur adipisicing elit. Doloremque odio harum alias magni fugit cum, saepe nesciunt pariatur! Consequatur accusantium dolore animi iusto et perspiciatis ex totam a nam dolores?</p>
    `
  })
});