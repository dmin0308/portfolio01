// window.addEventListener('load', function(){

//   const mynavi = 
//   this.document.querySelectorAll("#navmenu li"); //배열형 데이터

//   mynavi[0].innerHTML = `<a href="${navidata[0].d1href}">${navidata[0].d1text}</a>`,
//   mynavi[1].innerHTML = `<a href="${navidata[1].d1href}">${navidata[1].d1text}</a>`;

// })


window.addEventListener('load', function() {

  const mynavi = this.document.querySelectorAll("#navmenu li"); // 배열형 데이터

  for (let x in mynavi) {
    mynavi[x].innerHTML = `<a href="${navidata[x].d1href}">${navidata[x].d1text}</a>`;
  }

});