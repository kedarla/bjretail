require 'test_helper'

class DisablesControllerTest < ActionController::TestCase
  setup do
    @disable = disables(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:disables)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create disable" do
    assert_difference('Disable.count') do
      post :create, disable: { disable_element_id: @disable.disable_element_id, option_id: @disable.option_id }
    end

    assert_redirected_to disable_path(assigns(:disable))
  end

  test "should show disable" do
    get :show, id: @disable
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @disable
    assert_response :success
  end

  test "should update disable" do
    patch :update, id: @disable, disable: { disable_element_id: @disable.disable_element_id, option_id: @disable.option_id }
    assert_redirected_to disable_path(assigns(:disable))
  end

  test "should destroy disable" do
    assert_difference('Disable.count', -1) do
      delete :destroy, id: @disable
    end

    assert_redirected_to disables_path
  end
end
