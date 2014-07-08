json.array!(@garments) do |garment|
  json.extract! garment, :id, :name
  json.url garment_url(garment, format: :json)
end
