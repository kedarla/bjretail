$(function() {
    var $switchers = $(".switcher");
    //onload the elements which are checked they are by default disabled.
    //and they made cdisabled and updates there title in this function
    run_disabler_for($switchers);
    run_enabler_for($switchers);
//this is for onchange . in onchange all the elements first enabled.
    //then the elements which are checked thy are disabled. then the elements which is clicked
    //that elements title is get updated
    
    $(".switcher").on("change", function(e) {
        var $this = $(this);
        $switchers.each(function(index, elem) {
            if ($(elem).prop("tagName") == 'SELECT')
            {
                $(elem).find('option').each(function() {
                    $(this).prop("disabled", false)
                            .prop("checked", true)
                            .removeClass("c_disabled")
                            .closest(".uno_part_wrapper")
                });
            }
            else {
                $(elem).prop("disabled", false).removeClass("c_disabled")
                        .closest(".uno_part_wrapper")
                        .find(".option_overlay").remove();
            }
        });
         run_disabler_for($switchers);
        // Panel title update
        //this panel update is for clicked element title and above run disabler loop is for 
        //clicked elements disabled and there title
        var $mypart_id = $this.attr("data-option-part-id");
        var $selection_name = $switchers.filter("[data-option-part-id='" + $mypart_id + "']").map(function(i, el) {
            if ($(el).is(':checked')) {
                if ($(el).hasClass('c_disabled')) {
                    return '-';
                }
                else
                {
                    return $(el).attr('data-option-name');
                }
            }
        }).get().join(', ');
        if (!$mypart_id) {
            $mypart_id = $this.attr("data-part-id");
            $selection_name = $this.find(':selected').attr('data-option-name');
        }//the conflict may not arise in above 4 lines as because if its checkbox a dash comes and in 
        //select the selectd option is shown as no dash require because its a selecetd element.
        var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
        $part_title_container.find(".part_title_options").html($selection_name);
        
        //one loop i will add here on switcher for show a title of already selected itesm which are before
        //disabled because of another clicked element and now that element is unclicked so just 
        //show that title.the example is i select a check box its title gets updated.
        //then i select an another element by which this checkbox disabled. now when i reverse the element
        //that is unclicked then reshown the checkbox as it was previously selected
        run_title_update_for($switchers);
        //so now i hav to run a loop on enables.
        run_enabler_for($switchers);
         
        //there will be one more function which will disable a dropdown if that drop down all the 
        //options are disabled.
        run_select_disable($switchers); 
    });

    function run_select_disable($elements)
    {

        $('#proceed_to_order_form select').each(
    function(index){  
        var input = $(this);
        //console.log(input);
       // alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
        var alloption=true;
        $(this).find('option').each(function(index,element){
      //   console.log(index);
      //   console.log(element.value);
      //   console.log(element.text);
      //   console.log($(element).hasClass('c_disabled'));
         if($(element).hasClass('c_disabled'))
         {
        
         }
         else
         {
            alloption=false
         }
         


 });
          if(alloption)
          {
            input.attr("disabled","true");
            console.log("trueeeeeeeeeee");
          }
          else
          {
input.removeAttr("disabled");
console.log("falseeeeeeeee");
          }

    }
);
    }

    function run_title_update_for($elements)
    {   //console.log("running title updateee")
        
        $elements.filter(':checked').each(function(index, elem) {
            update_enable_title($(elem), $elements)
        });
        // Disable options for dropdown
        $elements.find(':selected').each(function(index, elem) {
        //console.log(($(elem)))
        //console.log("ssssssssssssss")
        
            update_enable_title($(elem), $elements)
        });
    }
    $("#proceed_to_order").on('click', function() {
        $("#proceed_to_order_form").submit();
    });
});

function run_disabler_for($elements) {
    $elements.filter(':checked').each(function(index, elem) {
        disable_for($(elem));
    });
    // Disable options for dropdown
    $elements.find(':selected').each(function(index, elem) {
        disable_for($(elem));
    });
}

function run_enabler_for($elements) {
    //console.log("running enabler")
    $elements.filter(':checked').each(function(index, elem) {
        //console.log("running enabler11")
        //console.log($(elem))
        enable_for($(elem),$elements);
    });
    // Disable options for dropdown
    
    $elements.find(':selected').each(function(index, elem) {
        //console.log("selected element");
        //console.log($(elem));
        
        enable_for($(elem),$elements);
    });
}



function enable_for($element,$elements) {
    if ($element.attr("data-option-enables")) {
        var $enables = JSON.parse($element.attr("data-option-enables"));
    }
    //console.log("the enablers will be nothing")
    //console.log($enables)
    
    if ($enables) {
        for (i = 0; i < $enables.length; i++) {
            var elem_to_enable = $("[data-option-id='" + $enables[i] + "']");
        //here i need to check that this element is not disabled otherwise its a conflict    
        //test this condition for all the elements
        //console.log("checking it has class")
        //console.log(elem_to_enable.hasClass('c_disabled'))
        
        if(elem_to_enable.hasClass('c_disabled'))
        {
        }
        else{
            if (elem_to_enable.parent().prop('tagName') != 'SELECT') {
                
                elem_to_enable.prop("disabled", false)
                         .prop("checked", true)
                        .removeClass("c_disabled")
                        .closest(".uno_part_wrapper")
          
                }
            else {
                elem_to_enable.prop("disabled", false)
                         .removeClass("c_disabled")
                        .closest(".uno_part_wrapper")
                .find(".option_overlay").remove();
        elem_to_enable.prop("selected", true);
            }
        
            update_enable_title(elem_to_enable,$elements)
         }
     }
    }
}







//this disabl_for is making a clicked elements disable and its will update title only if it is bfore
//selcted   
function disable_for($element) {
    if ($element.attr("data-option-disables")) {
        var $disables = JSON.parse($element.attr("data-option-disables"));
    }
    if ($disables) {
        for (i = 0; i < $disables.length; i++) {
            var elem_to_disable = $("[data-option-id='" + $disables[i] + "']");
            if (elem_to_disable.parent().prop('tagName') != 'SELECT') {
                elem_to_disable.prop("disabled", true)
                        // .prop("checked", false)
                        .addClass("c_disabled")
                        .closest(".uno_part_wrapper")
                        .prepend("<div class='option_overlay'/>");
            }
            else {
                elem_to_disable.prop("disabled", true)
                        .addClass("c_disabled")
                        .closest(".uno_part_wrapper")
            }
            update_disable_title(elem_to_disable)
        }
    }
}

function find_tag_name(elem_to_disable)
{
    tagname = elem_to_disable.attr('type')
    if (typeof tagname == 'undefined')
    {
        tagname = elem_to_disable.prop('tagName')
    }
    return tagname;
}

function update_enable_title(elem_to_enable, $elements)
{
    //console.log("now updating title of enable")
    tagname = find_tag_name(elem_to_enable)
    //console.log(elem_to_enable)
    if (tagname == "OPTION")
    {//console.log(elem_to_enable)
      //console.log("elem_to_enable")     
            set_enable_title(elem_to_enable, tagname, $elements)
         
    }
    else if (tagname == 'radio') {
          set_enable_title(elem_to_enable, tagname, $elements)
        
    }
    else if (tagname == 'checkbox')
    {
           set_enable_title(elem_to_enable, tagname, $elements)
        
        
    }
}

function update_disable_title(elem_to_disable)
{
    tagname = find_tag_name(elem_to_disable)
    thisuniqid = elem_to_disable.attr('data-option-uniq-id')
    if (tagname == "OPTION")
    {
        if (thisuniqid == elem_to_disable.parent().find('option:selected').attr('data-option-uniq-id'))
        {
            set_disable_title(elem_to_disable, tagname)
        }
    }
    else if (tagname == 'radio') {
        if (elem_to_disable.is(':checked'))
        {
            set_disable_title(elem_to_disable, tagname)
        }
    }
    else if (tagname == 'checkbox')
    {

        if (elem_to_disable.is(':checked'))
        {
            set_disable_title(elem_to_disable, tagname)
        }
        else {
        }
    }
}

function set_disable_title(elem_to_disable, tagname)
{
    if (tagname == 'checkbox')
    {
        var elem_part_id = elem_to_disable.attr('data-option-part-id');
        var make_dash = $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html()
        $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html(make_dash.replace(elem_to_disable.attr('data-option-name'), "-"));
    }
    else
    {
        var elem_part_id = elem_to_disable.attr('data-option-part-id');
        $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html('-');
    }
}

function set_enable_title(elem_to_enable, tagname, $elements)
{
    if (tagname == 'checkbox')
    {
        var mypart_id = elem_to_enable.attr("data-option-part-id");
        var selection_name = $elements.filter("[data-option-part-id='" + mypart_id + "']").map(function(i, el) {
             if ($(el).is(':checked')) {
                if ($(el).hasClass('c_disabled')) {
                    return '-';
                }
                else
                {
                    return $(el).attr('data-option-name');
                }
            }
        }).get().join(', ');
        var part_title_container = $("span#part_" + mypart_id + "_title_container");
        part_title_container.find(".part_title_options").html(selection_name);
    }
    else
    {
        if (elem_to_enable.hasClass('c_disabled')) {
        }
        else
        {
            //console.log("finally updating")
            //console.log(elem_to_enable.attr('data-option-name'))
            var elem_part_id = elem_to_enable.attr('data-option-part-id');
            $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html(elem_to_enable.attr('data-option-name'));
        }
    }
 }
 function change_label_images(divids,thisref)
{
//////////console.log($(thisref).text());
$(".hide"+divids).toggle();
if($(thisref).text() == 'Show More')
{
  $(thisref).text('Show Less')
}
else{
  $(thisref).text('Show More')
}
}
