import './style.css';
import logoImage from './img/logo.jpg'

//Main Container
const content = document.querySelector('#content');

//Navbar
const navbar = document.createElement("nav");
navbar.className="navbar";

//Logo
const logoContainer = document.createElement("div");
logoContainer.className="logo-container";

const logoImg = document.createElement("img");
logoImg.src=logoImage;

logoContainer.appendChild(logoImg);

//Tags
const btnContainer = document.createElement("div");
btnContainer.className="btn-container";

const btnHome = document.createElement("a");


navbar.appendChild(logoContainer);
navbar.appendChild(btnContainer);

content.appendChild(navbar);


