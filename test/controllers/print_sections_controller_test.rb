require 'test_helper'

class PrintSectionsControllerTest < ActionController::TestCase
  setup do
    @print_section = print_sections(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:print_sections)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create print_section" do
    assert_difference('PrintSection.count') do
      post :create, print_section: { name: @print_section.name }
    end

    assert_redirected_to print_section_path(assigns(:print_section))
  end

  test "should show print_section" do
    get :show, id: @print_section
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @print_section
    assert_response :success
  end

  test "should update print_section" do
    patch :update, id: @print_section, print_section: { name: @print_section.name }
    assert_redirected_to print_section_path(assigns(:print_section))
  end

  test "should destroy print_section" do
    assert_difference('PrintSection.count', -1) do
      delete :destroy, id: @print_section
    end

    assert_redirected_to print_sections_path
  end
end
