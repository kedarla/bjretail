$(function() {
  $(".radio_option").on("change", function() {
  	elem = $(this);
  	$("#selected_part_" + elem.attr("data-option-part")).find(".selected_part_option").html(elem.attr("data-option-name"));
  });
});