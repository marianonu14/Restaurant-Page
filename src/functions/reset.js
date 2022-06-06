const reset = () => {
    const content = document.querySelector('#content');
    while (content.children.length > 1){
        content.children[1].remove();
    }
}

export default reset;