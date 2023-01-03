for(let i = 0; i < 4; i++) {
  const projectCard = document.createElement('div');
  const title = document.createElement('h2');
  title.append(document.createTextNode('Lorem ipsum dolor'));
  const description = document.createElement('p');
  description.append(document.createTextNode('Sit amet consectetur adipisicing elit. Doloremque odio harum alias magni fugit cum, saepe nesciunt pariatur! Consequatur accusantium dolore animi iusto et perspiciatis ex totam a nam dolores?'));
  projectCard.append(title, description);
  i % 2 === 0 
    ? projectCard.setAttribute('class', 'card project-card l-offset')
    : projectCard.setAttribute('class', 'card project-card r-offset')
  document.getElementById('project-card-container').append(projectCard);
}