$(function(){
    
    $("#portfolio .btn").click(function(){
        $("#portfolio .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){
            $("#portfolio .all").fadeIn();
        }
        else if( $(this).text()=="Website" ){
            $("#portfolio .all").fadeOut(0);
            $("#portfolio .web").fadeIn();
        }
        if( $(this).text()=="Branding" ){
            $("#portfolio .all").fadeOut(0);
            $("#portfolio .brand").fadeIn();
        }
    });

    $("#portfolio .more").click(function(){
        $(this).children("span").toggleClass("fa-minus-circle");
        $(".all:nth-child(7),.all:nth-child(8),.all:nth-child(9)").slideToggle();
    });


    $("#about .more").click(function(){
        $(this).children("span").toggleClass("fa-minus-circle");
        $(".wrap-7 :is(:nth-child(4),:nth-child(5),:nth-child(6))").slideToggle();
    });


    $(".accordion a").click(function(e){
        e.preventDefault();
        $(".accordion a").removeClass("active");
        $(this).addClass("active");
        $(".accordion p").slideUp();
        $(this).next("p").slideDown();
    });

    $(".wrap-13 button").click(function(){
        $(window).scrollTop(0);
    });

    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    });

    if(screen.width<768){
        $("nav a, .signup").click(function(){
            $(".collapse").slideUp();
            $(".menu").removeClass("active");
        });
       
    };

    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").css({"overflow-y":"hidden"});
        $("body").append(`<div class="popup"></div>`);
        $(".popup").append($(".popupform").html());
        $(".popup input:first").trigger("focus");

        $(".close, .overlay").click(function(){
            $(".popup,.overlay").remove();
            $("body").css({"overflow-y":"auto"});
        });

        $(window).keyup(function(e){
            if(e.which==27){$(".popup,.overlay").remove();}
            $("body").css({"overflow-y":"auto"});
        }) 
    });


    $(".banner button, .banner a").click(function(e){
        e.preventDefault();
        $("body").append(`<div class="overlay"></div>`);
        $("body").css({"overflow-y":"hidden"});
        $("body").append(`<div class="popup"></div>`);
        $(".popup").append(`<button class="close"><span class="fa fa-times-circle"></span></button><iframe width="560" height="315" src="https://www.youtube.com/embed/tQJ4-e-qQVY?si=fDor2duKd6I-CeYg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);

        $(".close, .overlay").click(function(){
            $(".popup,.overlay").remove();
            $("body").css({"overflow-y":"auto"});
        });
        $(window).keyup(function(e){
            if(e.which==27){$(".popup,.overlay").remove();}
            $("body").css({"overflow-y":"auto"});
        }) 
    });

    $(".reviews").bxSlider({
        controls:false,
        auto:true,
        pause:5000,
        autoHover:true
    });
 
});