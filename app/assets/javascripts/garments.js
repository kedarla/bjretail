$(function() {
  var $switchers = $(".switcher");

  run_disabler_for($switchers);
  
  $(".switcher").on("click", function(e) {
      //now need to write a code like when user click on select tag
      //  then he select the radio button
      // when he select a radio button then check if that has a disablers.
      // if yes then check that disablers is selected or not
      //if it is selected then make a dash
      //else dont make a dash
    var $this = $(this);
    
    change_title_bar_for_disables()
    
     if($this.attr("data-option-disables")) {
    var $disables = JSON.parse($this.attr("data-option-disables"));
    console.log("4444444")
    console.log($disables)
    
  }
//if the disables is there and if it is selected then the message changes
    if($disables) {
      for(i = 0; i < $disables.length; i++) {
         console.log('need to check it is selected')
         console.log($disables[i])
         
           var $already_selected =   $("option[data-option-id='" + $disables[i] +"']").is(':selected');
           if  (!$already_selected){
               //for radio button need to 
               //now when already a radio button ic clicked and now click on radio button
              // $already_selected =   $("input[data-option-id='" + $disables[i] +"']").is(':checked');
              //now it is for radio button
               var $radio_button_name = $("input[data-option-id='" + $disables[i] +"']").attr('name')
               var $selected_radio_button_id = $("input[name='"+$radio_button_name+"']:checked").attr('data-option-id')
               console.log($("input[data-option-id='" + $disables[i] +"']"));
               console.log("///////")
               console.log($selected_radio_button_id)
               console.log($disables[i])
               
               
                if ($selected_radio_button_id == $disables[i])
               {
                   $already_selected = true
               }
               console.log($already_selected);
               console.log($already_selected);
               
               console.log('radio')
           }
            console.log('selected')
            console.log($already_selected) 
            console.log($("option[data-option-id='" + $disables[i] +"']")) 
            // if it is selected then what i should do is store this id in hidden text
            //when clicked on another radio at that time if this vcalue is false then show the value
            //so now need to store a parent id so that when click new radio then replace
            //selected
            
            var $data_option_part_id = $("option[data-option-id='" + $disables[i] +"']").attr('data-option-part-id')
            var $parent_id =           $("option[data-option-id='" + $disables[i] +"']").parent().attr('data-parent-part-id')
             console.log($("option[data-option-id='" + $disables[i] +"']").parent().attr('data-parent-part-id'))
             console.log(7777777777)
             
             if(!$data_option_part_id)
             {
              $data_option_part_id = $("input[data-option-id='" + $disables[i] +"']").attr('data-option-part-id')
              //$parent_id = $("option[data-option-id='" + $disables[i] +"']").parent().attr('data-parent-part-id')
                 //if its radio button
              $parent_id =   $disables[i]
                 
             }
             console.log($data_option_part_id)
             console.log($parent_id)
             
             
             
              if ($already_selected){
              $("#previousdashedid").val($parent_id);
          }
              console.log($("#previousdashedid").val())
              
          }
    }
    
    
    
    
    
    

     $switchers.each(function(index, elem) {
      //so first step is when click a radio botton check how many times click
      //console.log('123  ')
        
      $(elem).prop("disabled", false).removeClass("c_disabled")
      .closest(".uno_part_wrapper")
      .find(".option_overlay").remove();
 
      //this is to enable all the select tags
        if($(elem).prop("tagName") == 'SELECT')
        {                             $(elem).find('option').each(function() {
                 
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
      if($(el).is(':checked')) {
        return $(el).attr('data-option-name');
      }
    }).get().join(', ');
    if(!$mypart_id) {
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
    else{
    var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
    $part_title_container.find(".part_title_options").html($selection_name);
    
    
    console.log(41578)
    console.log(41578)
    console.log($("#previousdashedid").val())
    console.log($("select[data-parent-part-id='" + $("#previousdashedid").val() +"']").attr('data-part-id'))
       var data_part_id_p = $("select[data-parent-part-id='" + $("#previousdashedid").val() +"']").attr('data-part-id')
       console.log(4157)
       console.log(data_part_id_p)
     if(!data_part_id_p)
     {//when its radio
        data_part_id_p = 
                $("input[data-option-id='" + $("#previousdashedid").val() +"']").attr('data-option-part-id')
         
     }
        
        
    var $part_title_container = $("span#part_" + data_part_id_p + "_title_container");
    if($("input[data-option-id='" + $("#previousdashedid").val() +"']").attr('type')=='radio')
    {
    $part_title_container.find(".part_title_options").html($("input[data-option-id='" + $("#previousdashedid").val() +"']").attr('data-option-name'));
        
    }
    else{
         $part_title_container.find(".part_title_options").html($("select[data-parent-part-id='" + $("#previousdashedid").val() +"'] option:selected").text());
   
    }
       
    
              console.log($already_selected)
    
    }
    
  
  });

$("#proceed_to_order").on('click', function() {
  $("#proceed_to_order_form").submit();
});
});

function change_title_bar_for_disables()
{
    
}



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
