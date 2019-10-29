

$(function() {
    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    $("button").on('click', function(event){
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        //restart animation  //To-Do: this doesnt work
        $('.titleh1').css('animation', 'none');
        $('.titleh1').outerHeight();
        $('.titleh1').css('animation', 'null');
    });

    $(window).scroll(function() {
        var vh = $(window).height();
        var position = $(this).scrollTop();
        if(position < vh/2) 
            $('body').css('background-color', 'gray');
        else if(position > vh/2) {
            $('body').css('background-color', 'white');
        } else if (position > 2*vh - vh/2){
            $('body').css('background-color', 'lightgrey');
        }

    });

    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        if(hash == "#container"){
            $('html, body').animate({
                scrollTop: 0
            }, 800, function(){

            });
            //restart animation
            $('.titleh1').css('animation', 'none');
            $('.titleh1').outerHeight();
            $('.titleh1').css('animation', 'null');
        } else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
            //restart animations
            $(hash).children().css('animation', 'none'); //TO-DO: add specificity
            $(hash).children().outerHeight();
            $(hash).children().css('animation', '');
        }
    } // End if
      });
}); 