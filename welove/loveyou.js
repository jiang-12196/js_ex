$text = $('#text');
$container = $('#container');
$flipper = $('#flipper');
color = '#ED5BF7';
colors = ['#F83538', '#FF4400','#19E5DE', '#1CF49A', '#ED5BF7', '#F9F649', '#54EC7E', '#CC342D', '#2FAEFF'];

function setText() {
    if (localStorage) {
        $text.text(localStorage.getItem('text') || 'ILoveYou');
    }
}

function setColor() {
    if(localStorage){
        $text.css('color', localStorage.getItem('color') || color);
    }
}

fontSize = 0;
function adjustFontSize() {
    var minFontSize = 100;
    var maxfontSize = window.innerHeight - 40;
    fontSize = maxfontSize;
    $text.css('font-size', fontSize);
    if($text.text().length < 2) return;
    var innerWidth = window.innerWidth;
    var timer = setInterval(function () {
        if($text.width()>innerWidth){
            fontSize -= 10;
            $text.css('font-size', fontSize);
        } else {
          clearInterval(timer)
        }
    }, 10)
}


setText();
setColor();
adjustFontSize();

$text.on('keydown', function (e) {
    console.log('event:keyup',$(this).width());//width and height
    var keyCode = e.keyCode;
    if(keyCode === 32 || keyCode === 13) return false;
    var innerWidth = window.innerWidth;
    var maxFontSize = window.innerHeight - 40;

    if(keyCode === 8) { //delete
        var timer = setInterval(function () {
            if($text.width() <= innerWidth) {
                if(fontSize < maxFontSize) {
                    fontSize += 10;
                    $text.css('font-size', fontSize);
                }
            } else {
                fontSize -= 10;
                $text.css('font-size', fontSize);
                clearInterval(timer)
            }
        }, 10);
    } else {
        var timer = setInterval(function () {
            if ($text.width()>innerWidth){
                fontSize -= 10;
                $text.css('font-size', fontSize);
            } else {
                clearInterval(timer);
            }
        }, 10)
    }
}).on('keyup', function () {
    if(localStorage) localStorage.setItem('text',$text.text());
});

$(window).on(navigator.standalone ? 'orientationachange' : 'resize', function () {
    adjustFontSize();
}).on('shake', function () {
    color = colors[Math.floor(Math.random()*colors.length)];
    if(localStorage) localStorage.setItem('color',color);
    setColor();
});

degree = 0;
$flipper.css('-webkit-transform', 0);
$container.on('swiperight', function () {
    degree += 180;
    $flipper.css('-webkit-transform', 'rotateY('+ degree +'deg)');
}).on('swipeleft', function () {
    $flipper.css('-webkit-transform', 'rotateY(' + degree +'deg)');
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-16520159-3', 'auto');
ga('send', 'pageview');