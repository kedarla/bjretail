$(function() {
  $(".radio_option").on("change", function() {
    elem = $(this);

    grouped_inputs = $("input[data-option-group='" + elem.attr("data-option-group") + "']");
    grouped_inputs.each(function() {
      gi = $(this);
      gi_disables = JSON.parse(gi.attr("data-option-disables"));
      for(i = 0; i < gi_disables.length; i++) {
        elem_to_enable = $("input[data-option-subid='option_subid_" + gi_disables[i] + "']");
        elem_to_enable.prop("disabled", false).removeClass("c_disabled").closest(".part_option_wrapper").find(".option_overlay").remove();;
      }
    });

    // Disable related options
    disables = JSON.parse(elem.attr("data-option-disables"));
    for(i = 0; i < disables.length; i++) {
      elem_to_be_disabled = $("input[data-option-subid='option_subid_" + disables[i] + "']");
      elem_to_be_disabled.prop("disabled", true).addClass("c_disabled");
      elem_to_be_disabled.closest(".part_option_wrapper").prepend("<div class='option_overlay'/>");
    }
    $("#selected_part_" + elem.attr("data-option-part")).find(".selected_part_option").html(elem.attr("data-option-name"));

    // Enable related options
    enables = JSON.parse(elem.attr("data-option-enables"));
    for(i = 0; i < enables.length; i++) {
      elem_to_be_enabled = $("[data-option-subid='option_subid_" + enables[i] + "']");
      console.log(elem_to_be_enabled);
      elem_to_be_enabled.prop("selected", true);
      elem_to_be_enabled.prop("checked", true);
    }
  });

  $("#proceed_to_order").on('click', function() {
    $("#proceed_to_order_form").submit();
  });
});

$(document).ready(function(){
    $(".child_option").on("change", function() {
       elem = $(this);
       e = $("option:selected", this).text();
       //alert(e);
    $("#part_child_" + elem.attr("data-option-subid")).html(e);
    
    //alert(elem.options[elem.selectedIndex].value);
    //alert(elem.value); 


   //alert("#part_child_" + elem.attr("data-option-subid"));

});

 // $('.radio_option_img').click(function(){

   // $('.selected_part_option').text = $(this).text();

  //})
  $(function(){
  $(".radio_option_child").change(function(){
    elem = $(this);
   // alert(elem);
    if ($(this).is(':checked'))
    {
      e = ($(this).attr("data-option-name"));
      //alert(e);
      $("#part_child_" + elem.attr("data-option-id")).html(e);
      //alert("#part_child_" + elem.attr("data-option-id"));
    }
  });
});
  

$(document).ready(function(){

        $('input[type="checkbox"]').click(function(){
          elem = $(this);
          part = $(this).attr("data-part-name");
          //alert(part);
          selected_options = "";
          $('.' + part).each(function () {
              if ($(this).is(":checked")) {
                selected_options += ' | ' + $(this).attr("data-option-name");
              }
            });
            $("#part_child_" + elem.attr("data-part-id")).html(selected_options);
        });
    });


});


