var featured = document.getElementById('featured');
var feature_width = featured.offsetWidth;
var articles = document.getElementsByClassName('featured-article');


function set_articleSize(first) {
    if(!first) {
        if(feature_width != featured.offsetWidth) {
            feature_width = featured.offsetWidth;
        } else {
            return;
        }
    }
    for(var i = articles.length - 1; i > -1; i--) {
        if(first) articles[i].style.position = "absolute";
        articles[i].style.width = feature_width + "px";
    }
}

set_articleSize(true);


window.onresize = function( e ) {
    //console.log('resized');
    set_articleSize(false);
}
