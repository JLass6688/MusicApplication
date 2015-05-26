class UsersController < ApplicationController

	def create
		user = User.create(user_params)
		session[:user_id] = user.id
		redirect_to '/'
	end

	def update

	end

	def destroy

	end


	def profile
		authenticate!
		@user = current_user
	end

	private

	def user_params
		params.require(:user).permit(:email, :password)
	end


end
