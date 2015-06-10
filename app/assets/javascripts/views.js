var app = app || {};

//==============TOUR VIEW
var tourTemplate = $('#tour-template').html();

app.tourView = Backbone.View.extend({
	tagName: 'div',
	className: 'tour-container',
	template: _.template(tourTemplate),
	initialize: function(){
		this.render();
	},
	render: function(){
		var data = app.dataSet.responseJSON.tour;
		if(data.length > 0){
			for(var i = 0; i < data.length; i++){
				var tourItem = data[i];
				var tpl = this.template(tourItem);
				this.$el.append(tpl);
			};
			$('.tour').html(this.$el);
		} else {
			var noTourMessage = $('<h2>').text('Currently, there is no tour information available.')
			this.$el.append(noTourMessage);
			$('.tour').html(this.$el);
		};
	}
});

//==============NEWS VIEW
var newsTemplate = $('#news-template').html();

app.newsView = Backbone.View.extend({
	tagName: 'div',
	className: 'news-container',
	template: _.template(newsTemplate),
	initialize: function(){
		this.render();
	},
	render: function(){
		
		if(app.dataSet.responseJSON.news.response.news){
			var data = app.dataSet.responseJSON.news.response.news;
			for(var i = 0; i < data.length; i++){
				var tourItem = data[i];
				var tpl = this.template(tourItem);
				this.$el.append(tpl);
			};
			$('.news').html(this.$el);
		} else {
			var noTourMessage = $('<h2>').text('Currently, there is no news information available.');
			this.$el.append(noTourMessage);
			$('.news').html(this.$el);
		};
	}
});

//==============TWITTER VIEW
var twitterTemplate = $('#twitter-template').html();

app.twitterView = Backbone.View.extend({
	tagName: 'div',
	className: 'twitter-container',
	template: _.template(twitterTemplate),
	initialize: function(){
		this.render();
	},
	render: function(){
		var data = app.dataSet.responseJSON.twitter;
		for(var i = 0; i < data.length; i++){
			var tourItem = data[i];
			var tpl = this.template(tourItem);
			this.$el.append(tpl);
		};
		
		$('#twitter').html(this.$el);
	}
});



