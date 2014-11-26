class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
    @print_sections = PrintSection.all
    @order_data = eval(@order.data)
    # parts_arr = []
    # options_arr = []

    # strhash = eval(@order.data).with_indifferent_access

    # strhash[:part].each do |key, val|
    #   parts_arr << Part.find(key)
    #   options_arr << Option.find(val[:option])
    # end

    # @parts_options = parts_arr.zip(options_arr)

    if params[:view] == 'print'
      render action: 'print', :layout => 'application'
      return
    end
  end

  def proceed
    @order = Order.new
    @order_data = params[:order]

    # parts_arr = []
    # options_arr = []

    # @order_data[:part].each do |key, val|
    #   parts_arr << Part.find(key)
    #   options_arr << Option.find(val[:option])
    # end

    # @parts_options = parts_arr.zip(options_arr)
    respond_to do |format|
      format.html { render action: 'new' }
    end
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render action: 'show', status: :created, location: @order }
      else
        format.html { render action: 'new' }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:order).permit(:data)
    end
end
