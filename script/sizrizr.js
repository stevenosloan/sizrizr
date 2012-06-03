// Sizrizr
window.Sizrizr = (function( window, document ) {

  var docElement = document.documentElement;
  var classes = [ "sizrizr" ];


  // Get the window Width
  var winWidth = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    winWidth = window.innerWidth;
  } else if( document.documentElement && ( document.documentElement.clientWidth ) ) {
    //IE 6+ in 'standards compliant mode'
    winWidth = document.documentElement.clientWidth;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    winWidth = document.body.clientWidth;
  }

  // Create Classes based on window Width
  if( winWidth < 580 ){
    classes.push("sizrizr-small");
  } else if( winWidth >= 580 && winWidth <= 960 ){
    classes.push("sizrizr-mid");
  } else if( winWidth > 960 ){
    classes.push("sizrizr-large");
  }

  // Remove "no-js" class from <html> element, if it exists & add the new classes to the <html> element.
  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + ' ' + classes.join(' ');

})( this, this.document );