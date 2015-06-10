class ArtistsController < ApplicationController


  require 'dotenv'
  Dotenv.load
  #---------------------------------------ARTIST ACTIONS
  def show
    #TWITTER API OAUTH
    require 'twitter'
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV['CONSUMER_KEY']
      config.consumer_secret     = ENV['CONSUMER_SECRET']
      config.access_token        = ENV['ACCESS_TOKEN']
      config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']
    end

    #API CALLS (BandsInTown, EchoNest, Twitter)
  	artist = params[:artist]
  	@tour_response = HTTParty.get('http://api.bandsintown.com/artists/'+artist+'/events.json?api_version=2.0&app_id='+ENV['MUSIC_KEY'])
  	@news_response = HTTParty.get('http://developer.echonest.com/api/v4/artist/news?api_key='+ENV['NEWS_KEY']+'&name='+artist+'&results=5&start=0')
    begin 
      @twitter_response = @client.user_timeline(artist)
    rescue
      @twitter_response = @client.search("@"+artist+"", result_type: "recent").take(3)
    end
    
    #RESULTS
  	render :json => {
  		:news => @news_response,
  		:tour => @tour_response,
      :twitter => @twitter_response
  	} 
  end

  def index
  	authenticate!
  end

end