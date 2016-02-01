$(document).ready(function(){
   // $("#userId").addClass("hide");
    $("#userId").click(function(){
        $("#profile").fadeToggle();
    });
    $("aside>ul>li>a").each(function(){
            
           
           //$(this).addClass("");
            $(this).click(function(){
                if( $(this).hasClass("active_title") ){
                    $(this).removeClass("active_title");
           
                }
                else{
                     $("aside>ul>li>a").each(function(){
                         $(this).removeClass("active_title");
           
                     });
                    $(this).addClass("active_title");
           
                }
            });
       }
    );
    
   
    var options = "";
    for(var i = 1; i<11; i++ ) {
        options += "<option value="+i+">"+i+"</option>";
    }
    $("select[name='frequency']").html( options );
    
});