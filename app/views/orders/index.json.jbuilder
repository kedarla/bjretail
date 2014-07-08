json.array!(@orders) do |order|
  json.extract! order, :id, :data
  json.url order_url(order, format: :json)
end
