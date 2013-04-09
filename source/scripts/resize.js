function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

window.on_resize( Sizrizr.run );