import css from './log.css';

const myImage = (() => {
    const imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return function(src) {
        imgNode.src = src;
    }
})();

const proxyImage = (() => {
    const img = new Image;
    img.onload = function() {
        myImage(this.src);
    };

    return function(src) {
        myImage('http://smashinghub.com/wp-content/uploads/2014/08/cool-loading-animated-gif-3.gif');
        img.src = src;
    }
})();

proxyImage('http://wapfile.desktx.com/pc/160829/bigpic/5wfdpv2nbrs.gif');
