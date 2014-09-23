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
  });

  $("#proceed_to_order").on('click', function() {
  	$("#proceed_to_order_form").submit();
  });

  $('.collapse').collapse();
  $('#accordion').on('show.bs.collapse', function () {
    $('#accordion .in').collapse('hide');
  });
});