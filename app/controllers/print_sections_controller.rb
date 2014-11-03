class PrintSectionsController < ApplicationController
  before_action :set_print_section, only: [:show, :edit, :update, :destroy]

  # GET /print_sections
  # GET /print_sections.json
  def index
    @print_sections = PrintSection.all
  end

  # GET /print_sections/1
  # GET /print_sections/1.json
  def show
  end

  # GET /print_sections/new
  def new
    @print_section = PrintSection.new
  end

  # GET /print_sections/1/edit
  def edit
  end

  # POST /print_sections
  # POST /print_sections.json
  def create
    @print_section = PrintSection.new(print_section_params)

    respond_to do |format|
      if @print_section.save
        format.html { redirect_to @print_section, notice: 'Print section was successfully created.' }
        format.json { render action: 'show', status: :created, location: @print_section }
      else
        format.html { render action: 'new' }
        format.json { render json: @print_section.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /print_sections/1
  # PATCH/PUT /print_sections/1.json
  def update
    respond_to do |format|
      if @print_section.update(print_section_params)
        format.html { redirect_to @print_section, notice: 'Print section was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @print_section.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /print_sections/1
  # DELETE /print_sections/1.json
  def destroy
    @print_section.destroy
    respond_to do |format|
      format.html { redirect_to print_sections_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_print_section
      @print_section = PrintSection.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def print_section_params
      params.require(:print_section).permit(:name)
    end
end
