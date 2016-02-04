$(document).ready(function(){
   // $("#userId").addClass("hide");
    
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
    
   $("#userId").click(function(){
            $("#profile").fadeToggle();
       
        });
    
    var options = "";
    for(var i = 1; i<11; i++ ) {
        options += "<option value="+i+">"+i+"</option>";
    }
    $("select[name='frequency']").html( options );
     $("#profile").css("display","none");
//    $(":not(.magic)").click(function(){
//        if( $("#profile").css("display") == "block"){
//                $("#profile").css("display","none");
//            }
////       / console.log("clicked"+ this);
//        
//    });
     $(document).on('click', function(e) {
        if (e.target.id == 'userId' || e.target.id == 'profile' || e.target.id == 'profile_email' || e.target.id == 'profile_options'|| e.target.id == 'profile_info' ) {
            //
            $('#profile').show();
        }  
         else{
            $('#profile').hide();
            //console.log(e.target.id + ' Clicked !!'); 
        }

    });
    
//    $("#profile").click(function(){
//                     console.log("clicked "+ this.id); 
//    });
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) {
            $("#profile").hide();

        }
    
    });
    
});