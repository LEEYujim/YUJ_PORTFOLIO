$(document).ready(function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out'
    });
});

$(document).ready(function(){

    $('nav ul li a').on('click', function(event){
        event.preventDefault();
        const targetId = $(this).attr('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
   
                
                }
            });

            $(".full-landing-image").ripples({
                resolution: 256, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
                perturbance: 0.04, // 잔물경 굴절 강도. 0은 굴절 없음
             });

             //musinsa_popup----------------------------------
             $('.webbtn .concept').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .musinsa_popup').show();
            });
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .oceans_popup').hide();
            });
            
             //c1----------------------------------
             $('.graphic .c1img').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .oceans_popup').show();
            });
            
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .oceans_popup').hide();
            });

            //c2----------------------------------
            $('.graphic .c4img').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .distort_popup').show();
            });
            
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .distort_popup').hide();
            });

             //c3----------------------------------
             $('.graphic .c7img').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .beyond_popup').show();
            });
            
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .beyond_popup').hide();
            });

            //c4----------------------------------
            $('.graphic .c2img').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .poster_popup').show();
            });
            
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .poster_popup').hide();
            });

            //c5----------------------------------
            $('.graphic .c5img').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .c4d_popup').show();
            });
            
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .c4d_popup').hide();
            });

            
            //c6----------------------------------
            $('.graphic .c8img').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .branding_popup').show();
            });
            
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .branding_popup').hide();
            });
            
            //c7----------------------------------
            $('.graphic .c3img').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', 'hidden'); // 페이지 스크롤 막기
                $('.popup-container, .popup-overlay, .album_popup').show();
            });
            
            $('.delete').click(function(event){
                event.preventDefault(); // 기본 동작(링크 클릭) 막기
                $('body').css('overflow', ''); // 페이지 스크롤 허용
                $('.popup-container, .popup-overlay, .album_popup').hide();
            });



        

});

