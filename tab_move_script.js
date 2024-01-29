$(document).ready(function () {
    //탭버튼 동작 소스


    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show();

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("span").attr("data");
        $(activeTab).fadeIn();
        return false;
    });

    //같은 페이지 내에서 동작하게 하는 코드
    $(".product .small_menu li").click(function () {
        var indexNo = $(this).index();
        console.log(indexNo)
        $("ul.tabs li").removeClass("active");
        $(".tabs li").eq(indexNo).addClass("active");
        $(".tab_content").hide();
        var activeTab2 = $(".tabs li.active").find("span").attr("data");
        $(activeTab2).fadeIn();
        return false;
    });



    $(function () {
        if (location.hash == "#tab1_pr") {
            $('.tabs').find('li').eq(0).addClass('active').siblings().removeClass();
            $('.tab_container').find('#tab1').addClass('active').siblings().removeClass('active');
        } else if (location.hash == "#tab2_pr") {
            $('.tabs').find('li').eq(1).addClass('active').siblings().removeClass();
            $(".tab_content").hide(); //모든 contents들 숨김
            $("#tab2").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        } else if (location.hash == "#tab3_pr") {
            $('.tabs').find('li').eq(2).addClass('active').siblings().removeClass();
            $(".tab_content").hide(); //모든 contents들 숨김
            $("#tab3").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        }
        else if (location.hash == "#tab4_pr") {
            $('.tabs').find('li').eq(3).addClass('active').siblings().removeClass();
            $(".tab_content").hide(); //모든 contents들 숨김
            $("#tab4").fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        }
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    })



});


//https://joonopark92.tistory.com/99 확인!