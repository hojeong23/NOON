$(function () {
    let currentSlideIndex = 0;

    function change() {
        const nextSlideIndex = (currentSlideIndex + 1) % 5;
        hideSlideContents(currentSlideIndex);
        hideSlide(currentSlideIndex, nextSlideIndex);

        showSlideContents(nextSlideIndex);
        showSlide(nextSlideIndex);

        currentSlideIndex = nextSlideIndex;
    }

    function hideSlideContents(index) {
        $('.slide_contents').eq(index).hide();
    }

    function showSlideContents(index) {
        $('.slide_contents').eq(index).show();
    }

    function hideSlide(index, nextIndex) {
        // 현재 슬라이드의 slide_contents 숨김
        $('.slide_contents').eq(index).hide();

        // 다음 슬라이드의 slide_contents도 숨김
        $('.slide_contents').eq(nextIndex).hide();

        $($("main div")[index]).removeClass("a");
        $($('.slide li')[index]).removeClass("b");
    }

    function showSlide(index) {
        $($("main div")[index]).addClass("a");
        $($('.slide li')[index]).addClass("b");
    }

    // 초기 상태에서 맨 슬라이드를 보이도록 설정
    showSlideContents(0);
    showSlide(0);

    var intervalId = setInterval(change, 2000);

    $('main div').click(function () {
        clearInterval(intervalId);
        const clickedIndex = $(this).index();

        hideSlide(currentSlideIndex, clickedIndex);
        hideSlideContents(currentSlideIndex);

        showSlide(clickedIndex);
        showSlideContents(clickedIndex);

        currentSlideIndex = clickedIndex;
    });

    $('span').click(function () {
        clearInterval(intervalId);
        const nextIndex = $(this).hasClass('prev') ? (currentSlideIndex - 1 + 5) % 5 : (currentSlideIndex + 1) % 5;

        hideSlide(currentSlideIndex, nextIndex);
        hideSlideContents(currentSlideIndex);

        showSlide(nextIndex);
        showSlideContents(nextIndex);

        currentSlideIndex = nextIndex;
    });
});
