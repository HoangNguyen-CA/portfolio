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
  <MainProject {...params}></MainProject>
));

const SmallProjectsList = [
  { image: fyloLandingImage, header: 'Fylo Landing Page' },
  { image: shortlyImage, header: 'Url Shortener' },
  { image: calculatorImage, header: 'Javascript Calculator' },
  { image: fyloStorageImage, header: 'Fylo Storage Component' },
];

export const SmallProjectItems = SmallProjectsList.map((params) => (
  <SmallProject {...params}></SmallProject>
));
