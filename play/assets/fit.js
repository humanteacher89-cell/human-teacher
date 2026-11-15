/* 휴플 쪽을 앱처럼 한 화면에(11-16 휴먼쌤 "이 휴플 페이지들이, 스크롤해서 위아래로 움직이게 되어 있어서 앱 같지가 않아").
   쪽은 밀리지 않는다(play.css: html · body overflow hidden). 내용이 화면보다 높으면 내용 전체를 같은 비율로 줄여 한 화면에 넣고,
   줄인 만큼 넓혀 양옆이 비지 않게 한다. 두 손가락 확대 · 당겨서 새로 고침 · 튕김도 막는다. */
(function () {
  'use strict';
  var w = document.querySelector('main.wrap');
  if (!w) return;
  function fit() {
    w.style.transform = ''; w.style.width = ''; w.style.maxWidth = ''; w.style.marginLeft = ''; w.style.minHeight = '';
    var vw = document.documentElement.clientWidth, vh = window.innerHeight;
    var s = Math.min(1, vh / w.scrollHeight);
    if (s < 1) {
      // 줄이면 옆이 비므로 그만큼 넓혀 다시 잰다(넓히면 높이가 조금 달라질 수 있어 두 번)
      for (var i = 0; i < 2; i++) {
        var base = Math.min(vw, 1100);
        w.style.maxWidth = 'none'; w.style.width = Math.round(base / s) + 'px';
        s = Math.min(1, vh / w.scrollHeight);
      }
      w.style.transformOrigin = '0 0';
      w.style.transform = 'scale(' + s + ')';
      w.style.marginLeft = Math.max(0, (vw - w.offsetWidth * s) / 2) + 'px';
    } else {
      w.style.minHeight = vh + 'px';
    }
  }
  var t = 0;
  function soon() { clearTimeout(t); t = setTimeout(fit, 60); }
  fit();
  window.addEventListener('resize', soon);
  window.addEventListener('orientationchange', soon);
  window.addEventListener('load', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  Array.prototype.forEach.call(document.images, function (im) { if (!im.complete) im.addEventListener('load', soon); });
  // 확대 · 밀림 막기(창 안의 담벼락 창은 그 안에서만 밀린다)
  ['gesturestart', 'gesturechange'].forEach(function (e) { document.addEventListener(e, function (ev) { ev.preventDefault(); }); });
  document.addEventListener('touchmove', function (ev) {
    if (ev.touches && ev.touches.length > 1) { ev.preventDefault(); return; }
    if (!ev.target.closest || !ev.target.closest('.wmask')) ev.preventDefault();
  }, { passive: false });
})();
