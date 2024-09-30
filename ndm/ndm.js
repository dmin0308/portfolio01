window.addEventListener("load", function () {
  const mynavi = this.document.querySelector("#navmenu ul"); // 배열형 데이터

  let mytag = "";

  for (x of navidata) {
    mytag += `<li><a href="${x.d1href}" target="${x.__target}">${x.d1text}</a></li>`;
  }

  mynavi.innerHTML = mytag;

  // 스크롤 이벤트를 처리하는 함수를 정의
  function handleScroll() {
    var header = document.getElementById("header");
    var svgPaths = document.querySelectorAll(".logo .st0");
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // 헤더 상태에 따라 클래스 및 SVG 색상을 업데이트
    if (scrollPosition > 50) {
      // 스크롤이 50px 이상일 때
      header.classList.add("scrolled");
      header.classList.remove("bg-transparent");
      updateSvgColor(svgPaths, "#222"); // SVG 색상 변경
    } else {
      // 스크롤이 50px 이하일 때
      header.classList.remove("scrolled");
      header.classList.add("bg-transparent");
      updateSvgColor(svgPaths, "#fff"); // SVG 색상 원래대로 변경
    }
  }

  // SVG 색상 업데이트 함수
  function updateSvgColor(paths, color) {
    paths.forEach(function (path) {
      path.style.fill = color;
    });
  }

  // 스크롤 이벤트 리스너를 추가
  window.addEventListener("scroll", function () {
    // requestAnimationFrame을 사용하여 성능 최적화
    requestAnimationFrame(handleScroll);
  });
  document.getElementById('toggleFormBtn').onclick = () => document.getElementById('overlay').style.display = 'flex';
  document.getElementById('closeFormBtn').onclick = () => document.getElementById('overlay').style.display = 'none';
});
