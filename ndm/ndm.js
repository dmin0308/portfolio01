window.addEventListener('load', function() {

  const mynavi = this.document.querySelector("#navmenu ul"); // 배열형 데이터

  let mytag = '';


  for( x of navidata){
    mytag += `<li><a href="${x.d1href}" target="${x.__target}">${x.d1text}</a></li>`
  }

  mynavi.innerHTML = mytag;
});