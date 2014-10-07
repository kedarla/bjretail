class EnablesController < ApplicationController
  before_action :set_enable, only: [:show, :edit, :update, :destroy]

  # GET /enables
  # GET /enables.json
  def index
    @enables = Enable.all
  end

  # GET /enables/1
  # GET /enables/1.json
  def show
  end

  # GET /enables/new
  def new
    @enable = Enable.new
  end

  # GET /enables/1/edit
  def edit
  end

  # POST /enables
  # POST /enables.json
  def create
    @enable = Enable.new(enable_params)

    respond_to do |format|
      if @enable.save
        format.html { redirect_to @enable, notice: 'Enable was successfully created.' }
        format.json { render action: 'show', status: :created, location: @enable }
      else
        format.html { render action: 'new' }
        format.json { render json: @enable.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /enables/1
  # PATCH/PUT /enables/1.json
  def update
    respond_to do |format|
      if @enable.update(enable_params)
        format.html { redirect_to @enable, notice: 'Enable was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @enable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /enables/1
  # DELETE /enables/1.json
  def destroy
    @enable.destroy
    respond_to do |format|
      format.html { redirect_to enables_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_enable
      @enable = Enable.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def enable_params
      params.require(:enable).permit(:option_id, :enable_element_id)
    end
end
