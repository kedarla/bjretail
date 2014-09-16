json.array!(@disables) do |disable|
  json.extract! disable, :id, :option_id, :disable_element_id
  json.url disable_url(disable, format: :json)
end
