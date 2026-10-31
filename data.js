/* 휴먼티처닷컴 내용. 카드를 더하거나 고칠 때는 이 파일만 고친다.
   카드 한 장: slug(주소 이름, 영어 소문자) · name · status('열림' | '준비 중') · one(카드 한 줄)
   · url(바로 들어가기 주소, 준비 중이면 '') · note(들어가기 아래 회색 글) · intro(소개 문단 배열)
   · thumb(카드 그림 800x500) · shot(화면 그림, 없으면 '') · links(덧붙일 링크, 없어도 됨)
   · videos(소개 페이지에서 바로 재생할 영상 목록, 없어도 됨) · warn(영상 위 안내 문단 배열, 없어도 됨)
   · worksheet(학생 활동지 PDF 주소, 없어도 됨)
   묶음 카드: children(넣을 카드 slug 목록) · unit(카드 위 '모음 · N곳'의 단위, 기본 '곳') · pick(들어가기 버튼 글, 기본 '들어갈 곳 고르기').
   묶음에 넣는 카드에는 parent(묶음 slug)를 붙인다 — 칸 목록에서 숨고 묶음 페이지에 보인다. */
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
      lead: '휴먼쌤의 글, 책, 워크북, 강의노트, 한국어 영상',
      card: '책과 자료 · 부모백과, 책, 워크북, 강의노트, 한국어 영상',
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
        { slug: 'korean-drama', name: '한국어 상황극 11편', status: '열림',
          one: '편의점·카페·식당·택시에서 쓰는 한국어를 40초 영상으로',
          url: '', note: '휴대폰·PC 브라우저에서 바로 재생돼요. 소리를 켜고 보세요.',
          intro: ['프랑스 한글학교 학생들을 위해 만든 짧은 한국어 상황극이에요. 한 편은 40초쯤이에요.',
                  '바깥 풍경으로 장소를 먼저 보여 주고, 같은 장면을 프랑스어로 본 다음 한국어로 다시 봐요. 한국어 장면에는 자막과 발음, 프랑스어 뜻이 함께 나와요. 이어서 따라 말하기를 세 번 하고, 오늘의 표현으로 정리해요.',
                  '편의점(견본)부터 카페, 식당, 길 묻기, 택시, 옷가게, 시장, 약국, 호텔, 처음 만남, 계산까지 모두 11편이에요.'],
          warn: ['AI로 만든 영상이에요. 사람과 장소는 실제가 아니고, 간판이나 차 유리에 보이는 한글 중에는 AI가 잘못 그린 글자가 있어요.',
                 '대사와 프랑스어 번역은 아직 확인 전이에요.'],
          videos: [
            { no: '00', title: '편의점', ex: '봉투 필요하세요?', tip: '견본', file: 'assets/videos/00-store.mp4', poster: 'assets/videos/posters/00-store.jpg' },
            { no: '01', title: '카페', ex: '아이스 아메리카노 한 잔 주세요', tip: '~ 주세요', file: 'assets/videos/01-cafe.mp4', poster: 'assets/videos/posters/01-cafe.jpg' },
            { no: '02', title: '식당', ex: '몇 분이세요?', tip: '한 명·두 명', file: 'assets/videos/02-restaurant.mp4', poster: 'assets/videos/posters/02-restaurant.jpg' },
            { no: '03', title: '길 묻기', ex: '지하철역이 어디예요?', tip: '~이/가 어디예요?', file: 'assets/videos/03-directions.mp4', poster: 'assets/videos/posters/03-directions.jpg' },
            { no: '04', title: '택시', ex: '명동으로 가 주세요', tip: '~(으)로 가 주세요', file: 'assets/videos/04-taxi.mp4', poster: 'assets/videos/posters/04-taxi.jpg' },
            { no: '05', title: '옷가게', ex: '이거 입어 봐도 돼요?', tip: '~아/어 봐도 돼요?', file: 'assets/videos/05-fitting.mp4', poster: 'assets/videos/posters/05-fitting.jpg' },
            { no: '06', title: '시장', ex: '이거 얼마예요?', tip: '깎아 주세요', file: 'assets/videos/06-market.mp4', poster: 'assets/videos/posters/06-market.jpg' },
            { no: '07', title: '약국', ex: '머리가 아파요', tip: '~이/가 아파요', file: 'assets/videos/07-pharmacy.mp4', poster: 'assets/videos/posters/07-pharmacy.jpg' },
            { no: '08', title: '호텔', ex: '체크인하려고요', tip: '~(으)려고요', file: 'assets/videos/08-hotel.mp4', poster: 'assets/videos/posters/08-hotel.jpg' },
            { no: '09', title: '처음 만남', ex: '프랑스에서 왔어요', tip: '~에서 왔어요', file: 'assets/videos/09-greeting.mp4', poster: 'assets/videos/posters/09-greeting.jpg' },
            { no: '10', title: '계산', ex: '계산해 주세요', tip: '~(으)로 할게요', file: 'assets/videos/10-bill.mp4', poster: 'assets/videos/posters/10-bill.jpg' }
          ],
          thumb: 'assets/thumbs/cloud-korean-drama.jpg', shot: '' },
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
        /* 미니앱 — 묶음 카드 하나에 작은 앱 다섯(children). 다섯 카드는 parent: 'mini-apps'로 앱 목록에서 숨는다. */
        { slug: 'mini-apps', name: '미니앱', status: '열림',
          one: '설치 없이 바로 여는 작은 앱 네 개',
          url: '', label: null, unit: '개', pick: '앱 고르기',
          note: '네 앱 모두 휴대폰·PC 브라우저에서 열려요. 아래에서 앱을 골라요.',
          intro: ['휴먼쌤이 만든 작은 웹 앱 모음이에요. 초등 5~6학년이 AI와 함께 나만의 게임을 만드는 게임 메이커, 해외 학습자용 한국어 실력 테스트, 그리고 한글학교 수업에서 바로 쓰는 역할극 "할머니 댁에 도착했어요"와 게임 "서울 하루 여행"이 들어 있어요.'],
          thumb: 'assets/thumbs/app-mini-apps.jpg', shot: '',
          children: ['game-maker', 'korean-test', 'grandma-visit', 'seoul-trip'] },
        { slug: 'game-maker', name: '게임 메이커', status: '열림', parent: 'mini-apps',
          one: '질문에 답하면 AI에게 부탁할 글과 카드가 나와요',
          url: 'https://humanssaem-apps.pages.dev/apps/game-maker/',
          label: '게임 메이커 열기', note: '설치 없이 휴대폰·PC 브라우저에서 열려요.',
          intro: ['초등 5~6학년이 AI와 함께 나만의 게임을 만드는 앱이에요. 질문 11개에 답하면 내가 만들고 싶은 게임을 찾아서, AI에게 부탁하는 글로 바꿔 줘요. 마지막에는 결과를 카드 이미지 한 장으로 저장해요. 시작 전에 AI 사용 약속 네 가지를 함께 읽어요.'],
          thumb: 'assets/thumbs/app-gamemaker.jpg', shot: 'assets/thumbs/app-gamemaker.jpg' },
        { slug: 'korean-test', name: '한국어 실력 테스트', status: '열림', parent: 'mini-apps',
          one: '5단계, 5~10분으로 한국어 실력을 가볍게 확인해요',
          url: 'https://humanssaem-apps.pages.dev/apps/korean-test/',
          label: '한국어 실력 테스트 열기', note: '설치 없이 휴대폰·PC 브라우저에서 열려요.',
          intro: ['한국어 실력을 가볍게 확인해 보는 테스트예요. 5단계, 최대 20문제로 5~10분쯤 걸려요. 안내는 영어나 프랑스어로 골라 볼 수 있고, 이름이나 개인 정보는 묻지 않아요.'],
          thumb: 'assets/thumbs/app-koreantest.jpg', shot: 'assets/thumbs/app-koreantest.jpg' },
        /* 한글학교 수업콘텐츠 샘플 3종 — 묶음 카드 하나에 세 콘텐츠(children). 각 콘텐츠는 콘텐츠 주소 + 활동지 PDF(worksheet). */
        { slug: 'lesson-samples', name: '한글학교 수업콘텐츠 샘플 3종', status: '열림',
          one: '카페에서 주문하기 — 폰으로 하는 콘텐츠 셋과 활동지 PDF',
          url: '', label: null,
          note: '세 콘텐츠는 휴대폰·PC 브라우저에서 열리고, 활동지는 각 콘텐츠 페이지에서 PDF로 내려받아 인쇄해요.',
          intro: ['프랑스 한글학교 선생님들을 위한 학생참여 수업콘텐츠 샘플이에요. 주제는 카페에서 주문하기 하나로, 간단·중간·복잡 세 벌이 있어요. 한 벌은 폰으로 하는 콘텐츠와 그에 맞는 활동지(PDF)로 되어 있고, 모든 자료 안에 하·중·상이 있어 수준이 다른 학생이 각자 골라요. 어린이와 어른이 섞인 반을 생각하고 만들었어요.'],
          thumb: 'assets/thumbs/app-lesson-samples.jpg', shot: '',
          children: ['lesson-card', 'lesson-quiz', 'lesson-roleplay'] },
        { slug: 'lesson-card', name: '카페 메뉴 카드 — 간단', status: '열림',
          one: '카드 8장을 뒤집어 낱말을 듣고, 활동지로 친구를 인터뷰해요',
          url: 'https://humanssaem-lesson-samples.pages.dev/1-card/',
          label: '카페 메뉴 카드 열기', note: '휴대폰·PC 브라우저에서 열려요. 활동지는 아래에서 PDF로 내려받아요.',
          intro: ['앞 20분 콘텐츠 + 인터뷰 10분. 수준(하·중·상)을 고르면 카드 8장이 나오고, 카드를 누르면 뒤집혀요. 하는 프랑스어 뜻, 중은 "○○ 주세요" 문장, 상은 두 줄 대화가 뒷면에 있어요. "읽어 주기"를 누르면 한국어를 천천히 읽어 줘요.', '활동지 "친구에게 물어봐요"(A4 1쪽, 학생용): 낱말 8개 쓰기, 하·중·상 질문, 친구 4명 인터뷰 표, 친구 소개 문장.'],
          thumb: 'assets/thumbs/app-lesson-card.jpg', shot: '', worksheet: 'assets/worksheets/lesson-card-1p.pdf', sheetNote: 'A4 1쪽 · PDF', parent: 'lesson-samples' },
        { slug: 'lesson-quiz', name: '카페 주문 퀴즈 — 중간', status: '열림',
          one: '수준을 골라 10문제를 풀고, 수준별 활동지로 써 봐요',
          url: 'https://humanssaem-lesson-samples.pages.dev/2-quiz/',
          label: '카페 주문 퀴즈 열기', note: '휴대폰·PC 브라우저에서 열려요. 활동지는 아래에서 PDF로 내려받아요.',
          intro: ['뒤 25분, 각자 폰으로. 하는 듣고 고르기, 중은 문장 빈칸, 상은 순서 맞추기와 대화 듣기로, 수준마다 10문제예요. 한 문제씩 바로 채점하고, 끝나면 점수와 "틀린 것만 다시"가 나와요.', '활동지 "카페 주문 활동지"(A4 1쪽, 학생용): 듣고 쓰기, 빈칸 채우기, 순서 바로잡기, 짝과 대화 쓰기 순서로 점점 어려워져요.'],
          thumb: 'assets/thumbs/app-lesson-quiz.jpg', shot: '', worksheet: 'assets/worksheets/lesson-quiz-v3.pdf', sheetNote: 'A4 1쪽 · PDF', parent: 'lesson-samples' },
        { slug: 'lesson-roleplay', name: '카페 역할극 — 복잡', status: '열림',
          one: '대화를 듣고, 진행판을 보며 짝과 손님·점원 역할극을 해요',
          url: 'https://humanssaem-lesson-samples.pages.dev/3-roleplay/',
          label: '카페 역할극 열기', note: '휴대폰·PC 브라우저에서 열려요. 활동지는 아래에서 PDF로 내려받아요.',
          intro: ['45분 한 차시. "듣기"에서 하·중·상 대화를 말풍선으로 듣고 따라 말하고, "역할극 진행판"에서 짝과 역할을 정해 번호 카드 10장을 따라 번갈아 말해요(말했으면 "했어요"). "주문 만들기"에서 메뉴·수량·온도·포장을 골라 주문 문장을 만들고 점원 답과 값을 들어요.', '활동지 "카페 역할극 활동지"(A4 1쪽, 학생용): 메뉴판, 손님 주문 받아 적기, 역할극 체크, 오늘 말한 문장 두 개.'],
          thumb: 'assets/thumbs/app-lesson-roleplay.jpg', shot: '', worksheet: 'assets/worksheets/lesson-roleplay-1p.pdf', sheetNote: 'A4 1쪽 · PDF', parent: 'lesson-samples' },
        { slug: 'grandma-visit', name: '할머니 댁에 도착했어요', status: '열림', parent: 'mini-apps',
          one: '할머니와 수아의 대화로 듣기·표현·빈칸·짝 활동 4단계를 해요',
          url: 'https://humanssaem-apps.pages.dev/apps/grandma-visit/',
          label: '할머니 댁에 도착했어요 열기', note: '휴대폰·PC 브라우저에서 열려요. 소리는 기기에 들어 있는 한국어 음성으로 읽으니, 수업 전에 앱 위쪽 \'소리 확인\'을 한 번 눌러 보세요.',
          intro: ['여름방학에 한국에 온 수아가 할머니 댁에 막 도착한 장면으로 하는 한국어 역할극이에요. 1단계 대화 듣기(프랑스어 뜻은 켜고 끌 수 있어요), 2단계 핵심 표현 5개, 3단계 빈칸 채우기, 4단계 짝 활동으로 이어져요.', '수준은 초급(프랑스어 켜짐 · 빈칸 3개), 중급(빈칸 5개), 고급(빈칸 8개 · 직접 쓰기) 중에 골라요. 짝 활동에서는 역할을 정해 2분 동안 말하고 역할을 바꾼 뒤, 불고기·할머니·비행기 같은 낱말을 바꿔 내 이야기로 다시 말해요. 주소 끝에 #basic, #mid, #adv를 붙이면 그 수준으로 바로 열려요.'],
          thumb: 'assets/thumbs/app-grandma-visit.jpg', shot: '' },
        { slug: 'seoul-trip', name: '서울 하루 여행', status: '열림', parent: 'mini-apps',
          one: '갈림길마다 갈 곳을 고르고 한국어 미션을 풀어 점수와 뱃지를 모아요',
          url: 'https://humanssaem-apps.pages.dev/apps/seoul-trip/',
          label: '서울 하루 여행 열기', note: '휴대폰·PC 브라우저에서 열려요. 교실에서는 프로젝터로 띄우고 \'반 전체 투표\'로 함께 해요.',
          intro: ['아침·점심·오후·저녁 네 번의 갈림길에서 경복궁·광장시장·한강·찜질방처럼 서울에서 갈 곳을 고르고, 고른 곳마다 한국어 미션(알맞은 말 고르기, 낱말 순서 맞추기)을 풀어요. 한 번에 맞히면 10점, 다시 맞히면 5점이고, 주문 달인·길찾기 달인 같은 뱃지를 모아요. 하루가 끝나면 고른 길로 "나의 서울 여행기"를 써서 소리 내어 읽어요.', '수준은 초급(프랑스어 힌트가 늘 보여요), 중급(힌트 버튼), 고급(보기 4개 · 긴 문장 · 힌트 없음) 중에 골라요. 진행은 혼자 하기와 반 전체 투표(손 든 수를 세어 출발) 중에 골라요.'],
          thumb: 'assets/thumbs/app-seoul-trip.jpg', shot: '' }
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
                      "휴먼쌤이 어떤 선생님인지 이야기로 만나는 첫 월드예요. 3분쯤 선택지를 고르며 휴먼쌤의 어제·오늘·내일을 따라가요. 이야기가 끝나면 로봇 리니를 따라 광장으로 나가 직접 걸어 다니고, 섬 출발점에서 가상융합교육 섬·AI타운·프랑스 한글학교 섬으로 떠날 수 있어요. 두 번째 방문부터는 \u0027광장으로 바로 가기\u0027로 곧장 들어가요."
                  ],
        "thumb":  "assets/thumbs/world-plaza.jpg",
        "shot":  "",
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
        "shot":  "",
        "shotAlt":  "가상융합교육 캠퍼스 — 융합 광장"
    },
    {
        "slug":  "ai",
        "name":  "AI타운",
        "status":  "열림",
        "one":  "AI가 일하는 방식대로 사는 마을을 돌아요",
        "url":  "https://humanssaem-world.pages.dev/ai/",
        "label":  "AI타운 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열려요.",
        "intro":  [
                      "사람처럼 말하는 AI가 아니라, AI가 실제로 일하는 방식대로 사는 마을이에요. 마을 주민의 부탁 하나를 따라가고, 마을·도서관·패턴·시장·꿈 공방·호수 여섯 구역을 돌며 도장을 모아요. 도장을 다 모으면 \u0027명예 주민증\u0027을 받아요."
                  ],
        "thumb":  "assets/thumbs/world-ai.jpg",
        "shot":  "",
        "shotAlt":  "AI타운 — 깨어나는 마을"
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
                      "프랑스에 있는 한글학교 17곳을 한 지도에 모은 온라인 로비예요. 지도에서 학교를 찾아 교실에 들어가면 교장 선생님과 한국어로 짧게 이야기를 나누고, 책·사진첩·TV를 둘러볼 수 있어요. 같은 시간에 들어온 사람들끼리 서로 모습이 보이고, 정해진 한국어 표현으로 말풍선 인사를 나눠요."
                  ],
        "thumb":  "assets/thumbs/world-hangul-france.jpg",
        "shot":  "",
        "shotAlt":  "프랑스 한글학교 로비 — 만남의 광장"
    },
    {
        "slug":  "hangul-europe",
        "name":  "유럽 한글학교 메타버스",
        "status":  "열림",
        "one":  "프랑스·독일·영국 한글학교 70곳의 온라인 로비",
        "url":  "https://humanssaem-hangul-france.pages.dev/eu/",
        "label":  "유럽 한글학교 메타버스 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열려요. 유럽 지도에서 나라를 골라 들어가요.",
        "intro":  [
                      "유럽의 한글학교를 나라마다 한 지도에 모은 온라인 로비예요. 유럽 지도에서 프랑스(17곳)·독일(32곳)·영국(21곳) 중 한 나라를 고르면 그 나라 로비로 들어가요. 지도 위를 걸어 학교를 찾고, 교실에 들어가 교장 선생님과 한국어로 짧게 이야기를 나누고 책·사진첩·TV를 둘러볼 수 있어요.",
                      "같은 시간에 들어온 사람들끼리 서로 모습이 보여요. '말하기'를 누르면 정해진 한국어 표현 20개 가운데 하나를 골라 말풍선으로 인사를 나눠요. 표현 아래에는 뜻이 그 나라 말로 작게 나와요."
                  ],
        "thumb":  "assets/thumbs/world-hangul-europe.jpg",
        "shot":  "",
        "shotAlt":  "유럽 한글학교 메타버스 — 유럽 입구"
    },
    {
        "slug":  "xrea",
        "name":  "엑스리아(XREA) 월드",
        "status":  "열림",
        "one":  "한국가상융합교육협회의 어제·오늘·내일을 로봇 안내와 함께 둘러봐요",
        "url":  "https://human-teacher.com/xrea/",
        "label":  "엑스리아 월드 들어가기",
        "note":  "휴대폰·PC 브라우저에서 열려요. 약 3분 걸려요.",
        "intro":  [
                      "(사)한국가상융합교육협회, 엑스리아(XREA)를 소개하는 3D 월드예요. 첫 월드 '휴먼쌤이 누구인가'와 같은 꼴로, 안내 로봇을 따라 선택지를 고르며 교실에서 시작한 작은 연구회가 어떻게 협회가 됐는지 어제·오늘·내일 세 조각을 모아요.",
                      "세 조각이 모이면 문이 열려요. 문을 지나 밖으로 나가면 '누구의 월드로 들어갈까요?'에서 다음 월드를 골라 이어서 갈 수 있어요. 안내하는 인물은 모두 휴머노이드 로봇이에요."
                  ],
        "thumb":  "assets/thumbs/world-xrea.jpg",
        "shot":  "",
        "shotAlt":  "엑스리아 월드 — 시작 화면"
    },
    { "slug": "xr-lab", "name": "휴먼쌤 XR실험실", "status": "열림",
      "one": "VR·3D로 만든 월드 셋을 한곳에",
      "url": "", "label": null,
      "note": "셋 모두 휴대폰·PC에서 열려요. 월드 1 VR과 융합 광장은 VR 기기에서 안으로 들어갈 수 있고, 로봇 학교 교실은 PC 브라우저나 Delightex Edu 앱에서 열려요.",
      "intro": ["휴먼쌤이 VR과 3D로 만든 월드를 모은 실험실이에요. 첫 월드 '휴먼쌤이 누구인가'를 VR로 옮긴 판, 학교 교정과 가상 구역이 만나는 융합 광장, 로봇 리니가 휴먼쌤에게 수업을 받는 로봇 학교 교실이 들어 있어요."],
      "thumb": "assets/thumbs/world-xr-lab.jpg", "shot": "",
      "children": ["vr1", "fusion-plaza", "robot-classroom"] },
    {
        "slug":  "vr1",
        "parent":  "xr-lab",
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
        "shot":  "",
        "shotAlt":  "월드 1 VR — 안내자와 첫 만남"
    },
    { "slug": "korean-maps", "name": "한국어 학습맵 5종", "status": "열림",
      "one": "하나와 함께 다섯 곳을 다니며 배우는 초급 한국어",
      "intro": ["프랑스 한글학교 초급 학습자를 위한 3D 학습맵이에요. 집주인·점원·역무원·약사로 나오는 하나와 함께 장소를 다니며, 그 자리에서 쓰는 말과 낱말 10개씩을 배워요. 한 곳에 8~12분쯤 걸려요.", "휴대폰·PC 브라우저에서 바로 열리고, 안드로이드 휴대폰·퀘스트 3에서는 내 방에 띄워 볼 수 있어요. 학습맵마다 학생용 활동지(A4 1쪽)가 있어요."],
      "note": "아래에서 장소를 골라 들어가요. 처음이면 '하나네 집에 놀러 가요'부터 해 보세요.",
      "thumb": "assets/thumbs/world-korean-maps.jpg", "shot": "",
      "children": ["hanok", "store", "bunsik", "subway", "pharmacy"] },
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
        "shot":  "",
        "shotAlt":  "한옥 부엌에서 하나를 만나는 첫 화면",
        "shotNote":  "3D 소품: 국가유산청(Korea Heritage Service) · CC BY 4.0",
        "worksheet":  "assets/worksheets/hanok.pdf",
        "parent":  "korean-maps"
    },
    { "slug": "store", "name": "편의점에 가요 — 한국어 학습맵", "status": "열림", "one": "편의점에서 물건을 찾아 담고 계산하며 한국어를 배워요",
      "url": "https://humanssaem-world.pages.dev/store/", "label": "편의점에 가기",
      "note": "휴대폰·PC 화면으로 보거나, 안드로이드 휴대폰·퀘스트 3에서 내 방에 띄워 볼 수 있어요.",
      "intro": ["한국어를 처음 배우는 분을 위한 학습맵 2판이에요. 동네 편의점에서 물건 이름과 값을 듣고, 점원 하나에게 \"어디 있어요?\" 물어 바구니에 담은 뒤 계산까지 해 봐요. 낱말 10개와 천 원 단위 값을 배우고, 약 10분 걸려요."],
      "shotNote": "점원 하나는 Tripo로 만들었어요 · 하나 목소리는 AI 음성 합성(Qwen3-TTS) · 가게와 상품은 코드로 그린 가상 가게(실제 상표 없음)",
      "thumb": "assets/thumbs/world-store-scene.jpg", "shot": "", "shotAlt": "편의점에 가요 — 가게 안", "worksheet": "assets/worksheets/store.pdf", "parent": "korean-maps" },
    { "slug": "bunsik", "name": "분식집에 가요 — 한국어 학습맵", "status": "열림", "one": "분식집에서 떡볶이·김밥을 주문하며 한국어를 배워요",
      "url": "https://humanssaem-world.pages.dev/bunsik/", "label": "분식집에 가기",
      "note": "휴대폰·PC 화면으로 보거나, 안드로이드 휴대폰·퀘스트 3에서 내 방에 띄워 볼 수 있어요.",
      "intro": ["한국어 학습맵 3판이에요. 분식집에서 떡볶이·김밥·라면 같은 메뉴 이름과 값을 듣고, 점원 하나에게 \"떡볶이 하나 주세요\" 하고 주문해서 먹어 봐요. 맵게·안 맵게, 여기서 먹을게요·포장해 주세요, 얼마예요?도 함께 배워요. 낱말 10개, 약 10분 걸려요."],
      "shotNote": "점원 하나는 Tripo로 만들었어요 · 하나 목소리는 AI 음성 합성(Qwen3-TTS) · 가게와 음식은 코드로 그린 가상 가게, 돈은 연습용 그림",
      "thumb": "assets/thumbs/world-bunsik-scene.jpg", "shot": "", "shotAlt": "분식집에 가요 — 가게 안", "worksheet": "assets/worksheets/bunsik.pdf", "parent": "korean-maps" },
    { "slug": "subway", "name": "지하철을 타요 — 한국어 학습맵", "status": "열림", "one": "교통카드를 충전하고 지하철을 갈아타며 한국어를 배워요",
      "url": "https://humanssaem-world.pages.dev/subway/", "label": "지하철 타러 가기",
      "note": "휴대폰·PC 화면으로 보거나, 안드로이드 휴대폰·퀘스트 3에서 내 방에 띄워 볼 수 있어요.",
      "intro": ["한국어 학습맵 4판이에요. 교통카드를 충전하고, 역무원 하나에게 \"바다역 어떻게 가요?\" 물어 1호선에서 2호선으로 갈아탄 뒤, 바다역 출구까지 가 봐요. 낱말 10개, 약 12분 걸려요."],
      "shotNote": "역무원 하나는 Tripo로 만들었어요 · 하나 목소리는 AI 음성 합성(Qwen3-TTS) · 역·노선도·교통카드는 코드로 그린 가상(실제 회사·로고 없음)",
      "thumb": "assets/thumbs/world-subway-scene.jpg", "shot": "", "shotAlt": "지하철을 타요 — 역 안", "worksheet": "assets/worksheets/subway.pdf", "parent": "korean-maps" },
    { "slug": "pharmacy", "name": "약국에 가요 — 한국어 학습맵", "status": "열림", "one": "약국에서 아픈 곳을 말하고 약을 받으며 한국어를 배워요",
      "url": "https://humanssaem-world.pages.dev/pharmacy/", "label": "약국에 가기",
      "note": "휴대폰·PC 화면으로 보거나, 안드로이드 휴대폰·퀘스트 3에서 내 방에 띄워 볼 수 있어요.",
      "intro": ["한국어 학습맵 5판이에요. 동네 약국에서 몸 이름(머리·눈·코·이·목·배·손)을 듣고, 약사 하나에게 \"머리가 아파요\"처럼 어디가 아픈지 말한 뒤 \"하루에 세 번 드세요\"를 듣고 약을 받아 봐요. 낱말 10개, 약 10분 걸려요.", "한국어 연습용이라 의학 정보가 아니에요. 실제로 아플 때는 약사나 의사에게 물어보세요."],
      "shotNote": "약사 하나는 Tripo로 만들었어요 · 하나 목소리는 AI 음성 합성(Qwen3-TTS) · 약국과 약 상자는 코드로 그린 연습용 가상 상품(실제 약 아님)",
      "thumb": "assets/thumbs/world-pharmacy-scene.jpg", "shot": "", "shotAlt": "약국에 가요 — 약국 안", "worksheet": "assets/worksheets/pharmacy.pdf", "parent": "korean-maps" },
    {
        "slug":  "fusion-plaza",
        "parent":  "xr-lab",
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
        "shot":  "",
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
        "parent":  "xr-lab",
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

/* 소개 페이지 맨 위에 작은 표시로 보이는 핵심 정보. slug: [표시, …]. 소개 글에 있는 사실만 쓴다. */
window.SITE.tags = {
  'parentbook': ['네이버 프리미엄 콘텐츠', '질문 → 결론 → 근거 → 제안', '당분간 무료'],
  'parentbook-web': ['한 화면에 질문·결론', '휴먼쌤 ACT', '설치 없음'],
  'korean-drama': ['11편', '한 편 40초쯤', '프랑스어 자막', '따라 말하기', 'AI로 만든 영상'],
  'parent-note': ['인스타그램', '이미지 카드', '짧은 영상'],
  'philosophy': ['스레드', '짧은 글'],
  'book': ['개론서', '종이책', '전자책'],
  'workbook': ['6~7세', '어린이 기초', '어린이 심화', '청소년'],
  'lecture': ['네이버 블로그', '연재'],
  'hangeul-oneshot': ['한글학교', '상·중·하 레벨', 'QR로 열기', '한국어·프랑스어'],
  'game-maker': ['초등 5~6학년', '질문 11개', 'AI와 함께', '카드 저장'],
  'korean-test': ['5단계', '최대 20문제', '5~10분', '영어·프랑스어 안내'],
  'lesson-samples': ['한글학교', '카페에서 주문하기', '간단·중간·복잡', '하·중·상', '활동지 PDF'],
  'lesson-card': ['간단', '앞 20분 + 인터뷰 10분', '카드 8장', '활동지 1쪽'],
  'lesson-quiz': ['중간', '뒤 25분', '수준마다 10문제', '활동지 1쪽'],
  'lesson-roleplay': ['복잡', '45분 한 차시', '듣기·진행판·주문 만들기', '활동지 1쪽'],
  'mini-apps': ['앱 다섯', '설치 없음', '휴대폰·PC'],
  'grandma-visit': ['한글학교', '4단계', '초급·중급·고급', '짝 활동', '프랑스어 뜻'],
  'seoul-trip': ['한글학교', '갈림길 넷', '초급·중급·고급', '반 전체 투표', '여행기 쓰기'],
  'plaza': ['약 3분 이야기', '광장 걷기', '섬 셋으로 출발'],
  'xr': ['교사 연수', '관 여섯 곳', '수료증'],
  'ai': ['여섯 구역', '도장 모으기', '명예 주민증'],
  'hangul-france': ['한글학교 17곳', '교실 둘러보기', '함께 접속', '말풍선 인사'],
  'hangul-europe': ['세 나라 70곳', '유럽 지도에서 고르기', '함께 접속', '말풍선 인사'],
  'xrea': ['약 3분', '로봇 안내', '어제·오늘·내일 세 조각', '문 너머 월드 고르기'],
  'xr-lab': ['월드 셋', 'VR·3D', '휴대폰·PC·VR'],
  'vr1': ['약 3분', 'VR', '메타 퀘스트 3'],
  'korean-maps': ['한국어 초급', '학습맵 5곳', '낱말 10개씩', '8~12분', 'VR·AR', '활동지 PDF'],
  'hanok': ['한국어 처음', '낱말 10개', '약 8분', 'VR·AR', '활동지 PDF'],
  'store': ['한국어 초급', '낱말 10개', '약 10분', 'VR·AR', '활동지 PDF'],
  'bunsik': ['한국어 초급', '낱말 10개', '약 10분', 'VR·AR', '활동지 PDF'],
  'subway': ['한국어 초급', '낱말 10개', '약 12분', 'VR·AR', '활동지 PDF'],
  'pharmacy': ['한국어 초급', '낱말 10개', '약 10분', 'VR·AR', '활동지 PDF', '연습용 · 의학 정보 아님'],
  'fusion-plaza': ['학교 교정', '가상 구역', 'VR'],
  'science': ['실험실 다섯', '5~6분씩', '휴대폰·PC·퀘스트'],
  'robot-classroom': ['Delightex Edu', '시범판', 'PC 브라우저'],
  'think-island': ['학생용', '준비 중']
};
