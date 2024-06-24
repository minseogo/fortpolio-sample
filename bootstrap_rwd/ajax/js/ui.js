// 첫번째 body를 이용한 식
// $(function(){
//     $(window).on('scroll', function(){
//         let scrps = $(this).scrollTop();
//         if (scrps > 80) { 
//             $("body").addClass("scroll")   
//         } else {
//             $("body").removeClass("scroll")
//         }
//     });
// });


// 두번째 hd를 이용한 식
$(function(){
    $(window).on('scroll', function(){
        let scrps = $(this).scrollTop();
        if (scrps > 80) { // 스크롤이 아래로        
            $("#hd").addClass("scroll")
        } else {
            $("#hd").removeClass("scroll")
        }
    });
});