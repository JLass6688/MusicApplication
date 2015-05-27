class ArtistsController < ApplicationController

  def show

    #TWITTER API OAUTH
    require 'twitter'
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "kfIoJY9Nk3r1TGlfuJctwUQka"
      config.consumer_secret     = "ztmxsiNg5DREiEyBeIOIawbDlFokzT0fLoX8kee5bM913OQRW2"
      config.access_token        = "2471926639-G61ikTvrME2H4rzgtaQNuIp5sKoxvCnkqGrFq39"
      config.access_token_secret = "UoRnYzx6Z7CUBK64qOhbfy8SFZF12ZrPNTJxkS5BhghyU"
    end

    #API CALLS
  	artist = params[:artist]
  	@tour_response = HTTParty.get('http://api.bandsintown.com/artists/'+artist+'/events.json?api_version=2.0&app_id=YOUR_APP_ID')
  	@news_response = HTTParty.get('http://developer.echonest.com/api/v4/artist/news?api_key=LLLZAWTLXZCKZOP1S&name='+artist+'&results=5&start=0')
    @twitter_response = @client.search("@"+artist+"", result_type: "recent").take(3)

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


# ECHONEST
# Your API Key: LLLZAWTLXZCKZOP1S 

# Your Consumer Key: ded470b4d563cb0e7e855b7c393e95ad 

# Your Shared Secret: yUQJadcwT8ecMV1MwTJySQ