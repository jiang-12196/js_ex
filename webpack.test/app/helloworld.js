module.exports = () => {
    let hello = 'hello';
    const world = ' world';
    const div = document.createElement('div');
    div.innerHTML = hello + world;
    return div;
};