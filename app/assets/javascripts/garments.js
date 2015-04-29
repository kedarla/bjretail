$(function() {
    var $switchers = $(".switcher");

    run_disabler_for($switchers);

    $(".switcher").on("click", function(e) {
        
        var $this = $(this);

        if ($this.attr("data-option-disables")) {
            var $disables = JSON.parse($this.attr("data-option-disables"));
        }
 
        if ($disables) {
            for (i = 0; i < $disables.length; i++) {
                console.log('need to check it is selected')
                console.log($disables[i])

                var $already_selected = $("option[data-option-id='" + $disables[i] + "']").is(':selected');
                console.log('selected')
                console.log($already_selected)
                console.log($("option[data-option-id='" + $disables[i] + "']"))
              

                var $data_option_part_id = $("option[data-option-id='" + $disables[i] + "']").attr('data-option-part-id')
                var $parent_id = $("option[data-option-id='" + $disables[i] + "']").parent().attr('data-parent-part-id')
                console.log($("option[data-option-id='" + $disables[i] + "']").parent().attr('data-parent-part-id'))
                console.log(7777777777)
                if ($already_selected) {
                    $("#previousdashedid").val($parent_id);
                }
                console.log($("#previousdashedid").val())

            }
        }







        $switchers.each(function(index, elem) {
            

            $(elem).prop("disabled", false).removeClass("c_disabled")
                    .closest(".uno_part_wrapper")
                    .find(".option_overlay").remove();

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


        });
        // disable_for($this);

        run_disabler_for($switchers);

        // Panel title update
        var $mypart_id = $this.attr("data-option-part-id");
        var $selection_name = $switchers.filter("[data-option-part-id='" + $mypart_id + "']").map(function(i, el) {
            if ($(el).is(':checked')) {
                return $(el).attr('data-option-name');
            }
        }).get().join(', ');
        if (!$mypart_id) {
            $mypart_id = $this.attr("data-part-id");
            $selection_name = $this.find(':selected').attr('data-option-name');
        }

        if ($already_selected)
        {
            //var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
            //$part_title_container.find(".part_title_options").html("--");
            console.log($already_selected)


            $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');



        }
        else {
            var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
            $part_title_container.find(".part_title_options").html($selection_name);


            console.log(41578)
            console.log(41578)
            console.log($("#previousdashedid").val())
            console.log($("select[data-parent-part-id='" + $("#previousdashedid").val() + "']").attr('data-part-id'))
            var data_part_id_p = $("select[data-parent-part-id='" + $("#previousdashedid").val() + "']").attr('data-part-id')
            console.log(4157)
            console.log(data_part_id_p)

            var $part_title_container = $("span#part_" + data_part_id_p + "_title_container");
            $part_title_container.find(".part_title_options").html($("select[data-parent-part-id='" + $("#previousdashedid").val() + "'] option:selected").text());


            console.log($already_selected)

        }


    });

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

function disable_for($element) {
    if ($element.attr("data-option-disables")) {
        var $disables = JSON.parse($element.attr("data-option-disables"));
    }

    if ($disables) {
        for (i = 0; i < $disables.length; i++) {
            var elem_to_disable = $("[data-option-id='" + $disables[i] + "']");

            //alert(elem_to_disable.parent().prop('tagName'));
            if (elem_to_disable.parent().prop('tagName') != 'SELECT')
            {
                //alert("its not a dropdown!");
                elem_to_disable.prop("disabled", true)
                        .prop("checked", false)
                        .addClass("c_disabled")
                        .closest(".uno_part_wrapper")
                        .prepend("<div class='option_overlay'/>");
            }
            else
            {
                //alert("it is a dropdown");
                elem_to_disable.prop("disabled", true)
                        .prop("checked", false)
                        .addClass("c_disabled")
                        .closest(".uno_part_wrapper")
                //.prepend("<div class='option_overlay'/>");
            }
        }
    }
}

// $(document).ready(function(){
//     $(".child_option").on("change", function() {
//        elem = $(this);
//        e = $("option:selected", this).text();
//        //alert(e);
//     $("#part_child_" + elem.attr("data-option-subid")).html(e);

//     //alert(elem.options[elem.selectedIndex].value);
//     //alert(elem.value); 


//    //alert("#part_child_" + elem.attr("data-option-subid"));

// });

//  // $('.radio_option_img').click(function(){

//    // $('.selected_part_option').text = $(this).text();

//   //})
//   $(function(){
//   $(".radio_option_child").change(function(){
//     elem = $(this);
//    // alert(elem);
//     if ($(this).is(':checked'))
//     {
//       e = ($(this).attr("data-option-name"));
//       //alert(e);
//       $("#part_child_" + elem.attr("data-option-id")).html(e);
//       //alert("#part_child_" + elem.attr("data-option-id"));

//     }
//   });
// });


// $(document).ready(function () {

//     $('input[type="checkbox"]').click(function () {
//         var elem = $(this);
//         var part = $(this).attr("data-part-name");
//         //alert(part);
//         var selected_options = $('.' + part).filter(':checked').map(function () {
//             return '' + $(this).attr("data-option-name") + '</b>'
//         }).get();
//         $("#part_child_" + elem.attr("data-part-id")).html(selected_options.join(', '));
//     });
// });

// });
