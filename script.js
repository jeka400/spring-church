$(document).ready(function() {

  var loc = window.location.pathname;
  console.log(loc);
  $('.navbar-nav').find('a').each(function() {
    $(this).toggleClass('active', $(this).attr('href') == loc);
  });

    //  ==================================================       Gallery       ========================================================

    $( ".galleryItem" )
        .mouseover(function() {
            $( this ).append( $(".hover").removeClass("hide") );
        });
        // .mouseout(function() {
        //     $( this ).find( ".hover" ).addClass( "hide" );
        // });
    


    //  ====================================================       Timer       ========================================================
    function makeTimer() {

		var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");		

    }
    setInterval(function() { makeTimer(); }, 1000);



    //  ===================================================       ScrollingDown - Nav       ============================================
    var scrollNav = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > scrollNav){
            $(".navbar").css("position", "absolute");
        } else {
            $('.navbar').css('position', 'fixed');
            $('.navbar').css('background-color', 'rgb(255, 255, 255)');
            $('.nav-link').css('color', 'rgb(0, 0, 0');
            $('.navListAncor').css('background-color', '#c7b198');
            $('.navbar-toggler.navbar-toggler').css('color', 'rgb(0, 0, 0');
            $('.navbar-toggler-icon-white').css('color', 'rgb(0, 0, 0');
            $('.collapse').css('background-color', 'rgb(255, 255, 255');
            $('.brand-first').css('color', 'rgb(0, 0, 0');
            $('.brand-second').css('color', 'rgb(0, 0, 0');
            $('.brand-first').toggleClass('changedBefore');
            $('.brand-first').toggleClass('changedAfter');
        }
        scrollNav = st;
    });



    //  ===================================================       Scrolling - rest doc       ============================================
    var withinViewport = (function() {

        'use strict';
      
        if (window.requestAnimationFrame && document.documentElement.classList) {
      
          // Passes the test so add enhanced class to HTML tag
          document.documentElement.classList.add('enhanced');
      
          // Throttle
          // https://underscorejs.org/#throttle
          var throttle = function(func, wait, options) {
            var _ = {
              now: Date.now || function() {
                return new Date().getTime();
              }
            };
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) {
              options = {};
            }
            var later = function() {
              previous = options.leading === false ? 0 : _.now();
              timeout = null;
              result = func.apply(context, args);
              if (!timeout) {
                context = args = null;
              }
            };
            return function() {
              var now = _.now();
              if (!previous && options.leading === false) {
                previous = now;
              }
              var remaining = wait - (now - previous);
              context = this;
              args = arguments;
              if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                  clearTimeout(timeout);
                  timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) {
                  context = args = null;
                }
              } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
              }
              return result;
            };
          };
          
          // requestAnimationFrame
          // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
          var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
      
          // Global class for revealing element
          var revealer = document.querySelectorAll('.revealer');


          //For social icons in footer
          var si1 = document.querySelectorAll('.si-1');
          var si2 = document.querySelectorAll('.si-2');
          var si3 = document.querySelectorAll('.si-3');
      
          // Get the viewport (window) dimensions
          var getViewportSize = function() {
            return {
              width: window.document.documentElement.clientWidth,
              height: window.document.documentElement.clientHeight
            };
          };
      
          // Get the current scoll position
          var getCurrentScroll = function() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          };
      
          // Get element dimensions and position
          var getElemInfo = function(elem) {
            var offsetTop = 0;
            var offsetLeft = 0;
            var offsetHeight = elem.offsetHeight;
            var offsetWidth = elem.offsetWidth;
      
            do {
              if (!isNaN(elem.offsetTop)) {
                offsetTop += elem.offsetTop;
              }
              if (!isNaN(elem.offsetLeft)) {
                offsetLeft += elem.offsetLeft;
              }
            } while ((elem = elem.offsetParent) !== null);
      
            return {
              top: offsetTop,
              left: offsetLeft,
              height: offsetHeight,
              width: offsetWidth
            };
          };
      
          // Check visibility of the element in the viewport
          var checkVisibility = function(elem) {
            var viewportSize = getViewportSize();
            var currentScroll = getCurrentScroll();
            var elemInfo = getElemInfo(elem);
            var spaceOffset = 0.2;
            var elemHeight = elemInfo.height;
            var elemWidth = elemInfo.width;
            var elemTop = elemInfo.top;
            var elemLeft = elemInfo.left;
            var elemBottom = elemTop + elemHeight;
            var elemRight = elemLeft + elemWidth;
      
            var checkBoundaries = function() {
              // Defining the element boundaries and extra space offset
              var top = elemTop + elemHeight * spaceOffset;
              var left = elemLeft + elemWidth * spaceOffset;
              var bottom = elemBottom - elemHeight * spaceOffset;
              var right = elemRight - elemWidth * spaceOffset;
      
              // Defining the window boundaries and window offset
              var wTop = currentScroll.y + 0;
              var wLeft = currentScroll.x + 0;
              var wBottom = currentScroll.y - 0 + viewportSize.height;
              var wRight = currentScroll.x - 0 + viewportSize.width;
      
              // Check if the element is within boundary
              return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
            };
      
            return checkBoundaries();
          };
      
          // Run a loop with checkVisibility() and add / remove classes to the elements
          var toggleElement = function() {
            for (var i = 0; i < revealer.length; i++) {
              if (checkVisibility(revealer[i])) {
                revealer[i].classList.add('animate-5');
              } else {
                revealer[i].classList.remove('animate-5');
              }
            }
          };


        //   for social icons in footer
          var toggleElement1 = function() {
            for (var i = 0; i < si1.length; i++) {
              if (checkVisibility(si1[i])) {
                si1[i].classList.add('animate-1');
                si2[i].classList.add('animate-2');
                si3[i].classList.add('animate-3');
              } else {
                si1[i].classList.remove('animate-1');
                si2[i].classList.remove('animate-2');
                si3[i].classList.remove('animate-3');
              }
            }
          };

          var toggleElement2 = function() {
            for (var i = 0; i < revealer.length; i++) {
              if (checkVisibility(revealer[i])) {
                revealer[i].classList.add('animate-5');
              } else {
                revealer[i].classList.remove('animate-5');
              }
            }
          };
     
      
          // Throttle events and requestAnimationFrame
          var scrollHandler = throttle(function() {
            _requestAnimationFrame(toggleElement);
            _requestAnimationFrame(toggleElement1);
            _requestAnimationFrame(toggleElement2);
          }, 300);
      
          var resizeHandler = throttle(function() {
            _requestAnimationFrame(toggleElement);
            _requestAnimationFrame(toggleElement1);
            _requestAnimationFrame(toggleElement2);
      
            // For demo purposes only
            fullscreenIntro();
          }, 300);
      
          scrollHandler();
      
          // Listening for events
          if (window.addEventListener) {
            addEventListener('scroll', scrollHandler, false);
            addEventListener('resize', resizeHandler, false);
          } else if (window.attachEvent) {
            window.attachEvent('onscroll', scrollHandler);
            window.attachEvent('onresize', resizeHandler);
          } else {
            window.onscroll = scrollHandler;
            window.onresize = resizeHandler;
          }
      
        }


         //  ===================================================       Number - counter       ============================================
        function animateValue(id, start, end, duration) {
            // assumes integer values for start and end
            
            var obj = document.getElementById(id);
            var range = end - start;
            // no timer shorter than 50ms (not really visible any way)
            var minTimer = 50;
            // calc step time to show all interediate values
            var stepTime = Math.abs(Math.floor(duration / range));

            // never go below minTimer
            stepTime = Math.max(stepTime, minTimer);

            // get current time and calculate desired end time
            var startTime = new Date().getTime();
            var endTime = startTime + duration;
            var timer;

            function run() {
                var now = new Date().getTime();
                var remaining = Math.max((endTime - now) / duration, 0);
                var value = Math.round(end - (remaining * range));
                obj.innerHTML = value;
                if (value == end) {
                    clearInterval(timer);
                }
                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(value.toString())) {
                        value = value.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                    }
                }
            }

            var timer = setInterval(run, stepTime);
            run();
        }
        
        animateValue("counterMembers", 100, 7000, 500);






        // Makes fullscreen intro on any device so user is forced to scroll
        var fullscreenIntro = function() {
          var fullscreen = document.querySelectorAll('.fullscreen');
          for (var i = 0; i < fullscreen.length; i++) {
            fullscreen[i].style.height = getViewportSize().height + 1 + 'px';
          }
        };
        fullscreenIntro();
      
        return withinViewport;
      
      }());



      
    //  ===================================================       Number - counter       ============================================
    function animateValue(id, start, end, duration) {
        // assumes integer values for start and end
        
        var obj = document.getElementById(id);
        var range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;
        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));

        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);

        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            obj.innerHTML = value;
            if (value == end) {
                clearInterval(timer);
            }
            // Preserve commas if input had commas
            if (isComma) {
                while (/(\d+)(\d{3})/.test(value.toString())) {
                    value = value.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                }
            }
        }

        var timer = setInterval(run, stepTime);
        run();
    }
    animateValue("counterMembers", 100, 7000, 500);



    //  ===================================================       Smooth scrolling on click       ============================================
    
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 2000, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });



    //  ==================================================       GoogleMap       ======================================================
    function myMap() {
      var uluru = {lat: 34.0623278, lng: -118.4282031};
      
      var map = new google.maps.Map(
          document.getElementById('googleMap'), {zoom: 15, center: uluru,
          });
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});
    };
    // myMap();
      
})

