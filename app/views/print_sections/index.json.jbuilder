json.array!(@print_sections) do |print_section|
  json.extract! print_section, :id, :name
  json.url print_section_url(print_section, format: :json)
end
