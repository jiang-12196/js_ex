import css from './helloWorld.css';

const hello = () => {
    let hello = 'hello';
    const world = ' world';
    const div = document.createElement('div');
    div.innerHTML = hello + world;
    return div;
};

export default hello;