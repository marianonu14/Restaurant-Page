const Menu = () => {
    const content = document.querySelector('#content');
    
    const menu = document.createElement("div");
    menu.className = "main-container";

    const menuHeader = document.createElement("h1");
    menuHeader.className = "header";
    menuHeader.textContent = "Menu";

    const menuContent = document.createElement("div");
    menuContent.className = "content";
    menuContent.textContent = "When creating a website, the different elements of the page should come together in guiding visitors through your site seamlessly and with ease. One element that plays a decisive role in the user experience of your site and greatly affects navigation, is the menu. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas facilis quod mollitia corrupti vitae reprehenderit ex, hic omnis vel deleniti voluptatum, nobis sint aspernatur eaque nostrum alias! Dolorem, omnis!";

    const menuBtn = document.createElement("a");
    menuBtn.className = "btn-menu";
    menuBtn.href = "https://www.google.com/";
    menuBtn.textContent = "Go To Google";

    menu.appendChild(menuHeader);
    menu.appendChild(menuContent);
    menu.appendChild(menuBtn);
    

    content.appendChild(menu);
}

export default Menu;