// B.I.2014

$(document).ready(function(){
	var globalID = 0;											// Used for animation frame
	var value = 0;												// Index for img's shake function
	var initial = $('.personal-img').position();				// Find the initial position of the image
	var range = [-15,15,-20,20,initial.left];					// Range you want the image to move [a,b,a,b,a]
	var degrees = [8, -8, 5, -5, 0];							// Array for degrees you want the about header to rotate/tilt

	// shake is the animation for the img
	var shake = function(){
		if(value != range.length){
			value += 1;
		}
		$('.personal-img').animate({'margin-left': (range[value] / 2)}, 500);
		if(value == range.length)
			cancelAnimationFrame(globalID);
		else
			shake();
	};

	// Rotates the about header
	setTimeout(function(){
		$('#aboutme').css({'-webkit-transform' : 'rotate('+ degrees[0] +'deg)',
             '-moz-transform' : 'rotate('+ degrees[0] +'deg)',
             '-ms-transform' : 'rotate('+ degrees[0] +'deg)',
             'transform' : 'rotate('+ degrees[0] +'deg)'
         });
	},1000);

	setTimeout(function(){
		$('#aboutme').css({'-webkit-transform' : 'rotate('+ degrees[1] +'deg)',
             '-moz-transform' : 'rotate('+ degrees[1] +'deg)',
             '-ms-transform' : 'rotate('+ degrees[1] +'deg)',
             'transform' : 'rotate('+ degrees[1] +'deg)'
         });
	},1500);

	setTimeout(function(){
		$('#aboutme').css({'-webkit-transform' : 'rotate('+ degrees[4] +'deg)',
             '-moz-transform' : 'rotate('+ degrees[4] +'deg)',
             '-ms-transform' : 'rotate('+ degrees[4] +'deg)',
             'transform' : 'rotate('+ degrees[4] +'deg)'
         });
	},2000);
	// End of about me rotation

	//animation for personal-img
	$('.personal-img').click(function(){
		globalID = requestAnimationFrame(shake);
		value = 0;
	});

	/*Aboutme tab div animation area*/
	$('#aboutme').click(function(){
		var scrollingTo = 0;
		$('#about-margin').animate({'margin-bottom' : '200px'},500);
		$(this).animate({'margin-bottom' : '100px'});
		var w = window;
		setTimeout(function(){
			var interval = setInterval(function(){			
				w.scrollBy(0,scrollingTo);
				scrollingTo += 5;
				if(w.pageYOffset >= 100){
					clearInterval(interval);
				}
			},200);

		},50);
		value = 0;
	   if($('.aboutme').hasClass('active')){   
		  $('.aboutme').toggleClass('active');
		  $('#about-margin').animate({'margin-bottom' : '0px'},500);
		  $(this).animate({'margin-bottom' : '0px'});
		  $('.aboutme').slideUp(500);
	   }else if(!$('.aboutme').hasClass('active')){
		  $('.aboutme').toggleClass('active');
		  $('.aboutme').slideDown(500);
		  console.log('ScrollingTo: ' + scrollingTo);
		  globalID = requestAnimationFrame(shake);
	   }
	});
	$('#aboutmeclose').click(function(){
		$('#about-margin').animate({'margin-bottom' : '0px'},500);
		$('#aboutme').animate({'margin-bottom' : '0px'});
		$('.aboutme').toggleClass('active');
		$('.aboutme').slideUp(500);
	});

	/*Hackathon div animation area*/
	$('#hackathons').click(function(){
	   if($('.hackathons').hasClass('active')){   
		  $('.hackathons').toggleClass('active');
		  $('.hackathons').slideUp(500);
	   }else if(!$('.hackathons').hasClass('active')){
		  $('.hackathons').toggleClass('active');
		  $('.hackathons').slideDown(500);
	   }
	});
	$('#hackathonclose').click(function(){
		$('.hackathons').toggleClass('active');
		$('.hackathons').slideUp(500);
	});
	
	/*Github div animation area*/
	$('#github').click(function(){
		if($('.github').hasClass('active')){   
		  $('.github').toggleClass('active');
		  $('.github').slideUp(500);
	   }else if(!$('.github').hasClass('active')){
		  $('.github').toggleClass('active');
		  $('.github').slideDown(500);
	   }
	});				
	$('#githubclose').click(function(){
		$('.github').toggleClass('active');
		$('.github').slideUp(500);
	});
	
	/*projects div animation area*/
	$('#projects').click(function(){
		if($('.projects').hasClass('active')){   
		  $('.projects').toggleClass('active');
		  $('.projects').slideUp(500);
	   }else if(!$('.projects').hasClass('active')){
		  $('.projects').toggleClass('active');
		  $('.projects').slideDown(500);
	   }
	});
	$('#projectsclose').click(function(){
		$('.projects').toggleClass('active');
		$('.projects').slideUp(500);
	});
	
	
	/*animation for drop down */
	$('#resumebtn').click(function(){
		//Change google.com to a link of your resume
  		var win = window.open('www.google.com/q=resume', '_blank');
  		win.focus();
	});
	
	$('#aboutbtn').click(function(){
		$('#about').show(1200);
		$('#aboutme').show(1200);
		$('#resume').hide(1000);
		$('#resumebtn').toggleClass('active');
		$('#aboutbtn').toggleClass('active');
		$('#dropdownMenu1').html( 'About ' + '<span class="caret"></span>');
	});

	
	
});