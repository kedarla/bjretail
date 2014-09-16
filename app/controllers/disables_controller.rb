class DisablesController < ApplicationController
  before_action :set_disable, only: [:show, :edit, :update, :destroy]

  # GET /disables
  # GET /disables.json
  def index
    @disables = Disable.all
  end

  # GET /disables/1
  # GET /disables/1.json
  def show
  end

  # GET /disables/new
  def new
    @disable = Disable.new
  end

  # GET /disables/1/edit
  def edit
  end

  # POST /disables
  # POST /disables.json
  def create
    @disable = Disable.new(disable_params)

    respond_to do |format|
      if @disable.save
        format.html { redirect_to @disable, notice: 'Disable was successfully created.' }
        format.json { render action: 'show', status: :created, location: @disable }
      else
        format.html { render action: 'new' }
        format.json { render json: @disable.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /disables/1
  # PATCH/PUT /disables/1.json
  def update
    respond_to do |format|
      if @disable.update(disable_params)
        format.html { redirect_to @disable, notice: 'Disable was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @disable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /disables/1
  # DELETE /disables/1.json
  def destroy
    @disable.destroy
    respond_to do |format|
      format.html { redirect_to disables_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_disable
      @disable = Disable.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def disable_params
      params.require(:disable).permit(:option_id, :disable_element_id)
    end
end
