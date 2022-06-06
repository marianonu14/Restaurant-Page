const Home = () => {
    const content = document.querySelector('#content');
    
    const home = document.createElement("div");
    home.className = "main-container";

    const homeHeader = document.createElement("h1");
    homeHeader.className = "header";
    homeHeader.textContent = "Home Page";

    const homeContent = document.createElement("div");
    homeContent.className = "content";
    homeContent.textContent = "La página de inicio se encuentra en el directorio raíz de un sitio web. La mayoría de servidores web permiten a la página de inicio tener uno de los distintos nombres de archivo diferentes que existen, como por ejemplo index.html, index.htm, index.shtml, index.php, default.html o home.html. Este nombre de archivo por defecto de la página principal puede ser personalizado. Como el archivo de la página de inicio se carga automáticamente desde el directorio raíz, la URL de la página principal no tiene por qué incluir el nombre del archivo.";

    home.appendChild(homeHeader);
    home.appendChild(homeContent);
    

    content.appendChild(home);
}

export default Home;