const statisticTimers = document.querySelectorAll(".statistic-timer");

// 현재 연도 및 업력 계산
const currentYear = new Date().getFullYear();
const yearsSince1981 = currentYear - 1981 + 1; // 1981는 설립연도임.

// '전년생산량'의 연도 자동화
document.getElementById("current-year").textContent = currentYear - 1;

// 업력 자동화
// const yearsCountElement = document.getElementById("years-count");
// yearsCountElement.dataset.to = yearsSince1981;
// yearsCountElement.textContent = yearsSince1981;

function countingAnimation(timer, delay) {
    const dataFrom = parseInt(timer.dataset.from, 10); // 시작값 가져오기
    const dataTo = parseInt(timer.dataset.to, 10); // 목표값 가져오기
    const duration = 2000; // 애니메이션 속도 조정 (밀리초)

    let currentCount = dataFrom;
    const increment = (dataTo - dataFrom) / (duration / 16); // 프레임당 증가량 계산

    const animate = () => {
        currentCount += increment;
        timer.textContent = Math.floor(currentCount); // 표시되는 값 업데이트

        if (currentCount < dataTo) {
            requestAnimationFrame(animate);
        } else {
            timer.textContent = dataTo; // 목표값 설정
            timer.classList.add('text-active');
        }
    };

    setTimeout(() => {
        animate();
    }, delay); // 지정된 지연 후 애니메이션 시작
}

// .statistic-timer이 화면에 보일 때 애니메이션 실행
const targetElement = document.querySelector(".statistic-timer");

// 옵션 설정
const countanioptions = {
    root: null, // viewport를 사용
    rootMargin: '0px',
    threshold: 0.95 // 요소가 95% 보일 때
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            // 0.8초 간격으로 애니메이션 실행
            countingAnimation(entry.target, idx * 800); // 각 타이머마다 지연시간 설정
            observer.unobserve(entry.target); // 애니메이션 실행 후 옵저버 해제
        }
    });
}, countanioptions);

// 타겟 엘리먼트를 관찰 시작
statisticTimers.forEach(timer => {
    observer.observe(timer);
});