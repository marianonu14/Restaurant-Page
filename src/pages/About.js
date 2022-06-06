const About = () => {
    const content = document.querySelector('#content');
    
    const about = document.createElement("div");
    about.className = "main-container";

    const aboutHeader = document.createElement("h1");
    aboutHeader.className = "header";
    aboutHeader.textContent = "About Us";

    const aboutContent = document.createElement("div");
    aboutContent.className = "content";
    aboutContent.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas facilis quod mollitia corrupti vitae reprehenderit ex, hic omnis vel deleniti voluptatum, nobis sint aspernatur eaque nostrum alias! Dolorem, omnis! Sometimes during an interview, the hiring manager will ask a question like Tell me something about your company? or What gets you excited about possibly working here? The hiring manager is checking to make sure you've researched the company before the interview.";

    about.appendChild(aboutHeader);
    about.appendChild(aboutContent);
    

    content.appendChild(about);
}

export default About;