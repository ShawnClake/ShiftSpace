

$('body').prepend('<div id="shiftspace" class="overlay"></div>');

/*STH_SHIFTSPACE = null;

(function (sth, undefined){

    sth.Shiftspace = (function() {

        function Shiftspace ( total ) {
			
            this.ssTotal = total || 3;

            this.spanx = window.outerWidth;
            this.spany = window.outerHeight;
            this.pos = $(window).scrollTop();

            this.ss = Math.ceil( this.ssTotal / 2 );

            for(var i = 0; i < this.ssTotal; i++) {
                //alert(this.ssTotal);
                $('#shiftspace' + ( i + 1)).css("left", -this.spanx);

            }

            $('#shiftspace' + this.ss).css("left", 0);

        }

        Shiftspace.prototype = {

            goBackwards: function() {

                if(this.ss > 1) {

                    $('#shiftspace' + (this.ss - 1)).css({"left":-this.spanx, "opacity":0});
                    $('#shiftspace' + this.ss).animate({

                        "left":this.spanx,
                        "opacity":0

                    }, {duration:500, queue: false});

                    this.ss--;

                    $('#shiftspace' + this.ss).animate({

                        "left":0,
                        "opacity":1

                    }, {duration:500, queue: false});

                }


            },

            goForwards: function() {

                if(this.ss < this.ssTotal) {

                    $('#shiftspace' + (this.ss + 1)).css({"left":this.spanx, "opacity":0});
                    $('#shiftspace' + this.ss).animate({

                        "left":-this.spanx,
                        "opacity":0

                    }, {duration:500, queue: false});

                    this.ss++;

                    $('#shiftspace' + this.ss).animate({

                        "left":0,
                        "opacity":1

                    }, {duration:500, queue: false});

                }


            }


        };

        return Shiftspace;

    })();

}(window.sth = window.sth || {}));



$(document).keydown(function(e){

    if(e.shiftKey && e.which==32) {

        $('#shiftspace').slideToggle('fast', function() {

             if($('#shiftspace').is(":visible")) {

                 document.body.style.overflow = 'hidden';

             } else {

                 document.body.style.overflow = 'auto';

             }

        });


    } else if(e.which==27 && $('#shiftspace').is(":visible")) {

        $('#shiftspace').slideToggle('fast', function() {

           document.body.style.overflow = 'auto';

        });

    } else if(e.which==37 && $('#shiftspace').is(":visible")) {

        STH_SHIFTSPACE.goBackwards();

    } else if(e.which==39 && $('#shiftspace').is(":visible")) {

        STH_SHIFTSPACE.goForwards();

    }

});



$('.backwarder').click(function() {

    STH_SHIFTSPACE.goBackwards();

});

$('.forwarder').click(function() {

    STH_SHIFTSPACE.goForwards();

});

$( window ).resize(function() {


    STH_SHIFTSPACE.spanx = window.outerWidth;
    STH_SHIFTSPACE.spany = window.outerHeight;

});

//alert("test5");



var path = chrome.extension.getURL("shiftspace/init.html");

$('#shiftspace').load(path);
//alert("test6");

$(function() {
		
        STH_SHIFTSPACE = new sth.Shiftspace( 1 );
		//alert("test7");

});*/

$(document).keydown(function(e){

    if(e.shiftKey && e.which==32) {

        $('#shiftspace').slideToggle('fast', function() {

             if($('#shiftspace').is(":visible")) {

                 document.body.style.overflow = 'hidden';

             } else {

                 document.body.style.overflow = 'auto';

             }

        });


    } else if(e.which==27 && $('#shiftspace').is(":visible")) {

        $('#shiftspace').slideToggle('fast', function() {

           document.body.style.overflow = 'auto';

        });

    } else if(e.which==37 && $('#shiftspace').is(":visible")) {

        //STH_SHIFTSPACE.goBackwards();

    } else if(e.which==39 && $('#shiftspace').is(":visible")) {

        //STH_SHIFTSPACE.goForwards();

    }

});

$(document).ready(function(){
	
	$('.sthclosebtn').click(function() {
	
        $('#shiftspace').slideToggle('fast', function() {

             if($('#shiftspace').is(":visible")) {

                 document.body.style.overflow = 'hidden';

             } else {

                 document.body.style.overflow = 'auto';

             }

        });
   

	});
	
	
});


var path = chrome.extension.getURL("shiftspace/init.html");

$('#shiftspace').load(path);



