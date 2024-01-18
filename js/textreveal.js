$(function () {
    // .text, .text1, .text3 클래스를 가진 요소들을 배열로 가져옵니다.
    var elements = $(".text, .text1, .text3").toArray();
    var lastScrollTop = 0; // 이전 스크롤 위치를 저장하는 변수를 초기화합니다.

    // 스크롤 이벤트를 감지하는 함수를 등록합니다.
    $(window).scroll(function () {
        var currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치를 가져옵니다.

        // 배열의 각 요소에 대해 반복합니다.
        elements.forEach(function (item) {
            var itemOffset = $(item).offset().top - 400; // 각 요소의 상단 위치를 계산합니다.

            // 스크롤 다운할 때 요소가 화면 안에 들어오면 "reveal" 클래스를 추가합니다.
            if (currentScrollTop >= itemOffset && lastScrollTop < itemOffset) {
                $(item).addClass("reveal");
            }
            // 스크롤 업할 때 요소가 화면에서 벗어나면 "reveal" 클래스를 제거합니다.
            else if (currentScrollTop < itemOffset && lastScrollTop >= itemOffset) {
                $(item).removeClass("reveal");
            }
        });

        // 이전 스크롤 위치를 현재 위치로 업데이트합니다.
        lastScrollTop = currentScrollTop;
    });

    // 페이지 로딩 시 요소들이 화면 안에 있는지 확인하고 "reveal" 클래스를 추가합니다.
    elements.forEach(function (item) {
        if ($(window).scrollTop() >= $(item).offset().top - 400) {
            $(item).addClass("reveal");
        }
    });
});