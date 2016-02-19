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
    $('#profile').hide();
    var options = "";
    for(var i = 1; i<11; i++ ) {
        options += "<option value="+i+">"+i+"</option>";
    }
    $("select[name='frequency22']").html( options );
     //$("#profile").css("height","0px").css("overflow","hidden");
//    $(":not(.magic)").click(function(){
//        if( $("#profile").css("display") == "block"){
//                $("#profile").css("display","none");
//            }
////       / console.log("clicked"+ this);
//        
//    });
     $(document).on('click', function(e) {
        if (e.target.id == "userId" || e.target.id == 'profile' || e.target.id == 'profile_email' || e.target.id == 'profile_options'|| e.target.id == 'profile_name' || e.target.id=="profile_pic" || e.target.id=="profile_info" || e.target.parentElement.id=="profile_options") {
            //
            $('#profile').show();//css("height","150px").css("overflow","visible");
        }  
         else{
            //$('#profile').hide();
             $('#profile').hide();//css("height","0px").css("overflow","hidden").css("box-shadow","none");
            
        }
         console.log(e.target.id+ ". ."+e.target.parentElement.id); 
        // console.log(e.target.name);

    });
    
//    $("#profile").click(function(){
//                     console.log("clicked "+ this.id); 
//    });
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) {
            $("#profile").hide();
           // $('#profile').css("height","0px").css("overflow","hidden").css("box-shadow","none");
        }
    
    });
    
});