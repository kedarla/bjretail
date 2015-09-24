 function needtocallonload(){
    /*
     * copied this function same as down because i want this complete functionality should work for 
     * document.load 
     */
     var $switchers = $(".switcher");
     $(".switcher").each(function( index ) {
      var $this = $(this);
      
      if($this.attr("data-option-disables")) {
        var $disables = JSON.parse($this.attr("data-option-disables"));
      }
      if(typeof $disables == 'undefined')
      {
       if($this.prop('tagName') == "SELECT")
       {
         if ($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-disables') != '')
              {   ////////console.log("4125")
                  ////////console.log($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-disables'))
                  if(typeof $("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-disables') != 'undefined')
                  {    
                    $disables=JSON.parse($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-disables'))
                  }       
                }
              }

            }      if($disables) {
              for(i = 0; i < $disables.length; i++) {
               input = document.createElement( "input" );
               input.setAttribute( "style", "display:block" );
               dis_uniq_attr = $("option[data-option-id='" + $disables[i] +"']").attr('data-option-uniq-id')
               if(typeof dis_uniq_attr == 'undefined')
               {
                dis_uniq_attr = $("input[data-option-id='" + $disables[i] +"']").attr('data-option-uniq-id')
              }

              uniqidforsetattr=$this.attr('data-option-uniq-id')
              idforsetattr =  $this.attr('id')

              if(typeof $this.attr('data-option-uniq-id') == 'undefined')
              {
               uniqidforsetattr= $("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-uniq-id')
               idforsetattr =  $("select[name='"+$this.attr('name')+"'] option:selected").attr('id')

             }
             finalid = uniqidforsetattr+dis_uniq_attr
             input.setAttribute( "id", "newlyclickedelement"+finalid);
             input.setAttribute( "value", uniqidforsetattr + "enterkey"+dis_uniq_attr );

             input.setAttribute( "class", "lock" );

             document.getElementById('herelocktextboxkept').appendChild(input);

           }
         }





    //then stARTED THE LOOP on .switcher class.
     //then there is a switcher which will actually enabeling all the values
     /*$switchers.each(function(index, elem) {
      //so first step is when click a radio botton check how many times click
      //////////////////console.log('123  ')
        
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
      
 
             });*/
   // disable_for($this);
    // then there is a run for disableing all the values
   // run_disabler_for($switchers);
    //now here the code will be run on lock class elements as they are hidden and according to that a 
    //title is shown
    // Panel title update/*
    /*
    var $mypart_id = $this.attr("data-option-part-id");
    var $selection_name = $switchers.filter("[data-option-part-id='" + $mypart_id + "']").map(function(i, el) {
      if($(el).is(':checked')) {
        return $(el).attr('data-option-name');
      }
    }).get().join(', ');
    
    ////////////console.log("all the selection name will be there")
    ////////////console.log($selection_name)
    
    
    if(!$mypart_id) {
      $mypart_id = $this.attr("data-part-id");
      $selection_name = $this.find(':selected').attr('data-option-name');
    }
    
     var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
     $part_title_container.find(".part_title_options").html($selection_name);*/
    //////////////console.log("setting an html")
    //////////////console.log($selection_name)
    //let it change the title but my locker should wsork
    
   //the above code is for normal display now need to work on logic for .lock class
   // to change the title text bar changes
   //make_enable_fields($this);
 });
 
var $lockers = $(".lock");
  ////////////////console.log("2222222222222")
    //now here is a loop on .lock inputs,what i have to do is from each text box get his value
   //split it via a word enter then first will be newly cllicked element and another is its disabled uniq id
   //now first get that element. if that type is drop  down and it is selected then change its title else
   //not like that have to work on each element
//the first loop is for remove an element which is unclicked and which are previously clicked
//then there is a first loop of lockers

$lockers.each(function(index, elem) {
      //so first step is when click a radio botton check how many times click
      //////////////////console.log('123  ') 
      var arrayofelement = $(elem).val().split("enterkey")
     ////////////////console.log("this array is there")
     ////////////////console.log(arrayofelement[0])
     ////////////////console.log(arrayofelement[1])
     ////////////////console.log("0000000000000");
     //before coming to if check that first elemenmt is still selected or not
     //if not then get its disabled value to back and remove element
     tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr('type')
     if(typeof tagname == 'undefined')
     {//this might be a option
       tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").prop('tagName')

     }
      //////////console.log("tagname1111")
      //////////console.log(tagname)
      if (tagname == 'radio')
       {   get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr('id')
     if ($('#'+get_an_id_of_radio).is(':checked'))
     {
      if (typeof arrayofelement[1] != 'undefined')
      {
         ////////////////console.log("11111111111");
         //now it is undefined that means the disablers is there  so now first check that element type
         //first get that element
         ////////console.log("14666666666666")
         ////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']"))
         ////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName'))
         
         tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
         ////////////////console.log(tagname);
          ////////////////console.log("tagname44444444444444444455555666");
          //now try here it may be an radio and not a option
          
          if(typeof tagname == 'undefined')
          {
            tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type')

          }

          ////////////////console.log(tagname)
          ////////////////console.log(879654)
          if (tagname == "OPTION")
          {  
             ////////////////console.log("1111111111122222222");
             if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
             {
              //here first check if this is currently selected or not if not then remove from div 
              // and release text
           //   if $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']") 

              ////////////////console.log("11111111111333333");
            //in the variable i stored the part id which will be used for title part   
                  ////////////////console.log("first time it comess here")  
                  $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');



             }
         /* else{
              //now else is for like unclicked of elem,ent
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
                //if this is same then hide a text of oldelement in text bar
              ////////////////console.log("5555555555555")
                $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'));
     
            
              }*/

            }
            else if(tagname == 'radio'){
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log('radio1')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {
                //if the disabled is already selected then make a dash
                $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

             }
             else{
                //////////console.log("it is unchecked")
              }
            }
            else if(tagname == 'checkbox')
            {
            ////////////console.log(arrayofelement[1])
              ////////////console.log(arrayofelement[1])
              //////////console.log('radio123')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {

                  //if the disabled is already selected then make a dash
                  $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar

               var make_dash = $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html()
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(make_dash.replace($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'),"-") );


             }
             else{
                 //////////console.log("the checkbox is unchecked")
               }

             }

           }

         }
         else{
             
         
              $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
              //////////console.log($data_option_part_id)
              if (typeof $data_option_part_id == 'undefined')
              {
               $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //////////console.log("from here the log is get set")    

             }
              //////////console.log($data_option_part_id)

 //////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'))
//if this is same then hide a text of oldelement in text bar
         //     $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

         replace_html = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  
         if (typeof replace_html == 'undefined')
         {
           replace_html = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  

         }
         
         
         
         //here before replacing the html need to check weather it is an option if yes then see weather it 
         //is selected if yes then chasnge else dont 
    //     //////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName"))
 //////////////console.log("tagnamee")
////////console.log(11111111111111111);
////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']"))
////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName"))
// one more condition i am adding here before make its title in panel and that is if the same
// element is disabled by other element then dont change its panel title.
// for that using the lock input box here. here i used .lock hidden values but as talked with nirav just for
//this we are using .lock the other uses of .lock may not b useful
console.log(arrayofelement[1])
console.log(arrayofelement[0])
console.log("")
//this if condition means if the same elemnt is disable by another element
if($("input[id$='"+arrayofelement[1]+"']").length>1)
{
    
}
else
{
if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName") == "OPTION")
{
         //check weather it is se,lected

         if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
         {
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }    
      }
      else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "checkbox"){
         ////////////console.log("this ios a checkbox")
         
         checkboxpartid = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("data-option-part-id");
         checkboxnamename = $switchers.filter("[data-option-part-id='" + checkboxpartid + "']").map(function(i, el) {
          if($(el).is(':checked')) {
            return $(el).attr('data-option-name');
          }
        }).get().join(', ');
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(checkboxnamename);

         
       }
       else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "radio"){
        get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('id')
        //now the first element that is radio is unclicked 
        //now the second element is also unclicked then dont do anything
        if ($('#'+get_an_id_of_radio).is(':checked')){
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }
        else{

        }



      }

      else
      {
         ////////////console.log("ultimetly printed from here")
         ////////////console.log(arrayofelement[1])
         //here i am copying from above the code of displaying the selected checkbox names as it is
         //the reason is if i first take a string and then add this selected element then the order
         //might be changed that is why i am copying these 3-4 lines
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

       }
   }
                // if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 


            
            //////////////console.log($this.attr('id')+"removed")    
        //$("#newlyclickedelement"+ get_an_id_of_radio+arrayofelement[1] ).remove(); 
        //////////console.log("now need to remove")
        //////////console.log("#newlyclickedelement"+ arrayofelement[0]+arrayofelement[1])
       // $("#newlyclickedelement"+ arrayofelement[0]+arrayofelement[1] ).remove(); 
  if(typeof arrayofelement[0] != 'undefined')
       {
       var element = document.getElementById("newlyclickedelement"+ arrayofelement[0]+arrayofelement[1]);
       if (element != null) {
         element.parentNode.removeChild(element);
       }
       }

     }
        // $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").is(':checked')
         //$('#order_part_1_option_1').is(':checked')
         //$('#order_part_1_option_1').is(':checked')

       }
       else if(tagname == "OPTION"){
        //if it is an option then we have to see 
        //now this is copied code start this can be a new function
        //before thsi if there is an if else come the meaning of that is check weather the current option is selected
        //or not if it is selected then ok check its disabled and if unselected then in else
        //remove the input element
        
        get_an_id_of_option = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").parent().attr('name')

       ////////////////console.log('getting an id of option')
       ////////////////console.log(get_an_id_of_option)
       ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text())
       
//  if ($('#'+get_an_id_of_radio).is(':checked'))
       //  {  

       //if it is not selected then remove element and then remove dash
     //  if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
   ////////////////console.log('final testing')
   ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text())
   ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text())
   ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").parent().find('option:selected').text())


   if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text() == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").parent().find('option:selected').text())
   {
    if (typeof arrayofelement[1] != 'undefined')
    {
         ////////////////console.log("11111111111");
         //now it is undefined that means the disablers is there  so now first check that element type
         //first get that element
         tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
         ////////////////console.log(tagname);
          ////////////////console.log("tagname44444444444444444455555666");
          //now try here it may be an radio and not a option
          
          if(typeof tagname == 'undefined')
          {
            tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type')

          }

          ////////////////console.log(tagname)
          ////////////////console.log(879654)
          if (tagname == "OPTION")
          {  
             ////////////////console.log("1111111111122222222");
             if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
             {
              //here first check if this is currently selected or not if not then remove from div 
              // and release text
           //   if $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']") 

              ////////////////console.log("11111111111333333");
            //in the variable i stored the part id which will be used for title part   
                  ////////////////console.log("first time it comess here")  
                  $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');



             }
         /* else{
              //now else is for like unclicked of elem,ent
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
                //if this is same then hide a text of oldelement in text bar
              ////////////////console.log("5555555555555")
                $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'));
     
            
              }*/

            }
            else if(tagname == 'radio'){
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log('radio1')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {
                //if the disabled is already selected then make a dash
                $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

             }
           }

           else if(tagname == 'checkbox')
           {
            ////////////console.log(arrayofelement[1])
              ////////////console.log(arrayofelement[1])
              //////////console.log('radio123')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {

                  //if the disabled is already selected then make a dash
                  $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar

               var make_dash = $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html()
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(make_dash.replace($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'),"-") );


             }
             else{
                 //////////console.log("the checkbox is unchecked")
               }

             }


           }
        //now this is copied code end this can be a new function
        //the above if ends and now need to write an else for removing an element and keeping back a text
      }else{

             //////////console.log("elseeeeeeeeeeeeeeeeeeeeeee")
             $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
              //////////console.log($data_option_part_id)
              if (typeof $data_option_part_id == 'undefined')
              {
               $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //////////console.log("from here the log is get set")    

             }
              //////////console.log($data_option_part_id)

 //////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'))
//if this is same then hide a text of oldelement in text bar
         //     $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

         replace_html = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  
         if (typeof replace_html == 'undefined')
         {
           replace_html = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  

         }
         
         
         
         //here before replacing the html need to check weather it is an option if yes then see weather it 
         //is selected if yes then chasnge else dont 
    //     //////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName"))
 //////////////console.log("tagnamee")
if($("input[id$='"+arrayofelement[1]+"']").length>1)
{
    
}
else
{
 if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName") == "OPTION")
 {
         //check weather it is se,lected

         if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
         {
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }    
      }
      else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "checkbox"){
         ////////////console.log("this ios a checkbox")
         
         checkboxpartid = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("data-option-part-id");
         checkboxnamename = $switchers.filter("[data-option-part-id='" + checkboxpartid + "']").map(function(i, el) {
          if($(el).is(':checked')) {
            return $(el).attr('data-option-name');
          }
        }).get().join(', ');
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(checkboxnamename);

         
       }
       else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "radio"){
        get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('id')
        //now the first element that is radio is unclicked 
        //now the second element is also unclicked then dont do anything
        if ($('#'+get_an_id_of_radio).is(':checked')){
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }
        else{

        }



      }

      else
      {
         ////////////console.log("ultimetly printed from here")
         ////////////console.log(arrayofelement[1])
         //here i am copying from above the code of displaying the selected checkbox names as it is
         //the reason is if i first take a string and then add this selected element then the order
         //might be changed that is why i am copying these 3-4 lines
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

       }
       }
       if(typeof arrayofelement[0] != 'undefined')
       {
                        //////////console.log("removedrs")
                        //////////console.log(arrayofelement[0])
                        
                       // //////////console.log($("#newlyclickedelement" + arrayofelement[0]+arrayofelement[1]).remove()); 
                       var element = document.getElementById("newlyclickedelement"+ arrayofelement[0]+arrayofelement[1]);
                       if (element != null) {
                         element.parentNode.removeChild(element);
                       }
                     }

        //
        //
        //end of else copied elements
      } 

    }
    else if (tagname == 'checkbox'){
      ////////console.log("checkbox")
      
   // get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr('id')
   //   ////////console.log(get_an_id_of_radio)
          //  if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )

          if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").is(':checked') )

          {
            if (typeof arrayofelement[1] != 'undefined')
            {
         ////////////////console.log("11111111111");
         //now it is undefined that means the disablers is there  so now first check that element type
         //first get that element
         tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
         ////////////////console.log(tagname);
          ////////////////console.log("tagname44444444444444444455555666");
          //now try here it may be an radio and not a option
          
          if(typeof tagname == 'undefined')
          {
            tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type')

          }

          ////////////////console.log(tagname)
          ////////////////console.log(879654)
          if (tagname == "OPTION")
          {  
             ////////////////console.log("1111111111122222222");
             if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
             {
              //here first check if this is currently selected or not if not then remove from div 
              // and release text
           //   if $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']") 

              ////////////////console.log("11111111111333333");
            //in the variable i stored the part id which will be used for title part   
                  ////////////////console.log("first time it comess here")  
                  $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');



             }
         /* else{
              //now else is for like unclicked of elem,ent
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
                //if this is same then hide a text of oldelement in text bar
              ////////////////console.log("5555555555555")
                $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'));
     
            
              }*/

            }
            else if(tagname == 'radio'){
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log(arrayofelement[1])
              ////////console.log('radio1874')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {
                ////////console.log('radio187488')
                //if the disabled is already selected then make a dash
                $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
         ////////console.log($data_option_part_id)     
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

       }
       else{
                //////////console.log("it is unchecked")
              }
            }
            else if(tagname == 'checkbox')
            {
            ////////////console.log(arrayofelement[1])
              ////////////console.log(arrayofelement[1])
              //////////console.log('radio123')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {

                  //if the disabled is already selected then make a dash
                  $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar

               var make_dash = $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html()
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(make_dash.replace($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'),"-") );


             }
             else{
                 //////////console.log("the checkbox is unchecked")
               }

             }

           }

         }
         else{
              //////////console.log("elseeeeeeeeeeeeeeeeeeeeeee")
              $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
              //////////console.log($data_option_part_id)
              if (typeof $data_option_part_id == 'undefined')
              {
               $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //////////console.log("from here the log is get set")    

             }
              //////////console.log($data_option_part_id)

 //////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'))
//if this is same then hide a text of oldelement in text bar
         //     $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

         replace_html = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  
         if (typeof replace_html == 'undefined')
         {
           replace_html = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  

         }
         
         
         
         //here before replacing the html need to check weather it is an option if yes then see weather it 
         //is selected if yes then chasnge else dont 
    //     //////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName"))
 //////////////console.log("tagnamee")
if($("input[id$='"+arrayofelement[1]+"']").length>1)
{
    
}
else
{
 if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName") == "OPTION")
 {
         //check weather it is se,lected

         if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
         {
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }    
      }
      else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "checkbox"){
         ////////////console.log("this ios a checkbox")
         
         checkboxpartid = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("data-option-part-id");
         checkboxnamename = $switchers.filter("[data-option-part-id='" + checkboxpartid + "']").map(function(i, el) {
          if($(el).is(':checked')) {
            return $(el).attr('data-option-name');
          }
        }).get().join(', ');
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(checkboxnamename);

         
       }
       else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "radio"){
        get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('id')
        //now the first element that is radio is unclicked 
        //now the second element is also unclicked then dont do anything
        if ($('#'+get_an_id_of_radio).is(':checked')){
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }
        else{

        }



      }

      else
      {
         ////////////console.log("ultimetly printed from here")
         ////////////console.log(arrayofelement[1])
         //here i am copying from above the code of displaying the selected checkbox names as it is
         //the reason is if i first take a string and then add this selected element then the order
         //might be changed that is why i am copying these 3-4 lines
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

       }
   }
            // if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 


            
            //////////////console.log($this.attr('id')+"removed")    
        //$("#newlyclickedelement"+ get_an_id_of_radio+arrayofelement[1] ).remove(); 
        //////////console.log("now need to remove")
        //////////console.log("#newlyclickedelement"+ arrayofelement[0]+arrayofelement[1])
       // $("#newlyclickedelement"+ arrayofelement[0]+arrayofelement[1] ).remove(); 
  if(typeof arrayofelement[0] != 'undefined')
       {
       var element = document.getElementById("newlyclickedelement"+ arrayofelement[0]+arrayofelement[1]);
       if( element != null){
         element.parentNode.removeChild(element);
       }
       }

     }
        // $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").is(':checked')
         //$('#order_part_1_option_1').is(':checked')
         //$('#order_part_1_option_1').is(':checked')
       }

    //var previouselem = arrayofelement[2]     
    
  });
  
     /*
    $lockers.each(function(index, elem) { 
      //so first step is when click a radio botton check how many times click
      //////////////////console.log('123  ') 
      var arrayofelement = $(elem).val().split("enter")
     //////////////console.log("this array is there")
     //////////////console.log(arrayofelement[0])
     //////////////console.log(arrayofelement[1])
     ////////////////console.log("0000000000000");
     //now first get an element type of second element because according to that
     //and then check that this element is unclicked or not 
     
     
     
     //so what now i need to check that the type of 
      ////////console.log('wwwwwww');
      ////////console.log(arrayofelement[1])
      ////////console.log(arrayofelement[1])
      
      ////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']"));
      ////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName'));
      elementtype1 = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
      
      if(typeof elementtype1 == 'undefined')
      {
      elementtype1 = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type')
          
      }
      ////////////////console.log(elementtype1);
      ////////////////console.log(elementtype1);
      //if it is option then check it is selected with the same id
      
      
      ////////////////console.log("this is from second loop");
      
      
      if (elementtype1 == "OPTION")
                  {
                   //why 
                   //////////////console.log("why this condition is trues")
                   //////////////console.log(elementtype1)
                   
         ////////////////console.log(arrayofelement[0])
         ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id'))
         
      
        if(arrayofelement[1] != $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
          {
              //if user click on another option box
            //in the variable i stored the part id which will be used for title part   
          
                
                //then remove the text box
                get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr('id')
                ////////////////console.log('the idddd')
                ////////////////console.log(get_an_id_of_radio)
                
                 if(typeof get_an_id_of_radio != 'undefined')
                    {////////////////console.log("enternewly7777777")
                        //////////////console.log("removedrs102")
                       // $("#newlyclickedelement" + get_an_id_of_radio+arrayofelement[1]).remove(); 
                       // $("#newlyclickedelement"+ arrayofelement[0]+arrayofelement[1] ).remove(); 
        var element = document.getElementById("newlyclickedelement"+ arrayofelement[0]+arrayofelement[1]);
                  
                    if( element != null){
                    element.parentNode.removeChild(element);
                }
                }
            
          }}
      
      
      
       
      
      
      
      
      
      
      
        
                 
        });*/


//////////////////console.log("11111111111*************");
/*
//THIS IS second loop for making an dash
      $lockers.each(function(index, elem) {
      //so first step is when click a radio botton check how many times click
      //////////////////console.log('123  ') 
      var arrayofelement = $(elem).val().split("enter")
     ////////////////console.log("this array is there")
     ////////////////console.log(arrayofelement[0])
     ////////////////console.log(arrayofelement[1])
     if (typeof arrayofelement[1] != 'undefined')
     {
         //now it is undefined that means the disablers is there  so now first check that element type
         //first get that element
         tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
         if (tagname == "OPTION")
         {
          if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
          {
            //in the variable i stored the part id which will be used for title part   
                  ////////////////console.log("first time it comess here")  
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
              $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');
            }
             
         }
         
     }
     var previouselem = arrayofelement[2]        
     });
*/


    //im commenting this as above now every thing is now changed
    /*
    if ($already_selected)
    {
   
 
     
    $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');
    
  
    }
    else{
    var $part_title_container = $("span#part_" + $mypart_id + "_title_container");
    $part_title_container.find(".part_title_options").html($selection_name);
   
    }
    */


  }

  function create_a_lock_element($this)
  {
    if($this.attr("data-option-disables")) {
      var $disables = JSON.parse($this.attr("data-option-disables"));
    }
    if(typeof $disables == 'undefined')

    {
     if($this.prop('tagName') == "SELECT")
     {
       if ($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-disables') != '')
        { $disables=JSON.parse($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-disables'))
    }
  }

}      if($disables) {
  for(i = 0; i < $disables.length; i++) {
   input = document.createElement( "input" );
   input.setAttribute( "style", "display:block" );
   dis_uniq_attr = $("option[data-option-id='" + $disables[i] +"']").attr('data-option-uniq-id')
   if(typeof dis_uniq_attr == 'undefined')
   {
    dis_uniq_attr = $("input[data-option-id='" + $disables[i] +"']").attr('data-option-uniq-id')
  }

  uniqidforsetattr=$this.attr('data-option-uniq-id')
  idforsetattr =  $this.attr('id')

  if(typeof $this.attr('data-option-uniq-id') == 'undefined')
  {
   uniqidforsetattr= $("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-uniq-id')
   idforsetattr =  $("select[name='"+$this.attr('name')+"'] option:selected").attr('id')

 }
 finalid = uniqidforsetattr+dis_uniq_attr
 input.setAttribute( "id", "newlyclickedelement"+finalid);
 input.setAttribute( "value", uniqidforsetattr + "enterkey"+dis_uniq_attr );

 input.setAttribute( "class", "lock" );
 alreadyexist = false;
 $('.lock').each(function() {

  if($(this).val() == (uniqidforsetattr + "enterkey"+dis_uniq_attr) )
  {
    alreadyexist = true;
  }
});
 if (alreadyexist)
 {}
else{
  document.getElementById('herelocktextboxkept').appendChild(input);
}



}
}
     //then stARTED THE LOOP on .switcher class.
     //then there is a switcher which will actually enabeling all the values
     /*$switchers.each(function(index, elem) {
      //so first step is when click a radio botton check how many times click
      //////////////////console.log('123  ')
        
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
      
 
             });*/



}
$(function() {

  var $switchers = $(".switcher");
  run_disabler_for($switchers);
  needtocallonload();
  $("#enable_elment_id").val('');
   
  $(".switcher").on("click", function(e) {
    var $this = $(this);
         create_a_lock_element($this);

       console.log("aaaaaaaaaaaa")
        $("#readonlyoptions").val($(''));

     
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
       var $lockers = $(".lock");
   $lockers.each(function(index, elem) {
      //so first step is when click a radio botton check how many times click
      //////////////////console.log('123  ') 
      var arrayofelement = $(elem).val().split("enterkey")
     ////////////////console.log("this array is there")
     ////////////////console.log(arrayofelement[0])
     ////////////////console.log(arrayofelement[1])
     ////////////////console.log("0000000000000");
     //before coming to if check that first elemenmt is still selected or not
     //if not then get its disabled value to back and remove element
     tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr('type')
     if(typeof tagname == 'undefined')
     {//this might be a option
       tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").prop('tagName')

     }
      //////console.log("tagname1111")
      //////console.log(tagname)
      //////console.log(arrayofelement[0])
      //////console.log(arrayofelement[1])
      
      if (tagname == 'radio')
       {   get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr('id')
     if ($('#'+get_an_id_of_radio).is(':checked'))
     {
      if (typeof arrayofelement[1] != 'undefined')
      {
         ////////////////console.log("11111111111");
         //now it is undefined that means the disablers is there  so now first check that element type
         //first get that element
         tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
         ////////////////console.log(tagname);
          ////////////////console.log("tagname44444444444444444455555666");
          //now try here it may be an radio and not a option
          
          if(typeof tagname == 'undefined')
          {
            tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type')

          }

           //////console.log(tagname)
           //////console.log(879654)
           //////console.log(arrayofelement[0])
           //////console.log(arrayofelement[1])
           //////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName'))
           //////console.log($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type'))
           if (tagname == "OPTION")
           {  
             ////////////////console.log("1111111111122222222");
             if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
             {
              //here first check if this is currently selected or not if not then remove from div 
              // and release text
           //   if $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']") 

              ////////////////console.log("11111111111333333");
            //in the variable i stored the part id which will be used for title part   
                  ////////////////console.log("first time it comess here")  
                  $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');



             }
         /* else{
              //now else is for like unclicked of elem,ent
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
                //if this is same then hide a text of oldelement in text bar
              ////////////////console.log("5555555555555")
                $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'));
     
            
              }*/

            }
            else if(tagname == 'radio'){
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log('radio1')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {
                //if the disabled is already selected then make a dash
                $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

             }
             else{
                //////////console.log("it is unchecked")
              }
            }
            else if(tagname == 'checkbox')
            {
            ////////////console.log(arrayofelement[1])
              ////////////console.log(arrayofelement[1])
              //////////console.log('radio123')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {

                  //if the disabled is already selected then make a dash
                  $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
              //////console.log("making a dash here")
              //////console.log($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'))
              
              var make_dash = $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html()
              $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(make_dash.replace($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'),"-") );
              

            }
            else{
                         //////console.log(arrayofelement[1])
                         //////console.log("the checkbox is unchecked")
                       }

                     }

                   }

                 }
                 else{
              //////////console.log("elseeeeeeeeeeeeeeeeeeeeeee")
              $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
              //////////console.log($data_option_part_id)
              if (typeof $data_option_part_id == 'undefined')
              {
               $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //////////console.log("from here the log is get set")    

             }
              //////////console.log($data_option_part_id)

 //////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'))
//if this is same then hide a text of oldelement in text bar
         //     $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

         replace_html = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  
         if (typeof replace_html == 'undefined')
         {
           replace_html = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  

         }
         
         
         
         //here before replacing the html need to check weather it is an option if yes then see weather it 
         //is selected if yes then chasnge else dont 
    //     //////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName"))
 //////////////console.log("tagnamee")

 if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName") == "OPTION")
 {
         //check weather it is se,lected

         if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
         {
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }    
      }
      else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "checkbox"){
         ////////////console.log("this ios a checkbox")
         
         checkboxpartid = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("data-option-part-id");
         checkboxnamename = $switchers.filter("[data-option-part-id='" + checkboxpartid + "']").map(function(i, el) {
          if($(el).is(':checked')) {
            return $(el).attr('data-option-name');
          }
        }).get().join(', ');
         //make
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(checkboxnamename);

         
       }
       else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "radio"){
        get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('id')
        //now the first element that is radio is unclicked 
        //now the second element is also unclicked then dont do anything
        if ($('#'+get_an_id_of_radio).is(':checked')){
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }
        else{

        }



      }

      else
      {
         ////////////console.log("ultimetly printed from here")
         ////////////console.log(arrayofelement[1])
         //here i am copying from above the code of displaying the selected checkbox names as it is
         //the reason is if i first take a string and then add this selected element then the order
         //might be changed that is why i am copying these 3-4 lines
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

       }
            // if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 


            
            //////////////console.log($this.attr('id')+"removed")    
        //$("#newlyclickedelement"+ get_an_id_of_radio+arrayofelement[1] ).remove(); 
        //////////console.log("now need to remove")
        //////////console.log("#newlyclickedelement"+ arrayofelement[0]+arrayofelement[1])
       // $("#newlyclickedelement"+ arrayofelement[0]+arrayofelement[1] ).remove(); 

       var element = document.getElementById("newlyclickedelement"+ arrayofelement[0]+arrayofelement[1]);
       if (element != null) {

     //
    ////////console.log("now i am enabling");
    elem = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']");
    ////////console.log(elem);
    ////////console.log(arrayofelement[0]);
    
    if(elem.attr("data-option-disables")) {
      var $disables = JSON.parse(elem.attr("data-option-disables"));
    }
    if (typeof elem.attr("data-option-disables") == 'undefined')
    {
      var $disables = JSON.parse($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr("data-option-disables")); 
    } 
    if($disables) {
      for(i = 0; i < $disables.length; i++) {
        elem_to_disable = $("[data-option-id='" + $disables[i] + "']");
       ////////console.log(elem_to_disable)
       
       enable_element(elem_to_disable)

     }
   }
    //
    element.parentNode.removeChild(element);
        //here whenever i am removing this element from .lock then enable all the elements which are
        //disabled by this click event.

      }


    }
        // $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").is(':checked')
         //$('#order_part_1_option_1').is(':checked')
         //$('#order_part_1_option_1').is(':checked')

       }
       else if(tagname == "OPTION"){
        //if it is an option then we have to see 
        //now this is copied code start this can be a new function
        //before thsi if there is an if else come the meaning of that is check weather the current option is selected
        //or not if it is selected then ok check its disabled and if unselected then in else
        //remove the input element
        
        get_an_id_of_option = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").parent().attr('name')

       ////////////////console.log('getting an id of option')
       ////////////////console.log(get_an_id_of_option)
       ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text())
       
//  if ($('#'+get_an_id_of_radio).is(':checked'))
       //  {  

       //if it is not selected then remove element and then remove dash
     //  if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
   ////////////////console.log('final testing')
   ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text())
   ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text())
   ////////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").parent().find('option:selected').text())


   if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").text() == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']").parent().find('option:selected').text())

   {
    if (typeof arrayofelement[1] != 'undefined')
    {
         ////////////////console.log("11111111111");
         //now it is undefined that means the disablers is there  so now first check that element type
         //first get that element
         tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
         ////////////////console.log(tagname);
          ////////////////console.log("tagname44444444444444444455555666");
          //now try here it may be an radio and not a option
          
          if(typeof tagname == 'undefined')
          {
            tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type')

          }

          ////////////////console.log(tagname)
          ////////////////console.log(879654)
          if (tagname == "OPTION")
          {  
             ////////////////console.log("1111111111122222222");
             if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
             {
              //here first check if this is currently selected or not if not then remove from div 
              // and release text
           //   if $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']") 

              ////////////////console.log("11111111111333333");
            //in the variable i stored the part id which will be used for title part   
                  ////////////////console.log("first time it comess here")  
                  $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');



             }
         /* else{
              //now else is for like unclicked of elem,ent
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
                //if this is same then hide a text of oldelement in text bar
              ////////////////console.log("5555555555555")
                $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'));
     
            
              }*/

            }
            else if(tagname == 'radio'){
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log('radio1')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {
                //if the disabled is already selected then make a dash
                $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

             }
           }

           else if(tagname == 'checkbox')
           {
            ////////////console.log(arrayofelement[1])
              ////////////console.log(arrayofelement[1])
              //////////console.log('radio123')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {

                  //if the disabled is already selected then make a dash
                  $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar

               var make_dash = $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html()
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(make_dash.replace($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'),"-") );


             }
             else{
                 //////////console.log("the checkbox is unchecked")
               }

             }


           }
        //now this is copied code end this can be a new function
        //the above if ends and now need to write an else for removing an element and keeping back a text
      }else{

             //////////console.log("elseeeeeeeeeeeeeeeeeeeeeee")
             $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
              //////////console.log($data_option_part_id)
              if (typeof $data_option_part_id == 'undefined')
              {
               $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //////////console.log("from here the log is get set")    

             }
              //////////console.log($data_option_part_id)

 //////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'))
//if this is same then hide a text of oldelement in text bar
         //     $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

         replace_html = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  
         if (typeof replace_html == 'undefined')
         {
           replace_html = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  

         }
         
         
         
         //here before replacing the html need to check weather it is an option if yes then see weather it 
         //is selected if yes then chasnge else dont 
    //     //////////////console.log($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName"))
 //////////////console.log("tagnamee")

 if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName") == "OPTION")
 {
         //check weather it is se,lected

         if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
         {
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }    
      }
      else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "checkbox"){
         ////////////console.log("this ios a checkbox")
         
         checkboxpartid = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("data-option-part-id");
         checkboxnamename = $switchers.filter("[data-option-part-id='" + checkboxpartid + "']").map(function(i, el) {
          if($(el).is(':checked')) {
            return $(el).attr('data-option-name');
          }
        }).get().join(', ');
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(checkboxnamename);

         
       }
       else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "radio"){
        get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('id')
        //now the first element that is radio is unclicked 
        //now the second element is also unclicked then dont do anything
        if ($('#'+get_an_id_of_radio).is(':checked')){
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }
        else{

        }



      }

      else
      {
         ////////////console.log("ultimetly printed from here")
         ////////////console.log(arrayofelement[1])
         //here i am copying from above the code of displaying the selected checkbox names as it is
         //the reason is if i first take a string and then add this selected element then the order
         //might be changed that is why i am copying these 3-4 lines
         
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

       }

       if(typeof arrayofelement[0] != 'undefined')
       {
                        //////////console.log("removedrs")
                        //////////console.log(arrayofelement[0])
                        
                       // //////////console.log($("#newlyclickedelement" + arrayofelement[0]+arrayofelement[1]).remove()); 
                       var element = document.getElementById("newlyclickedelement"+ arrayofelement[0]+arrayofelement[1]);
                       if (element != null) {

                        elem = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']");
                        if(elem.attr("data-option-disables")) {
                          var $disables = JSON.parse(elem.attr("data-option-disables"));
                        }
                        if (typeof elem.attr("data-option-disables") == 'undefined')
                        {
                          var $disables = JSON.parse($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr("data-option-disables")); 
                        } 
                        if($disables) {
                          for(i = 0; i < $disables.length; i++) {
                            elem_to_disable = $("[data-option-id='" + $disables[i] + "']");
                            enable_element(elem_to_disable)

                          }
                        }



                        element.parentNode.removeChild(element);
                      }
                    }

                    
        //
        //
        //end of else copied elements
      } 

    }
    else if (tagname == 'checkbox'){
      //////console.log("checkbox5458")
      
   // get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr('id')
   //   ////////console.log(get_an_id_of_radio)
          //  if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )

          if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").is(':checked') )

          {
            if (typeof arrayofelement[1] != 'undefined')
            {
         ////////////////console.log("11111111111");
         //now it is undefined that means the disablers is there  so now first check that element type
         //first get that element
         tagname = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop('tagName')
         ////////////////console.log(tagname);
          ////////////////console.log("tagname44444444444444444455555666");
          //now try here it may be an radio and not a option
          
          if(typeof tagname == 'undefined')
          {
            tagname = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('type')

          }

           //////console.log(tagname)
           //////console.log(879654)
           if (tagname == "OPTION")
           {  
             ////////////////console.log("1111111111122222222");
             if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
             {
              //here first check if this is currently selected or not if not then remove from div 
              // and release text
           //   if $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']") 

              ////////////////console.log("11111111111333333");
            //in the variable i stored the part id which will be used for title part   
                  ////////////////console.log("first time it comess here")  
                  $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');



             }
         /* else{
              //now else is for like unclicked of elem,ent
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
                //if this is same then hide a text of oldelement in text bar
              ////////////////console.log("5555555555555")
                $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'));
     
            
              }*/

            }
            else if(tagname == 'radio'){
             ////////////////console.log(arrayofelement[1])
             ////////////////console.log(arrayofelement[1])
              ////////console.log('radio1874')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {
                ////////console.log('radio187488')
                //if the disabled is already selected then make a dash
                $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar
         ////////console.log($data_option_part_id)     
         $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html('-');

       }
       else{
                //////////console.log("it is unchecked")
              }
            }
            else if(tagname == 'checkbox')
            {
            ////////////console.log(arrayofelement[1])
              ////////////console.log(arrayofelement[1])
              //////////console.log('radio123')
             //what i have to do here is check its disable is already clicked if yes then change the title 

             if( $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").is(':checked') )
             {

                  //if the disabled is already selected then make a dash
                  $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
               //if this is same then hide a text of oldelement in text bar

               var make_dash = $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html()
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(make_dash.replace($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name'),"-") );


             }
             else{
                 //////////console.log("the checkbox is unchecked")
               }

             }

           }

         }
         else{
               //////console.log("elseeeeeeeeeeeeeeeeeeeeeee")
               $data_option_part_id=$(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
              //////////console.log($data_option_part_id)
              if (typeof $data_option_part_id == 'undefined')
              {
               $data_option_part_id=$(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-part-id')
                //////console.log("from here the log is get set")    

              }
               //////console.log($data_option_part_id)
               replace_html = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  
               if (typeof replace_html == 'undefined')
               {
                replace_html = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('data-option-name')  
              }
              if($(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").prop("tagName") == "OPTION")
              {
                if(arrayofelement[1] == $(".switcher").find("[data-option-uniq-id='"+arrayofelement[1]+"']").parent().find('option:selected').attr('data-option-uniq-id') ) 
                {
                  $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);
                }    
              }
              else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "checkbox"){
               checkboxpartid = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("data-option-part-id");
               checkboxnamename = $switchers.filter("[data-option-part-id='" + checkboxpartid + "']").map(function(i, el) {
                if($(el).is(':checked')) {
                  return $(el).attr('data-option-name');
                }
              }).get().join(', ');
               $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(checkboxnamename);

             }
             else if($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr("type") == "radio"){
              get_an_id_of_radio = $(".switcher").filter("[data-option-uniq-id='"+arrayofelement[1]+"']").attr('id')
        //now the first element that is radio is unclicked 
        //now the second element is also unclicked then dont do anything
        if ($('#'+get_an_id_of_radio).is(':checked')){
          $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);

        }
        else{

        }



      }

      else
      {
       $('span#part_' + $data_option_part_id + '_title_container').find('.part_title_options').html(replace_html);
     }
            //////console.log("56582154")
            var element = document.getElementById("newlyclickedelement"+ arrayofelement[0]+arrayofelement[1]);
            //////console.log(element)
            //////console.log(arrayofelement[0])
            //////console.log(arrayofelement[1])

            
            if (element != null) {
             elem = $(".switcher").find("[data-option-uniq-id='"+arrayofelement[0]+"']");

          //////console.log(elem.attr("data-option-disables"))           
          if(elem.attr("data-option-disables")) {
            var $disables = JSON.parse(elem.attr("data-option-disables"));
          }
          if (typeof elem.attr("data-option-disables") == 'undefined')
          {
            var $disables = JSON.parse($(".switcher").filter("[data-option-uniq-id='"+arrayofelement[0]+"']").attr("data-option-disables")); 
          }    
          
          if($disables) {
            for(i = 0; i < $disables.length; i++) {
              elem_to_disable = $("[data-option-id='" + $disables[i] + "']");
              enable_element(elem_to_disable)
            }
          }
          element.parentNode.removeChild(element);
        }
      }
    }

    //var previouselem = arrayofelement[2]        
  });


make_enable_fields($this);
//the above function will just creates a text box value with a fields of enabled values
//now have a loop on text box to click on it and after a click make that text box empty
disable_for_click_elment($this);

});

//this is starting of making fields enable.

function  make_enable_fields($this){

    //////console.log("enablesss");
    
    var inp = $("#enable_elment_id").val();
    if(jQuery.trim(inp).length > 0)
    {
                           //enable all this fields
                         }
                         else
                         {

                //////console.log("5555555555555")  
                //////console.log($this.attr("data-option-enables"))  
                
                if($this.attr("data-option-enables")) {
                  var $enables = JSON.parse($this.attr("data-option-enables"));
                }
                if(typeof $enables == 'undefined')
                {
                 if($this.prop('tagName') == "SELECT")
                 {
                   if ($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-enables') != '')
                   {    
                    if(typeof $("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-enables') != 'undefined')
                    {    
                      $enables=JSON.parse($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-enables'))
                    }       
                  }
                }

              }      if($enables) {
                      //////console.log("enavlessss");
                      $("#enable_elment_id").val($enables);
                      if($enables) {
                        for(i = 0; i < $enables.length; i++) {
             //////console.log($enables[i]);
             tagname = $("[data-option-id='" + $enables[i] + "']").attr('type')
             if(typeof tagname == 'undefined')
     {//this might be a option
       tagname = $("[data-option-id='" + $enables[i] + "']").prop('tagName')

     }    



     if(tagname =='radio')
     {
      $("[data-option-id='" + $enables[i] + "']").prop("checked", true);

      $("[data-option-id='" + $enables[i] + "']").click();

    } 
    if(tagname =='OPTION')
    {
      $("   option[value='"+$enables[i]+"']").prop('selected', true)
             // $("[data-option-id='" + $enables[i] + "']").prop("checked", true);
             $("[data-option-id='" + $enables[i] + "']").click();
           }


           else



           { 
             //console.log("enabeling")
             //console.log($("[data-option-id='" + $enables[i] + "']").is(':checked'))
             if(!$("[data-option-id='" + $enables[i] + "']").is(':checked'))
            {//console.log("aaaaaaaaaaaa")
          $("[data-option-id='" + $enables[i] + "']").click();
        }
      }

    }
    $("#enable_elment_id").val('');


  }
}             

}






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
//     ////////console.log("disable");
  //   ////////console.log(elem.click()) ;

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
          ////////console.log(elem_to_disable)
          ////////console.log("elem_to_disable")
        //alert(elem_to_disable.parent().prop('tagName'));
        ////////console.log(elem_to_disable.parent().prop('tagName'))
        if(elem_to_disable.parent().prop('tagName') != 'SELECT')
        {
         //alert("its not a dropdown!");
         elem_to_disable.prop("readonly", "readonly")

         .addClass("c_disabled")
         .closest(".uno_part_wrapper")
         .prepend("<div class='option_overlay'/>");       


         $("#readonlyoptions").val($("#readonlyoptions").val()+" "+elem_to_disable.prop("value"));

       }
       else
       {
        //alert("it is a dropdown");
        ////////console.log(elem_to_disable)
        ////////console.log("elem_to_disable11111111")
        elem_to_disable.prop("readonly","readonly").addClass("c_disabled").closest(".uno_part_wrapper")
      //.prepend("<div class='option_overlay'/>");

      $("#readonlyoptions").val($("#readonlyoptions").val()+" "+elem_to_disable.prop("value"));

      
    }
  }

}
}




function enable_for_click_elment($element)
{

  if($element.attr("data-option-enables")) {
    var $enables = JSON.parse($element.attr("data-option-enables"));
  }

  if($enables) {
    for(i = 0; i < $enables.length; i++) {
      var elem_to_enable = $("[data-option-id='" + $enables[i] + "']");
          ////////console.log(elem_to_disable)
          ////////console.log("elem_to_disable")
        //alert(elem_to_disable.parent().prop('tagName'));

        elem_to_enable.prop("disabled", false).removeClass("c_disabled")
        .closest(".uno_part_wrapper")
        .find(".option_overlay").remove();
         //here not only removing a disable but also select that element.means



       }

     }

   }





   function disable_for_click_elment($element)
   {
    console.log("777777777777777")
    console.log($element)
   ////console.log($element.attr('type'))
   ////console.log($element.prop('tagName'))
   
   
    console.log($element.attr("data-option-disables"))
    console.log($element.prop("data-option-disables"))
   
   if($element.attr("data-option-disables")) {
    var $disables = JSON.parse($element.attr("data-option-disables"));
  }
  
  if(typeof $disables == 'undefined')
  {
   if($element.prop('tagName') == "SELECT")
   {
     if ($("select[name='"+$element.attr('name')+"'] option:selected").attr('data-option-disables') != '')
              {   ////////console.log("4125")
                  ////////console.log($("select[name='"+$this.attr('name')+"'] option:selected").attr('data-option-disables'))
                  if(typeof $("select[name='"+$element.attr('name')+"'] option:selected").attr('data-option-disables') != 'undefined')
                  {    
                    $disables=JSON.parse($("select[name='"+$element.attr('name')+"'] option:selected").attr('data-option-disables'))
                  }       
                }
              }

            }


////console.log($disables)
if($disables) {
  for(i = 0; i < $disables.length; i++) {
    var elem_to_disable = $("[data-option-id='" + $disables[i] + "']");
          ////////console.log(elem_to_disable)
          ////////console.log("elem_to_disable")
        //alert(elem_to_disable.parent().prop('tagName'));
        if(elem_to_disable.parent().prop('tagName') != 'SELECT')
        {
         //alert("its not a dropdown!");
         ////console.log(elem_to_disable.hasClass('c_disabled'));
         ////console.log("checking class")
         //if already has class then dont add it
         console.log(elem_to_disable.hasClass('c_disabled'));
         console.log(!elem_to_disable.hasClass('c_disabled'));
         
         if(!elem_to_disable.hasClass('c_disabled'))
         {
             console.log("adding a class")
          elem_to_disable.prop("readonly", "readonly")
          .addClass("c_disabled")
          .closest(".uno_part_wrapper")
          .prepend("<div class='option_overlay'/>");       


          $("#readonlyoptions").val($("#readonlyoptions").val()+" "+elem_to_disable.prop("value"));
        }
      }
      else
      {
        //alert("it is a dropdown");
        
         console.log(elem_to_disable)
         console.log("elem_to_disable11111111")
        elem_to_disable.prop("readonly","readonly").addClass("c_disabled").closest(".uno_part_wrapper")
      //.prepend("<div class='option_overlay'/>");

      $("#readonlyoptions").val($("#readonlyoptions").val()+" "+elem_to_disable.prop("value"));


      
    }
  }

}
 
}



function change_label_images(divids,thisref)
{
////////console.log($(thisref).text());
$(".hide"+divids).toggle();
if($(thisref).text() == 'Show More')
{
  $(thisref).text('Show Less')
}
else{
  $(thisref).text('Show More')
}
}


function  enable_element(elem)
{
     console.log("enabeling lement");
     console.log(elem.attr('data-option-uniq-id'));
     console.log(elem.prop('data-option-uniq-id'));
    $elemuniid =  elem.attr('data-option-uniq-id')
    if (typeof $elemuniid == 'undefined'){
    $elemuniid =  elem.prop('data-option-uniq-id')
        
    }
console.log($("input[id$='"+$elemuniid+"']").length)
    if($("input[id$='"+$elemuniid+"']").length>1)
{
   

}
else
{
  elem.prop("disabled", false).removeClass("c_disabled")
    .closest(".uno_part_wrapper")
    .find(".option_overlay").remove();
   
}  

    
   

  }
