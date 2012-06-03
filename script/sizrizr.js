// Sizrizr
window.Sizrizr = (function( window, document, undefined ) {

  var docElement = document.documentElement;

  var classes = [ "sizrizr" ];



  // Remove "no-js" class from <html> element, if it exists:
  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

  // Add the new classes to the <html> element.
  ' js ' + classes.join(' ');

})(this, this.document);