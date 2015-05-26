class ArtistsController < ApplicationController

  def show
  	artist = params[:artist]
  	@tour_response = HTTParty.get('http://api.bandsintown.com/artists/'+artist+'/events.json?api_version=2.0&app_id=YOUR_APP_ID')
  	@news_response = HTTParty.get('http://developer.echonest.com/api/v4/artist/news?api_key=LLLZAWTLXZCKZOP1S&name='+artist+'&results=3&start=0')
  	# render json: @tour_response
  	render :json => {
  		:news => @news_response,
  		:tour => @tour_response
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