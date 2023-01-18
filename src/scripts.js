import { projectData } from './ProjectData.js';

const barColors = {
  blue: '#82B4FF',
  red: '#FF9587',
  green: '#97DF5F',
  yellow: '#FFE587',
  pink: '#FF93F4',
};

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

const songData = [
  {
    title: 'Skylar Spence',
    artist: 'St. Pepsi',
    id: 'AJA77S11BmM'
  },
  {
    title: '8 Now',
    artist: 'Food House',
    id: 'nCIteMfhBWA'
  },
  {
    title: 'collar',
    artist: 'saoirse dream, Can of Bliss',
    id: 'i1D8WkGuq4g'
  },
  {
    title: 'Walkabout',
    artist: 'Atlas Sound W/ Noah Lennox',
    id: 'ExUAqfIPHY0'
  }
];
let songIndex = 0;

const delays = [75, 100, 150];
function typeWriter(ele, text, idx = 0, delay = 100) {
  if (idx < text.length) {
    ele.innerHTML += text.charAt(idx);
    if(text.charAt(idx + 1) === ' ') delay = 250;
    else delay = delays[Math.floor(Math.random() * delays.length)];
    setTimeout(() => { typeWriter(ele, text, ++idx) }, delay);
  }
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: songData[0].id,
    playerVars: {
      'playsinline': 1
    },
  });
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

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

  document.getElementsByClassName('wavy-line-divider-container')[0].innerHTML = `
    <svg width="254" height="24" viewBox="0 0 254 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C10.3333 -1.33333 18.6667 -1.33333 27 12C35.3333 25.3333 43.6667 25.3333 52 12C60.3333 -1.33333 68.6667 -1.33333 77 12C85.3333 25.3333 93.6667 25.3333 102 12C110.333 -1.33333 118.667 -1.33333 127 12C135.333 25.3333 143.667 25.3333 152 12C160.333 -1.33333 168.667 -1.33333 177 12C185.333 25.3333 193.667 25.3333 202 12C210.333 -1.33333 218.667 -1.33333 227 12C235.333 25.3333 243.667 25.3333 252 12" stroke="black" stroke-width="3"/>
    </svg>
    <svg width="254" height="24" viewBox="0 0 254 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C10.3333 -1.33333 18.6667 -1.33333 27 12C35.3333 25.3333 43.6667 25.3333 52 12C60.3333 -1.33333 68.6667 -1.33333 77 12C85.3333 25.3333 93.6667 25.3333 102 12C110.333 -1.33333 118.667 -1.33333 127 12C135.333 25.3333 143.667 25.3333 152 12C160.333 -1.33333 168.667 -1.33333 177 12C185.333 25.3333 193.667 25.3333 202 12C210.333 -1.33333 218.667 -1.33333 227 12C235.333 25.3333 243.667 25.3333 252 12" stroke="black" stroke-width="3"/>
    </svg>
  `

  typeWriter(document.getElementsByClassName('typewriter-text')[0], "Hey, I'm Kevin!");

  const setSongData = () => {
    document.querySelector('.music-card-song').innerHTML = songData[songIndex].title;
    document.querySelector('.music-card-artist').innerHTML = songData[songIndex].artist;
    document.getElementById('yt-link').setAttribute('href', `https://www.youtube.com/watch?v=${songData[songIndex].id}`)
  }

  const changeSong = () => {
    player.cueVideoById(songData[songIndex].id);
    player.nextVideo()
    setSongData();
  } 

  setSongData();

  document.querySelector(".play-btn").addEventListener("click", () => {
    player.playVideo();
  });
  document.querySelector(".pause-btn").addEventListener("click", () => {
    player.pauseVideo();
  });
  
  const play = document.querySelector('.play-btn');
  const pause = document.querySelector('.pause-btn');
  pause.setAttribute('style', 'display: none;');
  document.querySelector('.play-pause-container').addEventListener("click", (e) => {
    if([...e.target.classList].find(className => className === 'fa-circle-play')) {
      play.setAttribute('style', 'display: none;');
      pause.setAttribute('style', 'display: inline;');
    } else {
      play.setAttribute('style', 'display: inline;');
      pause.setAttribute('style', 'display: none;');
    }
  })
  
  // when clicking on fwd / back buttons, cueVideoById(id, startSeconds)
  document.querySelector('.back-btn').addEventListener('click', () => {
    songIndex--;
    if(songIndex === -1) songIndex = songData.length - 1;
    changeSong();
  })
  document.querySelector('.fwd-btn').addEventListener('click', () => {
    songIndex++;
    if(songIndex === songData.length) songIndex = 0;
    changeSong();
  })
});

