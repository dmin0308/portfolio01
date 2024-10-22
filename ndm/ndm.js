window.addEventListener("load", function () {
  const mynavi = document.querySelector("#navmenu ul"); // DOM 요소 캐싱
  let mytag = "";

  navidata.forEach((x) => {
    mytag += `<li><a href="${x.d1href}" target="${x.__target}">${x.d1text}</a></li>`;
  });

  mynavi.innerHTML = mytag;

  const cursorOuter = document.querySelector(".circle-cursor-outer");
  const cursorInner = document.querySelector(".circle-cursor-inner");
  let mouseX = 0, mouseY = 0;

  // 마우스 이동 트래킹 (매우 가벼운 처리)
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 커서 애니메이션 (transform 사용하여 리플로우 최소화)
  function animateCursor() {
    cursorOuter.style.transform = `translate(${mouseX - cursorOuter.offsetWidth / 2}px, ${mouseY - cursorOuter.offsetHeight / 2}px)`;
    cursorInner.style.transform = `translate(${mouseX - cursorInner.offsetWidth / 2}px, ${mouseY - cursorInner.offsetHeight / 2}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // 스크롤 이벤트 디바운싱
  let isScrolling = false;

  function handleScroll() {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(() => {
        const header = document.getElementById("header");
        const svgPaths = document.querySelectorAll(".logo .st0");
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 50) {
          header.classList.add("scrolled");
          header.classList.remove("bg-transparent");
          updateSvgColor(svgPaths, "#222");
        } else {
          header.classList.remove("scrolled");
          header.classList.add("bg-transparent");
          updateSvgColor(svgPaths, "#fff");
        }

        isScrolling = false; // 스크롤 상태 초기화
      });
    }
  }

  function updateSvgColor(paths, color) {
    paths.forEach((path) => {
      path.style.fill = color;
    });
  }

  // 패시브 리스너 추가로 스크롤 성능 최적화
  window.addEventListener("scroll", handleScroll, { passive: true });

  // 링크 hover 효과 추가
  const links = document.querySelectorAll(".cursor-link");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursorInner.classList.add("cursor-link-hover");
      cursorOuter.classList.add("cursor-link-hover");
    });

    link.addEventListener("mouseout", () => {
      cursorInner.classList.remove("cursor-link-hover");
      cursorOuter.classList.remove("cursor-link-hover");
    });
  });
});
