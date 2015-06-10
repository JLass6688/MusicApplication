class SessionsController < ApplicationController

	#---------------------------------------SESSION ACTIONS
	def signin
		user = User.find_by(:email => params[:email])
		if user && user.authenticate(params[:password])
			session[:user_id] = user.id
			redirect_to '/artists'
		end
	end

	def signout
		session[:user_id] = nil
		redirect_to '/'
	end

end
