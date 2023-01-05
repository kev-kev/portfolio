// create project cards
for(let i = 0; i < 4; i++) {
  const projectCard = document.createElement('div');
  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('class', 'card-content');
  const title = document.createElement('h2');
  title.append(document.createTextNode('Lorem ipsum dolor'));
  const description = document.createElement('p');
  description.append(document.createTextNode('Sit amet consectetur adipisicing elit. Doloremque odio harum alias magni fugit cum, saepe nesciunt pariatur! Consequatur accusantium dolore animi iusto et perspiciatis ex totam a nam dolores?'));
  contentContainer.append(title, description);
  projectCard.append(contentContainer);
  i % 2 === 0 
    ? projectCard.setAttribute('class', 'card project-card l-offset')
    : projectCard.setAttribute('class', 'card project-card r-offset')
  document.getElementById('project-card-container').append(projectCard);
}

// add header bars to cards
const barColors = {
  blue: '#82B4FF',
  red: '#FF9587',
  green: '#97DF5F',
  yellow: '#FFE587',
  pink: '#FF93F4',
  // black: '#1B1B1B',
};

const cards = document.getElementsByClassName('card');
const colorValues = Object.values(barColors);
for(const card of cards) {
  const bar = document.createElement('div');
  bar.setAttribute('class', 'card-header-bar');
  bar.style.backgroundColor = colorValues[Math.floor(Math.random()*colorValues.length)]
  card.prepend(bar);
}