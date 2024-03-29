import { projectData } from './ProjectData.js';

const barColors = [
  '#82B4FF',
  '#FF9587',
  '#97DF5F',
  '#FFE587',
  '#FF93F4',
]


let colorIdx = 0;
const setBarColors = (bars) => {
  [...bars].forEach((bar) => {
    bar.style.backgroundColor = barColors[colorIdx];
    colorIdx++;
    if(colorIdx === barColors.length) colorIdx = 0;
  })
}
setBarColors(document.getElementsByClassName('header-card-bar'));
// create project cards
const projectCardContainer = document.getElementById('project-card-container');
for(let i = 0; i < projectData.length; i++) {
  const projectCard = document.createElement('div');
  projectCard.setAttribute('class', 'card project-card');
  const cardBar = document.createElement('div');
  cardBar.setAttribute('class', 'card-bar project-card-bar');
  const iconContainer = document.createElement('div');
  iconContainer.setAttribute('class', 'card-bar-icon-container');
  const content = document.createElement('div');
  content.setAttribute('class', 'project-card-content card-content');
  cardBar.append(iconContainer);
  projectCard.append(cardBar, content);
  projectCardContainer.append(projectCard);
}
setBarColors([...document.getElementsByClassName('project-card-bar')]);
// add fa icons
const iconContainers = document.getElementsByClassName('card-bar-icon-container');
for(const iconContainer of iconContainers) {
  iconContainer.innerHTML = `
  <i class="bar-icon fa-solid fa-down-left-and-up-right-to-center"></i>
  <i class="bar-icon fa-regular fa-circle"></i>
  <i class="bar-icon fa-solid fa-xmark"></i>
  `;
}

const delays = [75, 100, 150];
function typeWriter(ele, text, idx = 0, delay = 100) {
  if (idx < text.length) {
    ele.innerHTML += text.charAt(idx);
    if(text.charAt(idx + 1) === ' ') delay = 250;
    else delay = delays[Math.floor(Math.random() * delays.length)];
    setTimeout(() => { typeWriter(ele, text, ++idx) }, delay);
  }
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

// youtube iframe api setup
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
  });
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
const setSongData = () => {
  document.querySelector('.music-card-song').innerHTML = songData[songIndex].title;
  document.querySelector('.music-card-artist').innerHTML = songData[songIndex].artist;
  document.getElementById('yt-link').setAttribute('href', `https://www.youtube.com/watch?v=${songData[songIndex].id}`);
}
setSongData();

window.addEventListener("load", () => { 

  let idx = 0;
  [...document.getElementsByClassName('project-card-content')].forEach((content) => {
    content.innerHTML = `
      <div class="project-card-img" style="background-image: url('${projectData[idx].imagePath}');"></div>
      <div class="project-card-text-container">
        <h2 class="project-card-title">${projectData[idx].name}</h2>
        <p class="project-card-description">${projectData[idx].notes}</p>
        <div class="project-card-btn-container">
          ${projectData[idx].url ? `<a class="btn project-card-btn" href='${projectData[idx].url}' target="_blank">VISIT PROJECT</a>`: ''}
          <a class="btn project-card-btn" href='${projectData[idx].github}' target="_blank">VIEW GITHUB</a>
        </div>
      </div>
    `;
    const cardBarTitle = document.createElement('span');
    cardBarTitle.setAttribute('class', 'card-bar-title');
    cardBarTitle.textContent = projectData[idx].name;
    content.previousElementSibling.prepend(cardBarTitle);
    idx++;
  });

  document.getElementsByClassName('wavy-line-divider-container')[0].innerHTML = `
    <svg width="254" height="24" viewBox="0 0 254 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C10.3333 -1.33333 18.6667 -1.33333 27 12C35.3333 25.3333 43.6667 25.3333 52 12C60.3333 -1.33333 68.6667 -1.33333 77 12C85.3333 25.3333 93.6667 25.3333 102 12C110.333 -1.33333 118.667 -1.33333 127 12C135.333 25.3333 143.667 25.3333 152 12C160.333 -1.33333 168.667 -1.33333 177 12C185.333 25.3333 193.667 25.3333 202 12C210.333 -1.33333 218.667 -1.33333 227 12C235.333 25.3333 243.667 25.3333 252 12" stroke="black" stroke-width="3"/>
    </svg>
    <svg width="254" height="24" viewBox="0 0 254 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C10.3333 -1.33333 18.6667 -1.33333 27 12C35.3333 25.3333 43.6667 25.3333 52 12C60.3333 -1.33333 68.6667 -1.33333 77 12C85.3333 25.3333 93.6667 25.3333 102 12C110.333 -1.33333 118.667 -1.33333 127 12C135.333 25.3333 143.667 25.3333 152 12C160.333 -1.33333 168.667 -1.33333 177 12C185.333 25.3333 193.667 25.3333 202 12C210.333 -1.33333 218.667 -1.33333 227 12C235.333 25.3333 243.667 25.3333 252 12" stroke="black" stroke-width="3"/>
    </svg>
  `;
  typeWriter(document.getElementsByClassName('typewriter-text')[0], "Hey, I'm Kevin!");

 
  const play = document.querySelector('.play-btn');
  const pause = document.querySelector('.pause-btn');
  const musicBars = document.getElementsByClassName('music-bar');

  const playSong = () => {
    document.querySelector('.music-card-instructions').setAttribute('style', 'display: none;');
    play.setAttribute('style', 'display: none;');
    pause.setAttribute('style', 'display: inline;');
    player.setVolume(20);
    player.playVideo();
    [...musicBars].forEach(musicBar => {
      musicBar.classList.add("music-bar-animated");
    });
  };

  const pauseSong = () => { 
    play.setAttribute('style', 'display: inline;');
    pause.setAttribute('style', 'display: none;');
    player.pauseVideo();
    [...musicBars].forEach(musicBar => {
      musicBar.classList.remove("music-bar-animated");
    });
  };

  const changeSong = () => {
    player.cueVideoById(songData[songIndex].id);
    player.nextVideo();
    setSongData();
    pauseSong();
  }
  
  document.querySelector('.play-pause-container').addEventListener("click", (e) => {
    if([...e.target.classList].find(className => className === 'fa-circle-play')) {
      playSong();
    } else {
      pauseSong();
    }
  });

  const mute = document.querySelector('.mute-btn');
  const unmute = document.querySelector('.unmute-btn');
  document.querySelector('.vol-icon-container').addEventListener("click", (e) => {
    if([...e.target.classList].find(className => className === 'mute-btn')) {
      mute.setAttribute('style', 'display: none;');
      unmute.setAttribute('style', 'display: inline;');
      player.mute();
    } else {
      mute.setAttribute('style', 'display: inline;');
      unmute.setAttribute('style', 'display: none;');
      player.unMute();
    }
  })

  document.querySelector('.back-btn').addEventListener('click', () => {
    songIndex--;
    if(songIndex === -1) songIndex = songData.length - 1;
    changeSong();
  });
  document.querySelector('.fwd-btn').addEventListener('click', () => {
    songIndex++;
    if(songIndex === songData.length) songIndex = 0;
    changeSong();
  });
});