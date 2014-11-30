class PagesController < ApplicationController

	def home
		redirect_to garments_path
	end
end
