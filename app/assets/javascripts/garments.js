$(function() {
  var $switchers = $(".switcher");

  run_disabler_for($switchers);
  
  $(".switcher").on("change", function(e) {
    var $this = $(this);

    $switchers.each(function(index, elem) {
      $(elem).prop("disabled", false).removeClass("c_disabled")
      .closest(".uno_part_wrapper")
      .find(".option_overlay").remove();
    });
    
    disable_for($this);

    run_disabler_for($switchers);

    // Panel title update
    var $mypart_id = $this.attr("data-option-part-id");
    var $selection_name = $switchers.filter("[data-option-part-id='" + $mypart_id + "']").map(function(i, el) {
      if($(el).is(':checked')) {
        return $(el).attr('data-option-name');
      }
    }).get().join(', ');
    if(!$mypart_id) {
      $mypart_id = $this.attr("data-part-id");
      $selection_name = $this.find(':selected').attr('data-option-name');
    }
    var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
    $part_title_container.find(".part_title_options").html($selection_name);
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
  if($element.attr("data-option-disables")) {
    var $disables = JSON.parse($element.attr("data-option-disables"));
  }

    if($disables) {
      for(i = 0; i < $disables.length; i++) {
        var elem_to_disable = $("[data-option-id='" + $disables[i] + "']");

        //alert(elem_to_disable.parent().prop('tagName'));
        if(elem_to_disable.parent().prop('tagName') != 'SELECT')
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


