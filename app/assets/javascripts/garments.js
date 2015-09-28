$(function() {
    var $switchers = $(".switcher");

    run_disabler_for($switchers);

    $(".switcher").on("change", function(e) {
        var $this = $(this);
        //console.log("onchanghe"+$this);
        $switchers.each(function(index, elem) {

            //this is to enable all the select tags
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

        //disable_for($this);

        run_disabler_for($switchers);

        // Panel title update
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
        }
        var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
        $part_title_container.find(".part_title_options").html($selection_name);
        //one loop i will add here on switcher for show a title of already selected itesm which are before
        //disabled because of another clicked element and now that element is unclicked so just 
        //show that title
        run_title_update_for($switchers);
    });

    function run_title_update_for($elements)
    {
        $elements.filter(':checked').each(function(index, elem) {

            update_enable_title($(elem),$elements)
        });

        // Disable options for dropdown
        $elements.find(':selected').each(function(index, elem) {
            console.log("selected")
            console.log($(elem))

            update_enable_title($(elem),$elements)

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
        console.log("selected")
        console.log($(elem))

        disable_for($(elem));
    });
}

function disable_for($element) {
    if ($element.attr("data-option-disables")) {
        var $disables = JSON.parse($element.attr("data-option-disables"));
    }
    console.log("disabled")
    console.log("disabled77777777777777777777777")
    console.log($element)


    console.log($disables)


    if ($disables) {
        for (i = 0; i < $disables.length; i++) {
            var elem_to_disable = $("[data-option-id='" + $disables[i] + "']");

            //alert(elem_to_disable.parent().prop('tagName'));
            if (elem_to_disable.parent().prop('tagName') != 'SELECT') {
                //alert("its not a dropdown!");
                elem_to_disable.prop("disabled", true)
                        // .prop("checked", false)
                        .addClass("c_disabled")
                        .closest(".uno_part_wrapper")
                        .prepend("<div class='option_overlay'/>");
                console.log(elem_to_disable)
            }
            else {
                //alert("it is a dropdown");
                console.log("dropdown")
                elem_to_disable.prop("disabled", true)
                        // .prop("checked", false)
                        .addClass("c_disabled")
                        .closest(".uno_part_wrapper")
                //.prepend("<div class='option_overlay'/>");
            }
            console.log()
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

function update_enable_title(elem_to_enable,$elements)
{
    console.log(elem_to_enable.attr('data-option-uniq-id'));

    tagname = find_tag_name(elem_to_enable)
    thisuniqid = elem_to_enable.attr('data-option-uniq-id')
    if (tagname == "OPTION")
    {
        if (thisuniqid == elem_to_enable.parent().find('option:selected').attr('data-option-uniq-id'))
        {
            set_enable_title(elem_to_enable, tagname,$elements)
        }
    }
    else if (tagname == 'radio') {
        console.log("i am radio")
        console.log(elem_to_enable.is(':checked'))
        if (elem_to_enable.is(':checked'))
        {
            set_enable_title(elem_to_enable, tagname,$elements)
        }
    }
    else if (tagname == 'checkbox')
    {
        console.log("i am ccradio8888888888888")
        console.log(elem_to_enable.is(':checked'))
        console.log(elem_to_enable)

        if (elem_to_enable.is(':checked'))
        {
            set_enable_title(elem_to_enable, tagname,$elements)
        }
        else {
        }
    }
}

function update_disable_title(elem_to_disable)
{
    console.log(elem_to_disable.attr('data-option-uniq-id'));

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
        console.log("i am radio")
        console.log(elem_to_disable.is(':checked'))
        if (elem_to_disable.is(':checked'))
        {
            set_disable_title(elem_to_disable, tagname)
        }
    }
    else if (tagname == 'checkbox')
    {
        console.log("i am ccradio8888888888888")
        console.log(elem_to_disable.is(':checked'))
        console.log(elem_to_disable)

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
        console.log("setting title8888888888888888")
        console.log(elem_to_disable.attr('data-option-part-id'))

        var elem_part_id = elem_to_disable.attr('data-option-part-id');
        var make_dash = $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html()
        console.log(make_dash)
        console.log(make_dash.replace(elem_to_disable.attr('data-option-name'), "-"))

        $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html(make_dash.replace(elem_to_disable.attr('data-option-name'), "-"));
    }
    else
    {
        console.log("sssssssssss")
        console.log(elem_to_disable.attr('data-option-part-id'))

        var elem_part_id = elem_to_disable.attr('data-option-part-id');
        $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html('-');
    }



}
function set_enable_title(elem_to_enable, tagname,$elements)
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
        console.log("sssssssssss")
        console.log(elem_to_enable.attr('data-option-part-id'))

        if (elem_to_enable.hasClass('c_disabled')) {

        }
        else
        {
            var elem_part_id = elem_to_enable.attr('data-option-part-id');
            console.log("wwwwwwwwwwwwwssssssssssssssssssssssaaaa")
            console.log(elem_to_enable)

            $('span#part_' + elem_part_id + '_title_container').find('.part_title_options').html(elem_to_enable.attr('data-option-name'));

        }

    }


}