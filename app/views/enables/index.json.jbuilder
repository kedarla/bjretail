json.array!(@enables) do |enable|
  json.extract! enable, :id, :option_id, :enable_element_id
  json.url enable_url(enable, format: :json)
end
