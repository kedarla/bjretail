module PartsHelper
  def options_for_part_child(part_child)
  	options_str = ""
  	part_child.options.each do |o|
  	  options_str += "<option value='#{o.id}' data-option-subid='option_subid_#{o.id}' #{o.is_default? ? 'selected' : ''}>#{o.name}</option>"
  	end
  	options_str.html_safe
  end

  def options_radio_tag(part_child)
  	html = ""
  	part_child.options.each do |o|
  	  html += "<div class='col-sm-2'>"
  	  html += label_tag "order[part][#{part_child.id}][option]", raw("<input id='order_part_#{part_child.id}_option_#{o.id}' name='order[part][#{part_child.id}][option]' type='radio' value='#{o.id}' #{o.is_default? ? 'checked' : ''} data-option-subid='option_subid_#{o.id}'> #{o.name}")
  	  html += "</div>"
  	end
  	html.html_safe
  end

  def options_checkbox_tag(part_child)
  	html = ""
  	part_child.options.each do |o|
  	  html += "<div class='col-sm-2'>"
  	  html += label_tag "order[part][#{part_child.id}][option]", raw("<input id='order_part_#{part_child.id}_option_#{o.id}' name='order[part][#{part_child.id}][option]' type='checkbox' value='#{o.id}' #{o.is_default? ? 'checked' : ''} data-option-subid='option_subid_#{o.id}'> #{o.name}")
  	  html += "</div>"
  	end
  	html.html_safe
  end

  def options_textfield_tag(part_child)
    html = ""
    part_child.options.each do |o|
      html += "<div class='col-sm-2'>"
      html += label_tag "order[part][#{part_child.id}][option]", raw("<input id='order_part_#{part_child.id}_option_#{o.id}' name='order[part][#{part_child.id}][option]' type='text' value='' data-option-subid='option_subid_#{o.id}'> #{o.name}")
      html += "</div>"
    end
    html.html_safe
  end

end
