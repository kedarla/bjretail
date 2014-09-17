module PartsHelper
  def options_for_part_child(part_child)
  	options_str = ""
  	part_child.options.each do |o|
  	  options_str += "<option value='#{o.id}' data-option-subid='option_subid_#{o.id}' #{o.is_default? ? 'selected' : ''}>#{o.name}</option>"
  	end
  	options_str.html_safe
  end
end
