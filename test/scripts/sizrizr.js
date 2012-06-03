// Sizrizr
window.Sizrizr = (function( window, document ) {

  var docElement = document.documentElement;
  var Sizrizr = {};
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

  // name = string
  // type = string : "over", "under", or "between"
  // point = number or array : array if type is "between"
  Sizrizr.addPoint = function( name, type, point ){

    var test = false;

    if( type === "between" && winWidth > point[0] && winWidth < point[1] ){

        test = true;

    } else {

      if( type === "under" && winWidth < point ){

        test = true;

      } else if( type === "over" && winWidth > point ){

        test = true;
      
      }

    }


    if( test === true ){

      docElement.className += ' sizrizr-' + name;

    }


    return Sizrizr;
  };


  // Remove "no-js" class from <html> element, if it exists & add the new classes to the <html> element.
  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + ' ' + classes.join(' ');

  return Sizrizr;

})( this, this.document );


Sizrizr.addPoint( "small", "under", 580 );
Sizrizr.addPoint( "mid", "between", [ 580, 960 ]);
Sizrizr.addPoint( "large", "over", 960 );