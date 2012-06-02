Sizrizr
=======

Plugin to write viewport tests

### Goal

Calling:

    Sizrizr({
      name: 'small',
      if: 'under',
      point: 520
    }, {
      name: 'mid',
      if: 'between',
      point: { 520, 960 } 
    }, {
      name: 'large',
      if: 'over',
      point: 960
    });

Adds tests so that if your viewport is between 520, and 960 that `Sizrizr.( 'mid' )` returns true and the class `.sizrizr-mid` is applied to `<html>`



Rake Tasks for Test Site
------------------------

`rake sass` - build sass files

`rake script` - minify sizerizr js

`rake build` - do it all