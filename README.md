Sizrizr
=======

Modernizr style testing for viewport width. Sizrizr will add a class to the `<html>` element for each point added in the format `.sizrizr-{{point_name}}` as well as creating an object to test against `Sizrizr.{{name}}.test`

Basic Usage
-----------

1. Include the `sizrizr.min.js` file
2. Add points to test against, eg `Sizrizr.addPoint( "small", "under", 580 );`
3. Init - `Sizrizr.init();`
4. Test - If your viewport width is under 580px, `Sizrizr.small.test` will return `true` and the class `sizrizr-small` is added to the `<html` element
5. Refresh - When necessary (like when adding another point since init, or viewport resize) fire the `Sizrizr.refresh()` function to update the truthyness of the tests and update the `<html>`'s classes


Methods
-------

### addPoint 

`Sizrizr.addPoint( name, type, point )` : Create a new breakpoint

__name__ : a string that will be the name of the point to test against later or to be used for classes
__type__ : a string with the possible value "over", "under", or "between" - this indicates how to test the points
__point__ : an array or integer, if `type` is "over" or "under" this is an integer to test against, if `type` is "between" this is an array of [bottom, top] to test between.

Once `Sizrizr.init()` is called you can test against the point using `Sizrizr.{{name}}.test` to return true or false.

### init
`Sizrizr.init()` : the first call for Sizrizr, this caches the existing html classes then test all points that have been registered thus far.

### refresh
`Sizrizr.refresh()` : refreshes all registered points and applies the approprate classes to the <html> element

### width
`Sizrizr.width` : Returns the window width when `Sizrizr.init()` or `Sizrizr.refresh()` was called



Rake Tasks for Test Site
------------------------

`rake sass` - build sass files

`rake script` - minify sizerizr js

`rake build` - do it all

`rake refresh` - run build and start server