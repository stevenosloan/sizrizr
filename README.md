Sizrizr
=======

Modernizr style testing for viewport width. Sizrizr will add a class to the `<html>` element for each point added in the format `.sizrizr-{{point_name}}` as well as creating an object to test against `Sizrizr.{{name}}.test`

## current version: 0.2

[sizrizr.min.js](https://github.com/stevenosloan/Sizrizr/edit/master/script/sizrizr.min.js)<br/>
[sizrizr.js](https://github.com/stevenosloan/Sizrizr/edit/master/script/sizrizr.js)

Basic Usage
-----------

1. Include the `sizrizr.min.js` file
2. Add points to test against, eg `Sizrizr.addPoint( "small", "under", 580 );`
3. Init - `Sizrizr.run();`
4. Test - If your viewport width is under 580px, `Sizrizr.small.test` will return `true` and the class `sizrizr-small` is added to the `<html>` element
5. Refresh - When necessary (like when adding another point since init, or viewport resize) fire the `Sizrizr.run()` function to update the truthyness of the tests and update the `<html>`'s classes

See the [test](https://github.com/stevenosloan/Sizrizr/blob/master/test/index.html) for an example

    <head>
      <script type="text/javascript" src="path/to/sizrizr.min.js"></script>
      <script type="text/javascript">
        Sizrizr.addPoint( 'small', 'under', 580 );
        Sizrizr.addPoint( 'mid', 'between', [ 580, 960 ] );
        Sizrizr.addPoint( 'large', 'over', 960 );
        Sizrizr.run();
      </script>
    </head>

Methods
-------

### addPoint 

`Sizrizr.addPoint( name, type, point )` : Create a new breakpoint

* __name__ : a string that will be the name of the point to test against later or to be used for classes
* __type__ : a string with the possible value "over", "under", or "between" - this indicates how to test the points
* __point__ : an array or integer, if `type` is "over" or "under" this is an integer to test against, if `type` is "between" this is an array of [bottom, top] to test between.

Once `Sizrizr.run()` is called you can test against the point using `Sizrizr.{{name}}.test` to return true or false.

### init
`Sizrizr.run()` : the first call for Sizrizr, this caches the existing html classes then test all points that have been registered thus far.

### refresh
`Sizrizr.run()` : refreshes all registered points and applies the approprate classes to the `<html>` element

### width
`Sizrizr.width()` : Returns the current window width 


Resize Events
-------------

Sizrizr doesn't include a native resize event so that you can roll your own as best suites your use case. Just fire `Sizrizr.run()` whenever necessary. For a lightweight example you can use the [debulked onresize handler](https://github.com/louisremi/jquery-smartresize) from Louis Remi. 

    <script type="text/javascript">
      // debulked onresize handler - https://github.com/louisremi/jquery-smartresize
      function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

      window.on_resize( Sizrizr.run );
    </script>



Rake Tasks for Test Site
------------------------

`rake sass` - build sass files

`rake script` - minify sizerizr js

`rake build` - do it all

`rake refresh` - run build and start server