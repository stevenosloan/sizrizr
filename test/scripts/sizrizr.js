// Sizrizr
window.Sizrizr = (function( window, document ) {

  var docElement = document.documentElement,
  Sizrizr = {},
  classes = [ "sizrizr" ];


  // Get the window Width
  // var winWidth = 0;
  // if( typeof( window.innerWidth ) == 'number' ) {
  //   //Non-IE
  //   winWidth = window.innerWidth;
  // } else if( document.documentElement && ( document.documentElement.clientWidth ) ) {
  //   //IE 6+ in 'standards compliant mode'
  //   winWidth = document.documentElement.clientWidth;
  // } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
  //   //IE 4 compatible
  //   winWidth = document.body.clientWidth;
  // }
  var winWidth = ( typeof( window.innerWidth ) == 'number' ) ? window.innerWidth : ( document.documentElement && ( document.documentElement.clientWidth ) ) ? document.documentElement.clientWidth : ( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) ? document.body.clientWidth : 0;

  // name = string
  // type = string : "over", "under", or "between"
  // point = number or array : array if type is "between"
  Sizrizr.addPoint = function( name, type, point ){

    var test = ( type === "between" && winWidth >= point[0] && winWidth < point[1] ) ? true : ( type === "under" && winWidth < point ) ? true : ( type === "over" && winWidth >= point ) ? true : false;

    docElement.className = (test === true) ? docElement.className + ' sizrizr-' + name : docElement.className;

    Sizrizr[name] = ( test === true ) ? true : false;
    return Sizrizr;

  };


  // Remove "no-js" class from <html> element, if it exists & add the new classes to the <html> element.
  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + ' ' + classes.join(' ');

  return Sizrizr;

})( this, this.document );