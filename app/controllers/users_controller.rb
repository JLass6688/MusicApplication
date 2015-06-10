class UsersController < ApplicationController

	#---------------------------------------USER ACTIONS
	def create
		user = User.create(user_params)
		session[:user_id] = user.id
		if current_user
			redirect_to '/artists'
		else
			redirect_to '/'
		end
	end

	def new
		@user = User.new
	end

	def update
		user = current_user
		user.update!(user_params)
		redirect_to '/users/profile'
	end

	def destroy

	end

	def profile
		authenticate!
		@user = current_user
	end


	#--------------------------------------------PARAMS
	private

	def user_params
		params.require(:user).permit(:email, :password)
	end

end
