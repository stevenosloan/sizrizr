// Sizrizr
window.Sizrizr = (function( window, document ) {

  var docElement = document.documentElement,
  Sizrizr = {};

  // Sizrizr version number
  Sizrizr.version = 0.2;

  // Create blank Sizrizr.points array, to track points as they're added
  Sizrizr.points = [];


  Sizrizr.width = function(){

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

    var width = ( typeof( window.innerWidth ) == 'number' ) ? window.innerWidth : ( document.documentElement && ( document.documentElement.clientWidth ) ) ? document.documentElement.clientWidth : ( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) ? document.body.clientWidth : 0;
    return width;
  };




  Sizrizr.testPoint = function( name, winWidth ){

    var point = Sizrizr[name].point;
    var type = Sizrizr[name].type;

    var test = ( type === "between" && winWidth >= point[0] && winWidth < point[1] ) ? true : ( type === "under" && winWidth < point ) ? true : ( type === "over" && winWidth >= point ) ? true : false;

    Sizrizr[name].test = ( test === true ) ? true : false;

    if(test === true){ Sizrizr.classes.push( 'sizrizr-' + name ); }

  };



  // name = string
  // type = string : "over", "under", or "between"
  // point = number or array : array if type is "between"
  Sizrizr.addPoint = function( name, type, point ){

    Sizrizr.points.push( name );

    Sizrizr[name] = {
      point: point,
      type: type
    };

    return Sizrizr;

  };


  Sizrizr.run = function(){

    Sizrizr.classes = [ "sizrizr" ];

    // grab the current width
    var winWidth = Sizrizr.width();

    for (var i = 0; i < Sizrizr.points.length; i++) {
      Sizrizr.testPoint( Sizrizr.points[i], winWidth );
    }

    // Remove "no-js" class from <html> element, if it exists
    // remove sizrizr and sizrizr-{pont} from <html> if they exist
    // add the new classes to the <html> element.
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2').replace(/(\s|)sizrizr(-\w*|)(\s|)/g, '') + ' ' + Sizrizr.classes.join(' ');

    return Sizrizr;

  };

  return Sizrizr;




})( this, this.document );