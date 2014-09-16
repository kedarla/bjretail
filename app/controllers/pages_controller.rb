class PagesController < ApplicationController

	def home
		redirect_to garment_path(1)
	end
end
