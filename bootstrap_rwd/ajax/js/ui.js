$(function(){
    $(window).on('scroll', function(){ // this를 사용할땐 화살표 함수 => 를 사용할 수 없다. 화살표함수는 심플한 식에만 사용하기 //
        let scrps = $(this).scrollTop();
        if( scrps > 80 ){ // 스크롤이 아래로
            $("#hd").addClass('bg-dark border-bottom border-white').removeClass("bg-white")
        }else{
            $("#hd").removeClass('bg-dark border-bottom border-white').addClass("bg-white")
        }

        
        // $("body").attr("data-scrollps", $(this).scrollTop() )

    })
})