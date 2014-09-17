$(function() {
  $(".radio_option").on("change", function() {
    $("input.c_disabled").each(function() {
      $(this).prop("disabled", false);
      $(this).removeClass("c_disabled");
      $(this).closest(".part_option_wrapper").find(".option_overlay").remove();
    });
  	elem = $(this);
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