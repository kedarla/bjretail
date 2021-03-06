  module PartsHelper
  def attribute_name(parent_part, part, value)
    return "order[part][#{parent_part.id}][children][][part][#{part.id}][option][][#{value}]" if parent_part.present?
  if part.display_type == "checkbox"
  return "order[part][#{part.id}][option][]"
  
  else
 return  "order[part][#{part.id}][option]"
  
  end
    
 
  end

  def options_for_part_child(part_child)
    attr_name = attribute_name(part_child.parent, part_child, 'id')
    html = "<div class='col-sm-2 uno_part_wrapper'>"
    html += "<select class='form-control switcher'
                    name='#{attr_name}'
                    data-part-name='#{part_child.name}'
                    data-part-id='#{part_child.id}'
                    data-part-type='#{part_child.display_type}'
                    data-parent-part-id='#{part_child.parent.id unless part_child.root?}'>"
   part_child_option= parts_position(part_child.options)

    part_child_option.each do |o|
      
      html += "<option value='#{o.id}' id='#{o.id}_#{o.name}_#{o.part_id}'
                       
                    data-option-part-id='#{part_child.id}'
                    data-option-name='#{o.name}'
                    data-option-id='#{o.id}'
                    data-option-uniq-id='#{o.id}_#{o.name}_#{o.part_id}'
                    data-option-disables='#{o.disables.present? ? o.disables.map(&:disable_element_id) : nil}'
                    


                    data-option-enables='#{o.enables.present? ? o.enables.map(&:enable_element_id) : nil}'
                    #{o.is_default? ? 'selected' : ''}>#{o.name}
              </option>"
    end
    html += "</select>"
    html += "</div>"
    html.html_safe
  end

  def tick_tag(part_child)
    render_type = part_child.display_type == "radio" ? "radio_button_tag" : "check_box_tag"
    html = ""
    attr_name = attribute_name(part_child.parent, part_child, 'id')
    part_child_option = parts_position(part_child.options)
    part_child_option.each do |o|
      html += "<div class='col-sm-2 uno_part_wrapper'>"
      html += "<label class = 'p_name' for='#{attr_name}'>"
      
      html += send(render_type, attr_name, o.id,
        o.is_default?,
        "data-option-name" => o.name,
        "data-part-type" =>"#{part_child.display_type}",
        "data-option-disables" => "#{o.disables.present? ? o.disables.map(&:disable_element_id) : nil}",
        "data-option-id" => "#{o.id}",
        "data-option-part-id" => "#{part_child.id}",
         "data-option-uniq-id " => "#{o.id}_#{o.name}_#{o.part_id}",                   
        "data-option-enables" => "#{o.enables.present? ? o.enables.map(&:enable_element_id) : nil}",
        class: "switcher ")
        html += image_tag o.photo(:small), class: "tick_option_img",
            "data-option-name" => o.name
          html += o.name
          html += "</label>"
          html += "</div>"
        end
        html.html_safe
    end


 def tick_tag_slice(part_child)
    render_type = part_child.display_type == "radio" ? "radio_button_tag" : "check_box_tag"
    html = ""
    attr_name = attribute_name(part_child.parent, part_child, 'id')
    part_child_option = parts_position(part_child.options)
    rowcount=0
    show_more = false
    if ((part_child.options.size/6) > 2)
      show_more = true
    elsif ((part_child.options.size/6) == 2)
        if ((part_child.options.size%6) >0 )
              show_more = true
        end
    end
    part_child_option.each_slice(6) do | six_o|
    rowcount = rowcount + 1
      if show_more == true
         if rowcount < 3
          html += "<div class = 'row'>"
         else
         html += "<div class = 'row show_more_hide hide#{part_child.id}' >"
        end
      else
        html += "<div class = 'row'>"
      end
      six_o.each do |o|
      html += "<div class='col-sm-2 uno_part_wrapper'>"
      html += "<label   for='#{attr_name}'>"
     
      html += send(render_type, attr_name, o.id,
        o.is_default?,
        "data-option-name" => o.name,
        "data-part-type" =>"#{part_child.display_type}",
        "data-option-disables" => "#{o.disables.present? ? o.disables.map(&:disable_element_id) : nil}",
        "data-option-id" => "#{o.id}",
        "data-option-part-id" => "#{part_child.id}",
         "data-option-uniq-id " => "#{o.id}_#{o.name}_#{o.part_id}",                  
        "data-option-enables" => "#{o.enables.present? ? o.enables.map(&:enable_element_id) : nil}",
        class: "switcher")
        html += image_tag o.photo(:small), class: "tick_option_img",
            "data-option-name" => o.name
          html += "<span class='p_name'>"+o.name+"</span>"
          html += "</label>"
          html += "</div>"
       end 
     
           html += "</div>" 
             if show_more == true
         if rowcount == 2
          html += "<div class='row' style='cursor:pointer;color: darkblue;text-align: center;text-decoration: underline;' onclick=change_label_images(#{part_child.id},this); >Show More</div>"
        end
      else
      end
      end
     
        html.html_safe
 end


      def options_textfield_tag(part_child)
         
        html = ""
        attr_name = attribute_name(part_child.parent, part_child, 'value')
        html += "<div class='col-sm-2 uno_part_wrapper'>"
        html += label_tag "#{attr_name}", raw("<input id='order_part_#{part_child.id}_option' name='#{attr_name}' type='text' value='' class = 'textfield_child p_name'   data-option-uniq-id='#{part_child.id}_#{part_child.garment_id}_#{part_child.ancestry}'     data-option-id='#{part_child.id}'>")
        html += "</div>"
        html.html_safe
      end

      def construct_panel_title(part)
        html = []
        html << title_html_for(part)

        if part.children.present?
          part_children = parts_position(part.children)
          child_parts = part_children.collect{|subp| ['radio', 'checkbox', 'dropdown'].include?(subp.display_type) ? subp : nil}.compact
          child_parts.each{|p| html << title_html_for(p)}
        end

        html.compact.join(' | ').html_safe
      end

      def title_html_for(part)
        return unless part.options.present? || part.root?
        html = ""
        html += "<span id='part_#{part.id}_title_container'>"
        html += "<span class='part_title_name'><b>#{part.name}</b></span>"
        html += " : "
        html += "<span class='part_title_options'>"
        part_options = part.options.collect{|o| o.name if o.is_default?}.compact
        html += part_options.present? ? part_options.join(', ') : " - "
        html += "</span>"
        html += "</span>"
        html
      end

    end
