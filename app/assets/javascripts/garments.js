$(function() { 
  elem = $(this); 
  var $switchers = $(".switcher");

  run_disabler_for($switchers);

  $(".switcher").on("change", function(e) {
    var $this = $(this);

    $switchers.each(function(index, elem) {
      $(elem).prop("disabled", false).removeClass("c_disabled")
      .closest(".uno_part_wrapper")
      .find(".option_overlay").remove();


      if ($(elem).prop('tagName') == 'SELECT') {
          $(elem).children().removeClass('c_disabled').removeAttr('disabled');
      }
    });
    
$(function() {
  elem = $(this); 
  var $switchers = $(".checkdrop");

  run_disabler_for($switchers);

    $(".checkdrop").on("change", function(e) {
      var $this = $(this);
          var ischecked = e.target.checked;
          if(ischecked) {
            alert("checked it");
          }
          else
          {
            alert("unchecked it");

           $(elem).find("option").removeClass('c_disabled').removeAttr('disabled');
          } 
    });



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

