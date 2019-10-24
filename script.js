
function checkPosition(){
    if($("body").scrollTop < 30){
        $(this).removeClass("titleh1");
        $(this).addClass("titleh1");
    }
}