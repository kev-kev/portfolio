import Drumblr from "./drumblr-image.png";
import SuperPetBros from "./superPetBros.png";
import MyIslandTracker from "./acnh-tracker.png";
import Verbose from "./verbose.png";
import LetsEat from "./lets-eat.png";
import SaladBowl from "./saladBowl.png";
import LunchTime from "./lunchtime.png";
import GameOfLife from "./gameoflife.png";
import Holler from "./holler.png"

const personalProjects = [
  {
    name: "Let's Eat!",
    url: "https://github.com/kev-kev/lets-eat",
    notes:
      "Web app to help you and your partner plan meals. Frontend: React with context and Material-UI, Backend: Ruby on Rails",
    image: LetsEat,
    inProgress: false,
  },
  {
    name: "Holler",
    url: "https://github.com/kev-kev/holler-app",
    notes: "Twitter clone made with Ruby on Rails and Bootstrap",
    image: Holler,
    inProgress: false
  },
  {
    name: "Verbose",
    url: "https://www.github.com/kev-kev/verbose",
    notes:
      "Vocabulary learning app built with React Bootstrap and the Owlbot API",
    image: Verbose,
    inProgress: false,
  },
  {
    name: "Salad Bowl",
    url: "https://www.github.com/kev-kev/salad-bowl-frontend",
    notes:
      "Online multiplayer game made using Websockets and React. Submit words, act them out, and guess them!",
    image: SaladBowl,
    inProgress: true,
  },
  {
    name: "lunchtime",
    url: "https://github.com/kev-kev/lunchtime",
    notes: "Top-down pixel shooter game, made with Phaser + ES6 + Webpack",
    image: LunchTime,
    inProgress: true,
  },
  {
    name: "Conway's Game of Life",
    url: "https://github.com/kev-kev/game-of-life",
    notes:
      "An implementation of Conway's Game of Life. Created using HTML5 Canvas",
    image: GameOfLife,
    inProgress: false,
  },
  {
    name: "MyIslandTracker",
    url: "https://github.com/kev-kev/acnh_tracker",
    notes: "A tracking tool for the video game Animal Crossing New Horizons.",
    image: MyIslandTracker,
    inProgress: false,
    walkthrough:
      "https://www.notion.so/kevkev/Animal-Crossing-Tracker-a4c84c1041544c2486799b86a85ec6a8",
  },
  {
    name: "Drumblr",
    url: "https://github.com/kev-kev/drumblr-frontend",
    notes:
      "Browser-based drum machine made with React and the Web Drum Sequencer library.",
    image: Drumblr,
    inProgress: false,
  },
  {
    name: "Super Pet Bros",
    url: "https://github.com/kev-kev/superPetBros",
    notes:
      "Create your very own virtual pet and battle it against others. Vanilla JS frontend and Ruby on Rails backend",
    image: SuperPetBros,
    inProgress: false,
  },
];

export { personalProjects };
