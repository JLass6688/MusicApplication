class User < ActiveRecord::Base

	has_secure_password

	#Validations
	validates :email, presence: true
	validates_presence_of :password, on: :create
	validates :password, length: {within: 8..20, message: "Password must be between 8 and 20 characters."}
	# validates :password, confirmation: true


	def to_s 
		self.email
	end

end