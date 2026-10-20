/* 휴먼티처닷컴 내용. 카드를 더하거나 고칠 때는 이 파일만 고친다.
   카드 한 장: slug(주소 이름, 영어 소문자) · name · status('열림' | '준비 중') · one(카드 한 줄)
   · url(바로 들어가기 주소, 준비 중이면 '') · note(들어가기 아래 회색 글) · intro(소개 문단 배열)
   · thumb(카드 그림 800x500) · shot(화면 그림, 없으면 '') · links(덧붙일 링크, 없어도 됨) */
window.SITE = {
  channels: [
    { name: '네프콘', desc: '실천 자료', url: 'https://contents.premium.naver.com/humanteacher/humanteacher89', icon: 'assets/ch/naver.png' },
    { name: '스레드', desc: '생각 나눔', url: 'https://www.threads.com/@human_teacher_', icon: 'assets/ch/threads.png' },
    { name: '인스타', desc: '부모 카드', url: 'https://www.instagram.com/human_teacher_/', icon: 'assets/ch/insta.png' },
    { name: '유튜브', desc: '쇼츠', url: 'https://www.youtube.com/@human_teacher', icon: 'assets/ch/youtube.png' },
    { name: '프로필', desc: '모든 링크', url: 'https://litt.ly/humanteacher', icon: 'assets/ch/profile.png' }
  ],

  sections: {
    cloud: {
      title: '클라우드', sub: '책과 자료', color: 'cloud', thumb: 'assets/thumbs/home-cloud.jpg',
      lead: '휴먼쌤의 글, 책, 워크북, 강의노트',
      card: '책과 자료 · 부모백과, 책, 워크북, 강의노트',
      hint: '카드를 누르면 소개가 나오고, 맨 위 \'바로 들어가기\'를 누르면 글과 채널이 열려요. 책·워크북·강의노트는 준비하고 있어요.',
      items: [
        { slug: 'parentbook', name: 'AI시대 부모백과', status: '열림',
          one: '부모님의 AI 질문에 답하는 글 연재 · 네이버 프리미엄 콘텐츠',
          url: 'https://contents.premium.naver.com/humanteacher/humanteacher89',
          label: '네이버 프리미엄 콘텐츠에서 읽기', note: '휴대폰·PC 브라우저에서 읽을 수 있어요.',
          intro: ['부모님이 물어본 AI 질문에 질문 → 결론 → 근거 → 제안 순서로 답하는 글 연재예요. 글 한 편씩 올라오고, 당분간 전체 무료예요.'],
          links: [{ label: '첫 글 읽기: 숙제할 때 아이가 챗GPT를 써도 되나요?', url: 'https://contents.premium.naver.com/humanteacher/humanteacher89/contents/261013204144598up' }],
          thumb: 'assets/thumbs/cloud-naver.jpg', shot: 'assets/thumbs/cloud-naver.jpg' },
        { slug: 'parentbook-web', name: 'AI시대 부모백과 웹', status: '열림',
          one: '질문·결론·오늘 해 볼 한 가지를 한 화면에',
          url: 'https://humanssaem-apps.pages.dev/aiparentbook/',
          label: '부모백과 웹 열기', note: '설치 없이 휴대폰·PC 브라우저에서 열려요.',
          intro: ['부모백과를 한 화면으로 보는 웹이에요. 질문과 결론, 오늘 해 볼 한 가지를 먼저 보여 주고, 휴먼쌤 ACT(질문하기·확인하기·실천하기)로 이어져요. 곧 올라올 질문도 미리 볼 수 있어요.'],
          thumb: 'assets/thumbs/cloud-parentbook.jpg', shot: 'assets/thumbs/cloud-parentbook.jpg' },
        { slug: 'parent-note', name: 'AI시대 부모노트', status: '열림',
          one: '부모백과의 질문을 이미지 카드와 짧은 영상으로 · 인스타그램',
          url: 'https://www.instagram.com/human_teacher_/',
          label: '인스타그램에서 보기', note: '인스타그램 앱이나 브라우저에서 열려요.',
          intro: ['부모백과의 질문을 이미지 카드와 짧은 영상으로 만나는 인스타그램이에요. 긴 글을 읽기 어려울 때 카드 몇 장으로 먼저 봐요.'],
          thumb: 'assets/thumbs/cloud-insta.jpg', shot: '' },
        { slug: 'philosophy', name: '휴먼쌤 교육철학', status: '열림',
          one: '휴먼쌤이 직접 쓰는 생각 나눔 · 스레드',
          url: 'https://www.threads.com/@human_teacher_',
          label: '스레드에서 보기', note: '스레드 앱이나 브라우저에서 열려요.',
          intro: ['휴먼쌤이 직접 쓰는 생각 나눔이에요. 교실과 집에서 해 보고 배운 것을 짧은 글로 나눠요.'],
          thumb: 'assets/thumbs/cloud-threads.jpg', shot: '' },
        { slug: 'book', name: '『AI시대 생각주도력』', status: '준비 중',
          one: '개론서 · 종이책과 전자책', url: '', note: '지금 쓰고 있어요.',
          intro: ['생각주도력 개론서예요. AI 시대에도 휘둘리지 않고, 내 기준으로 판단하는 힘을 다뤄요. 종이책과 전자책으로 나와요.'],
          thumb: 'assets/thumbs/cloud-book.jpg', shot: '' },
        { slug: 'workbook', name: '생각주도력 워크북 4종', status: '준비 중',
          one: '6~7세 · 어린이 기초·심화 · 청소년', url: '', note: '지금 만들고 있어요.',
          intro: ['생각주도력을 직접 해 보며 키우는 워크북이에요. 6~7세, 어린이 기초, 어린이 심화, 청소년 네 가지로 나와요.'],
          thumb: 'assets/thumbs/cloud-workbook.jpg', shot: '' },
        { slug: 'lecture', name: '휴먼쌤 강의노트', status: '준비 중',
          one: '실제 강의를 정리한 글 · 네이버 블로그', url: '', note: '곧 연재를 시작해요.',
          intro: ['휴먼쌤의 실제 강의를 정리한 글이에요. 네이버 블로그에 연재해요.'],
          thumb: 'assets/thumbs/cloud-lecture.jpg', shot: '' }
      ]
    },

    app: {
      title: '앱', sub: '앱과 도구', color: 'app', thumb: 'assets/thumbs/home-app.jpg',
      lead: '휴먼쌤이 만든 작은 웹 앱. 설치 없이 주소 하나로 열려요.',
      card: '앱과 도구 · 설치 없이 주소 하나로 열려요',
      hint: '카드를 누르면 소개와 화면이 나오고, 맨 위 \'바로 들어가기\'를 누르면 앱이 열려요. 휴대폰·PC에서 열려요.',
      items: [
        { slug: 'hangeul-oneshot', name: '한글원샷', status: '열림',
          one: 'QR 한 번에 내 레벨 자료가 열리는 한글학교 자료실',
          url: 'https://humanssaem-apps.pages.dev/hangeul-oneshot/',
          label: '한글원샷 열기', note: '설치 없이 휴대폰·PC 브라우저에서 열려요.',
          intro: ['한 교실에 섞인 연령·실력을 돕는 레벨별 자료 저장소예요. 교사가 주제별로 상·중·하 자료를 올리면, 학습자는 QR 한 번에 자기 레벨 자료를 열어요. 요청문 만들기도 들어 있어요. 화면은 한국어와 프랑스어로 볼 수 있어요.'],
          thumb: 'assets/thumbs/app-oneshot.jpg', shot: 'assets/thumbs/app-oneshot.jpg' },
        { slug: 'game-maker', name: '게임 메이커', status: '열림',
          one: '질문에 답하면 AI에게 부탁할 글과 카드가 나와요',
          url: 'https://humanssaem-apps.pages.dev/apps/game-maker/',
          label: '게임 메이커 열기', note: '설치 없이 휴대폰·PC 브라우저에서 열려요.',
          intro: ['초등 5~6학년이 AI와 함께 나만의 게임을 만드는 앱이에요. 질문 11개에 답하면 내가 만들고 싶은 게임을 찾아서, AI에게 부탁하는 글로 바꿔 줘요. 마지막에는 결과를 카드 이미지 한 장으로 저장해요. 시작 전에 AI 사용 약속 네 가지를 함께 읽어요.'],
          thumb: 'assets/thumbs/app-gamemaker.jpg', shot: 'assets/thumbs/app-gamemaker.jpg' },
        { slug: 'korean-test', name: '한국어 실력 테스트', status: '열림',
          one: '5단계, 5~10분으로 한국어 실력을 가볍게 확인해요',
          url: 'https://humanssaem-apps.pages.dev/apps/korean-test/',
          label: '한국어 실력 테스트 열기', note: '설치 없이 휴대폰·PC 브라우저에서 열려요.',
          intro: ['한국어 실력을 가볍게 확인해 보는 테스트예요. 5단계, 최대 20문제로 5~10분쯤 걸려요. 안내는 영어나 프랑스어로 골라 볼 수 있고, 이름이나 개인 정보는 묻지 않아요.'],
          thumb: 'assets/thumbs/app-koreantest.jpg', shot: 'assets/thumbs/app-koreantest.jpg' },
        { slug: 'air', name: '공기 분자 실험실', status: '열림',
          one: '내 방 공기를 1억 배 키워 분자를 집고 눌러 봐요',
          url: 'https://humanssaem-world.pages.dev/air/',
          label: '공기 분자 실험실 열기', note: '휴대폰·PC에서는 \'화면으로 보기\'로 열려요. 퀘스트 3(손 인식)이나 안드로이드 휴대폰에서는 내 방에 띄워 볼 수 있어요.',
          intro: ['손으로 하는 과학 실험실이에요. 내 방 공기를 1억 배 키워서, 손으로 분자를 집고 상자를 눌러 압력을 보고, 데우고, 원자를 붙여 이산화탄소를 만들어요. 약 5분 걸려요.'],
          thumb: 'assets/thumbs/app-air.jpg', shot: 'assets/thumbs/app-air.jpg' },
        { slug: 'light', name: '빛과 그림자 실험실', status: '열림',
          one: '손전등으로 그림자를 만들고, 거울로 빛을 꺾어 봐요',
          url: 'https://humanssaem-world.pages.dev/light/',
          label: '빛과 그림자 실험실 열기', note: '휴대폰·PC에서는 \'화면으로 보기\'로 열려요. 퀘스트 3(손 인식)이나 안드로이드 휴대폰에서는 내 방에 띄워 볼 수 있어요.',
          intro: ['손으로 하는 과학 실험실이에요. 내 방에 실험 탁자와 흰 스크린을 띄우고, 손전등을 들고 그림자를 만들고, 크게 하고, 옮기고, 거울로 빛을 꺾어 봐요. 약 5분 걸려요.'],
          thumb: 'assets/thumbs/app-light.jpg', shot: 'assets/thumbs/app-light.jpg' },
        { slug: 'phase', name: '물의 상태 변화 실험실', status: '열림',
          one: '얼음을 녹이고 물을 끓여 분자의 움직임을 봐요',
          url: 'https://humanssaem-world.pages.dev/phase/',
          label: '물의 상태 변화 실험실 열기', note: '휴대폰·PC에서는 \'화면으로 보기\'로 열려요. 퀘스트 3(손 인식)이나 안드로이드 휴대폰에서는 내 방에 띄워 볼 수 있어요.',
          intro: ['손으로 하는 과학 실험실이에요. 물 분자를 약 4억 배 키워서, 손잡이로 데우고 식히며 얼음 → 물 → 수증기로 바뀌는 모습을 보고, 차가운 판에 물방울을 맺히게 하고, 얼음을 물에 띄워 봐요. 약 5분 걸려요.'],
          thumb: 'assets/thumbs/app-phase.jpg', shot: 'assets/thumbs/app-phase.jpg' },
        { slug: 'solar', name: '손 위의 태양계', status: '열림',
          one: '내 방에 태양계를 띄워 행성 크기와 거리를 비교해요',
          url: 'https://humanssaem-world.pages.dev/solar/',
          label: '손 위의 태양계 열기', note: '휴대폰·PC에서는 \'화면으로 보기\'로 열려요. 퀘스트 3(손 인식)이나 안드로이드 휴대폰에서는 내 방에 띄워 볼 수 있어요.',
          intro: ['내 방에 태양과 여덟 행성을 띄워요. 손으로 행성을 집어 크기를 견주고, 진짜 거리로 펼치고, 시간을 빨리 돌려 1년을 봐요. 약 5분 걸려요.'],
          thumb: 'assets/thumbs/app-solar.jpg', shot: 'assets/thumbs/app-solar.jpg' },
        { slug: 'body', name: '심장과 폐 탐험실', status: '열림',
          one: '심장을 꺼내 보고, 숨을 쉬고, 피의 길을 따라가요',
          url: 'https://humanssaem-world.pages.dev/body/',
          label: '심장과 폐 탐험실 열기', note: '휴대폰·PC에서는 \'화면으로 보기\'로 열려요. 퀘스트 3(손 인식)이나 안드로이드 휴대폰에서는 내 방에 띄워 볼 수 있어요.',
          intro: ['내 방에 투명한 사람 몸 모형을 띄워요. 심장을 손으로 꺼내 보고, 가로막을 당겨 숨을 쉬게 하고, 피가 산소를 싣고 도는 길을 따라가요. 약 6분 걸려요.'],
          thumb: 'assets/thumbs/app-body.jpg', shot: 'assets/thumbs/app-body.jpg' }
      ]
    },

    world: {
      title: '월드', sub: '이야기와 월드', color: 'world', thumb: 'assets/thumbs/home-world.jpg',
      lead: '휴먼쌤의 세계관을 보여 주는 이야기와 3D 월드',
      card: '이야기와 월드 · 휴먼쌤을 만나는 3D 월드',
      hint: '카드를 누르면 소개와 화면이 나오고, 맨 위 \'바로 들어가기\'를 누르면 월드가 열려요. 휴대폰·PC에서 열려요.',
      story: { name: '리니야, 학교가자', status: '준비 중', one: '로봇 리니가 학교에서 휴먼쌤을 만나는 이야기. 인스타툰으로 먼저 만나요.' },
      items: [
    {
        "slug":  "plaza",
        "name":  "휴먼티처월드 · 광장",
        "status":  "열림",
        "one":  "휴먼쌤을 이야기로 만나고 광장에서 섬으로 떠나요",
        "url":  "https://humanssaem-world.pages.dev/",
        "label":  "휴먼티처월드 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열려요. 휴대폰은 화면 조이스틱으로, PC는 키보드로 걸어요.",
        "intro":  [
                      "휴먼쌤이 어떤 선생님인지 이야기로 만나는 첫 월드예요. 3분쯤 선택지를 고르며 휴먼쌤의 어제·오늘·내일을 따라가요. 이야기가 끝나면 로봇 리니를 따라 광장으로 나가 직접 걸어 다니고, 섬 출발점에서 가상융합교육 섬·AI가 지은 섬·프랑스 한글학교 섬으로 떠날 수 있어요. 두 번째 방문부터는 \u0027광장으로 바로 가기\u0027로 곧장 들어가요."
                  ],
        "thumb":  "assets/thumbs/world-plaza.jpg",
        "shot":  "assets/shots/world-plaza.jpg",
        "shotAlt":  "휴먼쌤이 누구인가 — 첫 화면"
    },
    {
        "slug":  "xr",
        "name":  "가상융합교육 캠퍼스",
        "status":  "열림",
        "one":  "관 여섯 곳을 걸으며 가상융합교육을 알아봐요",
        "url":  "https://humanssaem-world.pages.dev/xr/",
        "label":  "가상융합교육 캠퍼스 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열려요.",
        "intro":  [
                      "선생님들이 가상융합교육을 직접 걸으며 알아보는 캠퍼스예요. 개념관·장비관·수업 사례관·제작 공방·미래 전망대·안전·윤리 등대, 관 여섯 곳을 차례로 둘러봐요. 오른쪽 위 \u0027연수 수첩\u0027에 도장 여섯 칸을 모으면 수료증을 받을 수 있어요."
                  ],
        "thumb":  "assets/thumbs/world-xr.jpg",
        "shot":  "assets/shots/world-xr.jpg",
        "shotAlt":  "가상융합교육 캠퍼스 — 융합 광장"
    },
    {
        "slug":  "ai",
        "name":  "AI가 지은 섬",
        "status":  "열림",
        "one":  "AI가 일하는 방식대로 사는 마을을 돌아요",
        "url":  "https://humanssaem-world.pages.dev/ai/",
        "label":  "AI가 지은 섬 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열려요.",
        "intro":  [
                      "사람처럼 말하는 AI가 아니라, AI가 실제로 일하는 방식대로 사는 마을이에요. 마을 주민의 부탁 하나를 따라가고, 마을·도서관·패턴·시장·꿈 공방·호수 여섯 구역을 돌며 도장을 모아요. 도장을 다 모으면 \u0027명예 주민증\u0027을 받아요."
                  ],
        "thumb":  "assets/thumbs/world-ai.jpg",
        "shot":  "assets/shots/world-ai.jpg",
        "shotAlt":  "AI가 지은 섬 — 깨어나는 마을"
    },
    {
        "slug":  "hangul-france",
        "name":  "프랑스 한글학교 로비",
        "status":  "열림",
        "one":  "한글학교 17곳의 온라인 로비와 교실",
        "url":  "https://humanssaem-hangul-france.pages.dev/",
        "label":  "프랑스 한글학교 로비 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열려요.",
        "intro":  [
                      "프랑스에 있는 한글학교 17곳을 한 지도에 모은 온라인 로비예요. 지도에서 학교를 찾아 교실에 들어가면 교장 선생님과 한국어로 짧게 이야기를 나누고, 책·사진첩·TV를 둘러볼 수 있어요. 같은 시간에 들어온 사람들끼리 서로 모습이 보여요."
                  ],
        "thumb":  "assets/thumbs/world-hangul-france.jpg",
        "shot":  "assets/shots/world-hangul-france.jpg",
        "shotAlt":  "프랑스 한글학교 로비 — 만남의 광장"
    },
    {
        "slug":  "vr1",
        "name":  "월드 1 VR — 휴먼쌤이 누구인가",
        "status":  "열림",
        "one":  "휴먼쌤의 이야기를 VR로 따라가요",
        "url":  "https://humanssaem-world.pages.dev/vr/",
        "label":  "월드 1 VR 들어가기",
        "note":  "메타 퀘스트 3 브라우저에서 VR로 들어가고, 휴대폰·PC에서는 화면으로 볼 수 있어요.",
        "intro":  [
                      "첫 월드 \u0027휴먼쌤이 누구인가\u0027를 VR로 옮긴 판이에요. 3분쯤 휴먼쌤의 이야기를 따라가며 선택지를 골라요. 헤드셋에서는 손에서 나가는 빛줄기로 가리키고 방아쇠를 당겨 골라요."
                  ],
        "thumb":  "assets/thumbs/world-vr1.jpg",
        "shot":  "assets/shots/world-vr1.jpg",
        "shotAlt":  "월드 1 VR — 안내자와 첫 만남"
    },
    {
        "slug":  "hanok",
        "name":  "하나네 집에 놀러 가요 — 한국어 학습맵",
        "status":  "열림",
        "one":  "한옥 부엌에서 밥상을 차리며 한국어를 배워요",
        "url":  "https://humanssaem-world.pages.dev/hanok/",
        "label":  "하나네 집에 놀러 가기",
        "note":  "휴대폰·PC 브라우저에서 바로 열리고, 메타 퀘스트 3에서는 VR로, 안드로이드 휴대폰에서는 내 방에 띄워 볼 수 있어요.",
        "intro":  [
                      "한국어를 처음 배우는 분을 위한 학습맵이에요. 한옥 부엌에서 물건을 눌러 이름을 듣고, 한복 입은 집주인 하나가 말하는 대로 밥상을 차려요. 상을 다 차리면 안방으로 옮겨 하나와 같이 먹어요. 낱말 10개와 인사말을 배우고, 한 번에 8분쯤 걸려요."
                  ],
        "thumb":  "assets/thumbs/world-hanok.jpg",
        "shot":  "assets/shots/world-hanok.jpg",
        "shotAlt":  "한옥 부엌에서 하나를 만나는 첫 화면",
        "shotNote":  "3D 소품: 국가유산청(Korea Heritage Service) · CC BY 4.0"
    },
    {
        "slug":  "fusion-plaza",
        "name":  "융합 광장",
        "status":  "열림",
        "one":  "학교 교정과 가상 구역이 만나는 광장",
        "url":  "https://humanssaem-world.pages.dev/plaza/",
        "label":  "융합 광장 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열리고, VR 기기에서는 안으로 들어가 걸을 수 있어요.",
        "intro":  [
                      "현실의 학교와 가상 세계가 만나는 광장이에요. 왼쪽은 학교 교정, 오른쪽은 가상 구역이고, 가운데 고리는 두 세계를 잇는 문이에요. 걸어 다니며 둘러보고, 로봇 리니에게 말을 걸어 보세요."
                  ],
        "thumb":  "assets/thumbs/world-fusion-plaza.jpg",
        "shot":  "assets/shots/world-fusion-plaza.jpg",
        "shotAlt":  "융합 광장 — 교정과 가운데 고리"
    },
    {
        "slug":  "science",
        "name":  "WebXR 과학 실험실",
        "status":  "열림",
        "one":  "공기 분자·빛과 그림자·물·태양계·심장과 폐",
        "url":  "",
        "label":  null,
        "note":  "메타 퀘스트 3(손 인식)이나 안드로이드 휴대폰에서는 내 방에 띄워 손으로 실험하고, 휴대폰·PC 화면에서는 눌러서 해 볼 수 있어요. 위 \u0027바로 들어가기\u0027에서 실험실을 골라 주세요.",
        "intro":  [
                      "눈에 안 보이거나 손에 잡히지 않는 과학을 손으로 만져 보는 실험실 다섯 곳이에요. 로봇 리니가 옆에서 함께해요. 실험실마다 5~6분쯤 걸려요."
                  ],
        "thumb":  "assets/thumbs/world-science.jpg",
        "shot":  "",
        "shotAlt":  null,
        "enterLinks":  [
                           {
                               "label":  "공기 분자",
                               "url":  "https://humanssaem-world.pages.dev/air/"
                           },
                           {
                               "label":  "빛과 그림자",
                               "url":  "https://humanssaem-world.pages.dev/light/"
                           },
                           {
                               "label":  "물의 상태 변화",
                               "url":  "https://humanssaem-world.pages.dev/phase/"
                           },
                           {
                               "label":  "손 위의 태양계",
                               "url":  "https://humanssaem-world.pages.dev/solar/"
                           },
                           {
                               "label":  "심장과 폐",
                               "url":  "https://humanssaem-world.pages.dev/body/"
                           }
                       ],
        "shots":  [
                      {
                          "title":  "공기 분자 실험실",
                          "url":  "https://humanssaem-world.pages.dev/air/",
                          "desc":  "내 방 공기를 아주 크게 키워 분자를 손으로 집고, 상자를 눌러 압력을 보고, 데우고, 원자를 붙여 이산화탄소를 만들어 봐요.",
                          "image":  "assets/shots/world-science-air.jpg"
                      },
                      {
                          "title":  "빛과 그림자 실험실",
                          "url":  "https://humanssaem-world.pages.dev/light/",
                          "desc":  "내 방에 실험 탁자와 흰 스크린을 띄워요. 손전등으로 그림자를 만들고, 키우고, 옮기고, 거울로 빛을 꺾어 봐요.",
                          "image":  "assets/shots/world-science-light.jpg"
                      },
                      {
                          "title":  "물의 상태 변화 실험실",
                          "url":  "https://humanssaem-world.pages.dev/phase/",
                          "desc":  "물 분자를 크게 키워, 손으로 얼음을 녹이고 물을 끓이고 다시 물방울로 만들어 봐요.",
                          "image":  "assets/shots/world-science-phase.jpg"
                      },
                      {
                          "title":  "손 위의 태양계",
                          "url":  "https://humanssaem-world.pages.dev/solar/",
                          "desc":  "내 방에 태양계를 띄워요. 행성을 손으로 집어 크기를 견주고, 진짜 거리로 펼치고, 시간을 빨리 돌려 봐요.",
                          "image":  "assets/shots/world-science-solar.jpg"
                      },
                      {
                          "title":  "심장과 폐 탐험실",
                          "url":  "https://humanssaem-world.pages.dev/body/",
                          "desc":  "내 방에 사람 몸 모형을 띄워요. 심장을 꺼내 보고, 숨을 쉬게 하고, 피의 길을 따라가 봐요.",
                          "image":  "assets/shots/world-science-body.jpg"
                      }
                  ]
    },
    {
        "slug":  "robot-classroom",
        "name":  "로봇 학교 교실",
        "status":  "열림",
        "one":  "리니가 휴먼쌤에게 수업을 받는 교실을 걸어 봐요",
        "url":  "https://edu.delightex.com/AGG-QBY",
        "label":  "로봇 학교 교실 들어가기",
        "note":  "PC 브라우저에서 바로 열려요. 휴대폰·태블릿은 Delightex Edu 앱에서 열려요.",
        "intro":  [
                      "로봇 리니가 휴먼쌤에게 수업을 받는 로봇 학교 교실이에요. 칠판에는 「리니야, 학교가자」가 적혀 있어요. 리니를 누르면 인사하고, 바닥을 누르면 그쪽으로 걸어가고, 화면을 끌면 둘러볼 수 있어요. 창밖으로 학교 마당도 보여요. Delightex Edu로 만든 시범판이에요."
                  ],
        "thumb":  "assets/thumbs/world-robot-classroom.jpg",
        "shot":  "assets/shots/world-robot-classroom.jpg",
        "shotAlt":  "로봇 학교 교실 — 칠판 앞의 리니"
    },
    {
        "slug":  "think-island",
        "name":  "생각 놀이섬",
        "status":  "준비 중",
        "one":  "학생들을 위한 섬을 준비하고 있어요",
        "url":  "",
        "label":  null,
        "note":  "아직 만들지 않았어요. 학생들을 위한 공간으로 준비하고 있어요.",
        "intro":  [
                      "학생들이 놀이하며 스스로 생각하는 힘을 키우는 섬을 준비하고 있어요. 문이 열리면 이 자리에서 알려 드릴게요."
                  ],
        "thumb":  "assets/thumbs/world-think-island.jpg",
        "shot":  "",
        "shotAlt":  null
    }
]
    }
  }
};
