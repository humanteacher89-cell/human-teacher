/* 휴플 위 오른쪽 '담벼락' 단추 → 창(11-13 휴먼쌤 "담벼락 버튼을 누르면 선생님/학생 체크로 선택한 후에 코드 입력하는 입력창이 나오고
   학생이면 코드 넣고 선생님이면 비밀번호 넣는거지 그 다음에 각자 화면으로 이동").
   학생: 학급 코드 여섯 자리 → 담벼락 /b/?c=코드
   선생님: 비밀번호 → 담벼락 서버에서 로그인 → /t/#o=<로그인 표>(담벼락 쪽이 기억하고 주소에서 지움) */
(function () {
  'use strict';
  var me = document.currentScript;
  var BOARD = (me && me.getAttribute('data-board')) || 'https://board.human-teacher.com';
  var btn = document.getElementById('wallBtn');
  if (!btn) return;
  var mask = document.createElement('div');
  mask.className = 'wmask'; mask.hidden = true;
  mask.innerHTML =
    '<div class="wbox" role="dialog" aria-modal="true" aria-labelledby="wTitle">' +
      '<button class="x" type="button" aria-label="닫기">×</button>' +
      '<h2 id="wTitle">담벼락</h2>' +
      '<div class="who" role="group" aria-label="누구인가요">' +
        '<button type="button" class="s" aria-pressed="false">학생</button>' +
        '<button type="button" class="t" aria-pressed="false">선생님</button>' +
      '</div>' +
      '<form class="wS" hidden novalidate>' +
        '<label for="wCode">학급 코드</label>' +
        '<input id="wCode" class="code" inputmode="numeric" maxlength="6" placeholder="000000" autocomplete="off">' +
        '<p class="hint">선생님이 알려 준 숫자 여섯 자리</p>' +
        '<p class="err" hidden></p>' +
        '<button class="go" type="submit">우리 반 담벼락 보기</button>' +
      '</form>' +
      '<form class="wT" hidden novalidate>' +
        '<input type="text" name="username" value="휴먼쌤" autocomplete="username" hidden>' +
        '<label for="wPw">비밀번호</label>' +
        '<input id="wPw" type="password" placeholder="비밀번호" autocomplete="current-password">' +
        '<p class="err" hidden></p>' +
        '<button class="go" type="submit">휴먼쌤 담벼락 열기</button>' +
      '</form>' +
    '</div>';
  document.body.appendChild(mask);
  var q = function (s) { return mask.querySelector(s); };
  var fS = q('.wS'), fT = q('.wT');
  function err(f, msg) { var e = f.querySelector('.err'); e.textContent = msg || ''; e.hidden = !msg; }
  function open() { mask.hidden = false; document.documentElement.style.overflow = 'hidden'; }
  function close() { mask.hidden = true; document.documentElement.style.overflow = ''; btn.focus(); }
  function who(w) {
    [].forEach.call(mask.querySelectorAll('.who button'), function (b) {
      var on = b.classList.contains(w); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    fS.hidden = w !== 's'; fT.hidden = w !== 't'; err(fS); err(fT);
    setTimeout(function () { (w === 's' ? q('#wCode') : q('#wPw')).focus(); }, 30);
  }
  btn.addEventListener('click', open);
  q('.x').addEventListener('click', close);
  mask.addEventListener('click', function (e) { if (e.target === mask) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !mask.hidden) close(); });
  q('.who .s').addEventListener('click', function () { who('s'); });
  q('.who .t').addEventListener('click', function () { who('t'); });
  q('#wCode').addEventListener('input', function () { this.value = this.value.replace(/\D/g, '').slice(0, 6); err(fS); });
  fS.addEventListener('submit', function (e) {
    e.preventDefault();
    var c = q('#wCode').value.replace(/\D/g, '');
    if (c.length !== 6) { err(fS, '숫자 여섯 자리를 넣어 주세요.'); return; }
    location.href = BOARD + '/b/?c=' + c;
  });
  fT.addEventListener('submit', function (e) {
    e.preventDefault();
    var pw = q('#wPw').value, go = fT.querySelector('.go');
    if (!pw) { err(fT, '비밀번호를 넣어 주세요.'); return; }
    go.disabled = true; err(fT);
    fetch(BOARD + '/api/o/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ pw: pw }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { st: r.status, d: d }; }); })
      .then(function (x) {
        if (x.d && x.d.token) { location.href = BOARD + '/t/#o=' + encodeURIComponent(x.d.token); return; }
        if (x.st === 404) { location.href = BOARD + '/t/'; return; }   // 아직 비밀번호를 안 정함 → 담벼락에서 정하기
        go.disabled = false; err(fT, (x.d && x.d.error) || '들어가지 못했어요. 잠시 뒤 다시 해 주세요.');
      })
      .catch(function () { go.disabled = false; err(fT, '인터넷 연결을 확인해 주세요.'); });
  });
})();
