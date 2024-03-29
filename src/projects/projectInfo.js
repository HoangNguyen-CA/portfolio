import MainProject from "./MainProject";
import SmallProject from "./SmallProject";

import recipeAppImage from "../images/projects/recipe.png";
import socialMediaAppImage from "../images/projects/social-media.png";
import nextjsBlog from "../images/projects/nextjs-blog.png";
import aiImageGeneratorImage from "../images/projects/ai-image-generator.png";

import fyloLandingImage from "../images/projects/fylo-landing-page.jpg";
import fyloStorageImage from "../images/projects/fylo-storage-component.jpg";
import calculatorImage from "../images/projects/calculator.jpg";
import shortlyImage from "../images/projects/shortly.jpg";

const MainProjectsList = [
  {
    header: "AI Image Generator",
    image: aiImageGeneratorImage,
    tags: [
      "AWS Services",
      "Auth0",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "React",
      "Material UI",
    ],
    desc: "A full-stack app that uses OpenAI's image generation API to create images from a given text prompt. Users are authenticated using Auth0 and can save generated images for future reference. The backend infrastructure is hosted using AWS services (S3, EC2, Route53, RDS) and the frontend SPA is hosted on netlify.",
    demoLink: "https://hnca-ai-image-generator.netlify.app/",
    codeLink: "https://github.com/HoangNguyen-CA/ai-image-generator",
  },
  {
    header: "Next.js Blog",
    image: nextjsBlog,
    tags: ["Next.js", "Static Site Generation", "Headless CMS"],
    desc: `A blog created using the Next.js framework. Pages are converted into static files at build time to improve SEO and load speeds. Content is managed by Contentful Headless CMS. `,
    demoLink: "https://hoangnguyen-blog.vercel.app/",
    codeLink: "https://github.com/HoangNguyen-CA/personal-blog",
  },
  {
    header: "Social Media App",
    image: socialMediaAppImage,
    tags: [
      "React",
      "Redux",
      "Nodejs",
      "Express",
      "MongoDB",
      "react-testing-library",
      "JWT authentication",
    ],
    desc: `An application made to mimic Twitter; only the design was taken from Twitter. Backend and frontend code was written entirely from scratch. The app has features you would expect from a social-media site including user authentication/authorization and CRUD operations. The code is written with maintainability in mind since this will be a long-term project. The app utilizes React Testing Library for unit and integration tests.`,
    codeLink: "https://github.com/HoangNguyen-CA/social-media-app",
    heroku: true,
  },
  {
    header: "Recipe App",
    image: recipeAppImage,
    tags: [
      "React",
      "Redux",
      "Nodejs",
      "Express",
      "MongoDB",
      "Edamam API",
      "JWT authentication",
    ],
    desc: "An application that uses a third-party API to fetch information about recipes. The frontend uses form generation & validation made from scratch. User authentication/authorization is implemented using json web tokens. Users can save favorite recipes for future reference.",
    codeLink: "https://github.com/HoangNguyen-CA/cooking-recipe-app",
    heroku: true,
  },
];

export const MainProjectItems = MainProjectsList.map((params, index) => (
  <MainProject
    {...params}
    key={params.header}
    reversed={index % 2 === 1}
  ></MainProject>
));

const SmallProjectsList = [
  {
    image: fyloLandingImage,
    header: "Fylo Landing Page",
    codeLink: "https://github.com/HoangNguyen-CA/fylo-dark-theme-landing-page",
    demoLink: "https://hoangnguyen-fylo-dark-theme.netlify.app/",
  },
  {
    image: shortlyImage,
    header: "Url Shortener",
    codeLink: "https://github.com/HoangNguyen-CA/url-shortener",
    demoLink: "https://hoangnguyen-url-shortener.netlify.app/",
  },
  {
    image: calculatorImage,
    header: "Javascript Calculator",
    codeLink: "https://github.com/HoangNguyen-CA/react-calculator-app",
    demoLink: "https://hoangnguyen-react-calculator.netlify.app/",
  },
  {
    image: fyloStorageImage,
    header: "Fylo Storage Component",
    codeLink: "https://github.com/HoangNguyen-CA/fylo-data-storage-component",
    demoLink: "https://hoangnguyen-fylo-storage.netlify.app/",
  },
];

export const SmallProjectItems = SmallProjectsList.map((params) => (
  <SmallProject {...params} key={params.header}></SmallProject>
));
