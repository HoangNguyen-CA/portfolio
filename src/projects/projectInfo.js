import MainProject from './MainProject';
import SmallProject from './SmallProject';

import recipeAppImage from '../images/projects/recipe.png';

import fyloLandingImage from '../images/projects/fylo-landing-page.jpg';
import fyloStorageImage from '../images/projects/fylo-storage-component.jpg';
import calculatorImage from '../images/projects/calculator.jpg';
import shortlyImage from '../images/projects/shortly.jpg';

const MainProjectsList = [
  {
    header: 'Recipe App',
    image: recipeAppImage,
    tags: ['React', 'Redux', 'Nodejs', 'Express', 'MongoDB', 'API'],
    desc: 'An application that uses a third-party API to fetch information about recipes. The frontend uses form generation & validation made from scratch. User authentication/authorization is implemented using json web tokens. Users can save favorite recipes for future reference.',
    demoLink: 'https://hoangnguyen-recipe-app.herokuapp.com/',
    codeLink: 'https://github.com/HoangNguyen-CA/cooking-recipe-app',
  },
];

export const MainProjectItems = MainProjectsList.map((params) => (
  <MainProject {...params} key={params.header}></MainProject>
));

const SmallProjectsList = [
  {
    image: fyloLandingImage,
    header: 'Fylo Landing Page',
    codeLink: 'https://github.com/HoangNguyen-CA/fylo-dark-theme-landing-page',
    demoLink: 'https://hoangnguyen-fylo-dark-theme.netlify.app/',
  },
  {
    image: shortlyImage,
    header: 'Url Shortener',
    codeLink: 'https://github.com/HoangNguyen-CA/url-shortener',
    demoLink: 'https://hoangnguyen-url-shortener.netlify.app/',
  },
  {
    image: calculatorImage,
    header: 'Javascript Calculator',
    codeLink: 'https://github.com/HoangNguyen-CA/react-calculator-app',
    demoLink: 'https://hoangnguyen-react-calculator.netlify.app/',
  },
  {
    image: fyloStorageImage,
    header: 'Fylo Storage Component',
    codeLink: 'https://github.com/HoangNguyen-CA/fylo-data-storage-component',
    demoLink: 'https://hoangnguyen-fylo-storage.netlify.app/',
  },
];

export const SmallProjectItems = SmallProjectsList.map((params) => (
  <SmallProject {...params} key={params.header}></SmallProject>
));
