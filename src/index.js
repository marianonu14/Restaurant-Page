import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import reset from './functions/reset'
import './style.css';
import './pages.css';
import logoImage from './img/logo.jpg'

//Main Container
const content = document.querySelector('#content');

//Navbar
const navbar = document.createElement("nav");
navbar.className="navbar";

//Logo
const logoContainer = document.createElement("div");
logoContainer.className = "logo-container";

const logoImg = document.createElement("img");
logoImg.src = logoImage;

logoContainer.appendChild(logoImg);

//Btn
const btnContainer = document.createElement("div");
btnContainer.className = "btn-container";

const btnHome = document.createElement("a");
btnHome.className = "btn";
btnHome.textContent = "Home";

const btnMenu = document.createElement("a");
btnMenu.className = "btn";
btnMenu.textContent = "Menu";

const btnAbout = document.createElement("a");
btnAbout.className = "btn";
btnAbout.textContent = "About";

btnContainer.appendChild(btnHome);
btnContainer.appendChild(btnMenu);
btnContainer.appendChild(btnAbout);

btnHome.addEventListener('click', () => {
    reset();
    Home();
    btnActive(btnHome);
});

btnMenu.addEventListener('click', () => {
    reset();
    Menu();
    btnActive(btnMenu);
});

btnAbout.addEventListener('click', () => {
    reset();
    About();
    btnActive(btnAbout);
});

function btnActive(btn) {
    btnHome.className = "btn";
    btnMenu.className = "btn";
    btnAbout.className = "btn";
    btn.className = "btn active";
}

navbar.appendChild(logoContainer);
navbar.appendChild(btnContainer);
content.appendChild(navbar);

