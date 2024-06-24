$(function(){
    $(window).on('scroll', function(){
        let scrps = $(this).scrollTop();
        if (scrps > 80) { // 스크롤이 아래로
            // $("#hd").addClass('bg-dark border-bottom border-white').removeClass("bg-white");
            // $("#hd li a").addClass("text-white").removeClass("text_black")

            $("body").addClass("scroll")
           
            
            
        } else {
            // $("#hd").removeClass('bg-dark border-bottom border-white').addClass("bg-white");
            // $("#hd li a").addClass("text-white").removeClass("text_black")
            $("body").removeClass("scroll")
        }

        // $("body").attr("data-scrollps", $(this).scrollTop() )
    });
});