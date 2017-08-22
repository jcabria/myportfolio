$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

$(window).scroll(function(){
	if ($(this).scrollTop() >= 400) {
		$('#return-to-top').fadeIn(400);
	} else {
		$('#return-to-top').fadeOut(400);
	}
});

$('#return-to-top').click(function(){
	$('body,html').animate({
		scrollTop: 0
	}, 500);
});


// $(window).load(function() {
// 	var wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       0,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     // callback:     function(box) {
//     //   // the callback is fired every time an animation is started
//     //   // the argument that is passed in is the DOM node being animated
//     // },
//     // scrollContainer: null // optional scroll container selector, otherwise use window
//   }
// );
// wow.init();
// });





