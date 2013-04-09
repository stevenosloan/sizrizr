Sizrizr.addPoint( "small", "under", 580 );
Sizrizr.addPoint( "mid", "between", [ 580, 960 ]);
Sizrizr.addPoint( "large", "over", 960 );
Sizrizr.onchange_to("small", function(){
  alert( "I'm small now");
});

Sizrizr.run();