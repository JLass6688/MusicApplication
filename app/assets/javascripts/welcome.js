// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){


	$(window).on("scroll", function(){

		// MENU FADE IN AND OUT
		var userScroll = $('#home-body').scrollTop();
		if( userScroll > 300){
			$('#header-container').fadeOut("slow");
		} else {
			$('#header-container').fadeIn("slow");
		};

		//ICONS FADE IN
		if( userScroll > 850){
			$('.icon-container').addClass('fadeIn');
		}else {
			$('.icon-container').removeClass('fadeIn');
		};

	});




})