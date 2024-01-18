// 마우스 움직임 이벤트 리스너를 설정합니다.
$(document).mousemove(function (event) {
    // 각 '.eye' 클래스를 가진 요소에 대해 반복합니다.
    $('.eye').each(function () {
        // 현재 눈의 중심 좌표를 계산합니다. 
        const centerX = $(this).offset().left + $(this).width() / 2;
        const centerY = $(this).offset().top + $(this).height() / 2;

        // 마우스 위치와 눈의 중심 사이의 각도를 계산합니다.
        const angle = Math.atan2(event.pageX - centerX, event.pageY - centerY);

        // 각도를 도(degree) 단위로 변환하고, 270도를 더해 눈동자가 마우스를 바라보도록 조정합니다.
        const rotateDeg = (angle * (180 / Math.PI) * -1) + 270;

        // 계산된 각도로 눈동자의 회전을 설정합니다.
        $(this).css('transform', `rotate(${rotateDeg}deg)`);
    });
});
