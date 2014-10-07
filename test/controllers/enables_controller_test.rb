require 'test_helper'

class EnablesControllerTest < ActionController::TestCase
  setup do
    @enable = enables(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:enables)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create enable" do
    assert_difference('Enable.count') do
      post :create, enable: { enable_element_id: @enable.enable_element_id, option_id: @enable.option_id }
    end

    assert_redirected_to enable_path(assigns(:enable))
  end

  test "should show enable" do
    get :show, id: @enable
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @enable
    assert_response :success
  end

  test "should update enable" do
    patch :update, id: @enable, enable: { enable_element_id: @enable.enable_element_id, option_id: @enable.option_id }
    assert_redirected_to enable_path(assigns(:enable))
  end

  test "should destroy enable" do
    assert_difference('Enable.count', -1) do
      delete :destroy, id: @enable
    end

    assert_redirected_to enables_path
  end
end
