// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var app = app || {};


$(document).ready(function(){
	//MENU SLIDE ANIMATION
	function menuAnimation(){
		var counter = 1;
		$('.menu-icon').on('click', function(evt){
			evt.preventDefault();
			var menu = $('#navigation');
			if(counter%2 == 0){
				$(menu).addClass('menuAnimationOut');
				$(menu).removeClass('menuAnimationIn');
			} else{
				$(menu).addClass('menuAnimationIn');
				$(menu).removeClass('menuAnimationOut');
			}
			console.log(counter);
			counter += 1;
		});
	};
	menuAnimation();

	//NEWS SECTION SLIDE ANIMATION
	$('h5').on('click', function(evt){
		evt.preventDefault();
		var menuItem = $(this);
		if($(menuItem).text() == 'News'){
			$('.news').attr('class','news artistMenuIn');
			$(menuItem).css({'background-color':'#145e85','color':'white'});
			$('#tourMenu').css({'background':'none', 'color':'#145e85'});
		} else if($(menuItem).text() == 'Tour'){
			$('.news').attr('class','news artistMenuOut');
			$(menuItem).css({'background-color':'#145e85','color':'white'});
			$('#newsMenu').css({'background':'none', 'color':'white'});
		}
	})

	//AJAX CALL TO GRAB DATA FROM API
	$('#submit').on('click', function(evt){
		evt.preventDefault();
		$('#loading').css('display', 'block');
		var artistSearch = $('#artist').val();
		var artistSearch = artistSearch.replace(/\s+/g, '');
		function ajax1(){
			app.dataSet = $.ajax({
				method: 'post',
				url: '/artists/show',
				dataType: 'json',
				data: {artist: artistSearch},
				success: function(data){
				},
				error: function(xhr){
					console.log(xhr.status );
				}
			});
			return app.dataSet
		}
		$.when(ajax1()).done(function(){
			app.myTour = new app.tourView();
			app.myNews = new app.newsView();
			app.myTwitter = new app.twitterView();
			$('#loading').css('display', 'none');
		});
		
	});

})