$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();
	$('.owl-carousel').owlCarousel({
	   items:5,
	   loop:true,
	   margin:60,
	   nav:true,
	   dot:false,
	   autoplay:true,
	   autoplayTimeout:1000,
	   autoplayHoverPause:true,
	   navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
	   mouseDrag: false,
	   responsiveClass: true,
	   responsive: {
		0: {
		  items: 1
		},
	
		576: {
		  items: 2
		},
		768: {
			items: 3
		  },
		1024: {
		  items: 5
		},
	
		1366: {
		  items: 5
		}
	  }

	   })
	 
	   $('.owl-prev').on('click',function() {
		$(this).addClass('navActive');
		   $('.owl-next').removeclass('navactive');
	   })
	   $('.owl-next').on('click',function(){
		$(this).addClass('navActive');
		$('.owl-prev').removeClass('navActive');
	})

	var counter = {
		// (A) HELPER - CREATE HR/MIN/SEC CELL
		//  txt : text for the cell (all small letters)
		square : (txt) => {
		  let cell = document.createElement("div");
		  cell.className = `cell ${txt}`;
		  cell.innerHTML = `<div class="digits">0</div><div class="text">${txt}</div>`;
		  return cell;
		},
	  
		// (B) INITIALIZE COUNTDOWN TIMER
		//  target : target html container
		//  remain : seconds to countdown
		//  after : function, do this when countdown end (optional)
		attach : (instance) => {
		  // (B1) GENERATE HTML
		  instance.target.className = "countdown";
		  if (instance.remain >= 3600) {
			instance.target.appendChild(counter.square("hours"));
			instance.hours = instance.target.querySelector(".hours .digits");
		  }
		  if (instance.remain >= 60) {
			instance.target.appendChild(counter.square("mins"));
			instance.mins = instance.target.querySelector(".mins .digits");
		  }
		  instance.target.appendChild(counter.square("secs"));
		  instance.secs = instance.target.querySelector(".secs .digits");
	  
		  // (B2) TIMER
		  instance.timer = setInterval(() => { counter.ticker(instance); }, 1000);
		},
	  
		// (C) COUNTDOWN TICKER
		ticker : (instance) => {
		  // (C1) TIMER STOP
		  instance.remain--;
		  if (instance.remain<=0) {
			clearInterval(instance.timer);
			instance.remain = 0;
			if (typeof instance.after == "function") { instance.after(); }
		  }
	  
		  // (C2) CALCULATE REMAINING DAYS/HOURS/MINS/SECS
		  // 1 day = 60 secs * 60 mins * 24 hrs = 86400 secs
		  // 1 hr = 60 secs * 60 mins = 3600 secs
		  // 1 min = 60 secs
		  let secs = instance.remain;
		  let hours = Math.floor(secs / 3600);
		  secs -= hours * 3600;
		  let mins  = Math.floor(secs / 60);
		  secs -= mins * 60;
	  
		  // (C3) UPDATE HTML
		  instance.secs.innerHTML = secs;
		  if (instance.mins !== undefined) { instance.mins.innerHTML = mins; }
		  if (instance.hours !== undefined) { instance.hours.innerHTML = hours; }
		  
		},
	  
		// (D) HELPER - CONVERT DATE/TIME TO REMAINING SECONDS
		//  till : (date object) countdown to this date/time
		toSecs : (till) => {
		  till = Math.floor(till / 1000);
		  let remain = till - Math.floor(Date.now() / 1000);
		  return remain<0 ? 0 : remain;
		}
	  };
	  
	  // (E) ATTACH COUNTDOWN TIMER
	  window.onload = () => {
		counter.attach({
		  // TARGET + REMAINING TIME
		  target : document.getElementById("demo"),
		  remain : 86500,
		  
		  // COUNTDOWN TO SPECIFIC DATE
		  // remain : counter.toSecs(new Date("YYYY-MM-DD")),
		  
		  // OPTIONAL - RUN THIS ON TIMER END
		  after : () => { alert("TIMER HAS ENDED!"); }
		});
	  };
	   
  
	  // Set Min Price
	  $("#price-min li a").click(function(){
		$('#price-min-input').val($(this).attr('data-value'));
		$('#price-max-input').focus();
		$('#price-max').show();
		
	  });
  
	  // Set Max Price
	  $("#price-max li a").click(function(){
		$('#price-max-input').val($(this).attr('data-value'));
		$('#price-max').hide();
	  });
  
	  // Show Max list when cleck on max input 
	  $("#price-max-input").click(function(){
		$('#price-max').show();
	  });
  
	  // Hide Max List when keypress on max input
	  $( "#price-max-input" ).keypress(function() {
		$('#price-max').hide();
	  });
	  
	  
		/*Iso Tope */
		$('.project-titles li').on('click',function(){
			var selector = $(this).attr('data-filter');
			//alert(selector);
			$('.project-list').isotope({
				filter:selector
			});
		});
		$('.project-list').isotope();
		
		 // project Filter
		var projectTitle = $('.project-titles li');
			if(projectTitle.length){
			$('.project-titles li').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
		}
        	/**Image Gallery */
		var imaggepoppup = $('.image-popup');
		if(imaggepoppup.length){
			$('.image-popup').magnificPopup({
				delegate: 'a',
				type: 'image',
				callbacks: {
					beforeOpen: function() {
					   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
					}
				},
				gallery: {
					enabled: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
			});
		}

		// ---- Active
		$(".owl").owlCarousel();
		$('.slider-area').owlCarousel({
			items:1,
			loop:true,
			margin:0,
			nav:false,
			dots:true,
			autoplay:false,
			responsiveClass:true,
			responsive: {
				0: {
				  items: 1
				},
			    576: {
					items: 2
				  },
				1024: {
				  items: 5
				},
			
				1366: {
				  items: 5
				}
			  }
		});
	
		$('.logo').owlCarousel({
			items:5,
			loop:true,
			margin:60,
			nav:false,
			dot:false,
			autoplay:true,
			autoplayTimeout:1000,
			autoplayHoverPause:true,
			mouseDrag: false,
		});	
	

}(jQuery));