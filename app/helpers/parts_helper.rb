module PartsHelper
  def attribute_name(parent_part, part, value)
    return "order[part][#{parent_part.id}][children][][part][#{part.id}][option][][#{value}]" if parent_part.present?
    "order[part][#{part.id}][option]"
  end

  def options_for_part_child(part_child)
    attr_name = attribute_name(part_child.parent, part_child, 'id')
  	html = "<div class='col-sm-2 uno_part_wrapper'>"
    html += "<select class='form-control switcher'
                    name='#{attr_name}'
                    data-option-name='#{part_child.name}'
                    data-option-id='#{part_child.id}'>"
  	part_child.options.each do |o|
  	  html += "<option value='#{o.id}'
                    data-option-parentid='#{part_child.id}'
                    data-option-name='#{o.name}'
                    data-option-id='#{o.id}'
                    data-option-disables='#{o.disables.present? ? o.disables.map(&:disable_element_id) : nil}'
                    data-option-enables='#{o.enables.present? ? o.enables.map(&:enable_element_id) : nil}'
                    #{o.is_default? ? 'selected' : ''}>#{o.name}
              </option>"
  	end
    html += "</select>"
    html += "</div>"
  	html.html_safe
  end

  def options_radio_tag(part_child)
  	html = ""
    attr_name = attribute_name(part_child.parent, part_child, 'id')
  	part_child.options.each do |o|
  	  html += "<div class='col-sm-2 uno_part_wrapper'>"
      html += "<label for='#{attr_name}'>"
      html += radio_button_tag attr_name, o.id,
                      o.is_default?,
                      "data-option-name" => o.name,
                      "data-option-disables" => "#{o.disables.present? ? o.disables.map(&:disable_element_id) : nil}",
                      "data-option-id" => "#{o.id}",
                      "data-option-enables" => "#{o.enables.present? ? o.enables.map(&:enable_element_id) : nil}",
                      class: "switcher"
      html += image_tag o.photo(:small), class: "radio_option_img",
                      "data-option-name" => o.name
      html += o.name
      html += "</label>"
  	  # html += label_tag "", raw("<input id='order_part_#{part_child.id}_option_#{o.id}' class = 'radio_option_child' data-option-name='#{o.name}' data-option-id='#{o.id}' name='#{attr_name}' type='radio' value='#{o.id}' #{o.is_default? ? 'checked' : ''} data-option-parentid='#{part_child.id}' data-option-disables='#{o.disables.present? ? o.disables.map(&:disable_element_id) : nil}'><img src = #{o.photo}> #{o.name}")
  	  html += "</div>"
  	end
  	html.html_safe
  end

  def options_checkbox_tag(part_child)
  	html = ""
    attr_name = attribute_name(part_child.parent, part_child, 'id')
  	part_child.options.each do |o|
  	  html += "<div class='col-sm-2 uno_part_wrapper'>"
  	  # html += label_tag "#{attr_name}", raw("<input id='order_part_#{part_child.id}_option_#{o.id}' class= 'part_child_#{part_child.id}' data-part-name='part_child_#{part_child.id}' data-part-id='#{part_child.id}' name='#{attr_name}' type='checkbox' value='#{o.id}' #{o.is_default? ? 'checked' : ''} data-option-parentid='#{part_child.id}' data-option-name='#{o.name}' data-option-id='#{o.id}'><img src = #{o.photo}> #{o.name}")
  	  html += "<label for='#{attr_name}'>"
      html += check_box_tag attr_name, o.id,
                      o.is_default?,
                      "data-option-name" => o.name,
                      "data-option-disables" => "#{o.disables.present? ? o.disables.map(&:disable_element_id) : nil}",
                      "data-option-id" => "#{o.id}",
                      "data-option-enables" => "#{o.enables.present? ? o.enables.map(&:enable_element_id) : nil}",
                      class: "switcher"
      html += image_tag o.photo(:small), class: "radio_option_img",
                      "data-option-name" => o.name
      html += o.name
      html += "</label>"
      html += "</div>"
  	end
  	html.html_safe
  end

  def options_textfield_tag(part_child)
    html = ""
    attr_name = attribute_name(part_child.parent, part_child, 'value')
    html += "<div class='col-sm-2 uno_part_wrapper'>"
    html += label_tag "#{attr_name}", raw("<input id='order_part_#{part_child.id}_option' name='#{attr_name}' type='text' value='' class = 'textfield_child' data-option-id='#{part_child.id}'>")
    html += "</div>"
    html.html_safe
  end

end
