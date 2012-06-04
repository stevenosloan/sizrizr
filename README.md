Sizrizr
=======

Modernizr style testing for viewport width.

Use
---

### Defining points:

`Sizrizr.addPoint( name, type, point );`

__name__ : a string describing the breakpoint

__type__ : a string that is either, `under`, `between`, or `over`. This describes weither the test will return true for values under, between two, or over the supplied point.

__point__ : a number or array, use a number with a `type` of under or over, or an array with the bottom or upper bound


### Testing:

    if( Sizrizr.name ){
      // do stuff
    }




Rake Tasks for Test Site
------------------------

`rake sass` - build sass files

`rake script` - minify sizerizr js

`rake build` - do it all

`rake refresh` - run build and start server