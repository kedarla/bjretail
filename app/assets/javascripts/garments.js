$(function() {
  $(".switcher").on("change", function() {
    var $this = $(this);
    var $switchers = $(".switcher");
    if($this.attr("data-option-disables")) {
      var $disables = JSON.parse($this.attr("data-option-disables"));
    }

    $switchers.each(function(index, elem) {
      $(elem).prop("disabled", false).removeClass("c_disabled")
            .closest(".uno_part_wrapper")
            .find(".option_overlay").remove();
    });
    
    if($disables) {
      for(i = 0; i < $disables.length; i++) {
        var elem_to_disable = $("[data-option-id='" + $disables[i] + "']");
        elem_to_disable.prop("disabled", true)
                      .prop("checked", false)
                      .addClass("c_disabled")
                      .closest(".uno_part_wrapper")
                      .prepend("<div class='option_overlay'/>");
      }
    }
  });

  // $("#proceed_to_order").on('click', function() {
  //   $("#proceed_to_order_form").submit();
  // });
});

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


