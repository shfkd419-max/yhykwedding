/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "최윤환",
    father: "정대홍",
    mother: "최원경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김윤경",
    father: "김광식",
    mother: "이유정",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-02-21",
    time: "15:00",
    venue: "W스퀘어 웨딩홀 3층 더가든홀",
    address: "부산 부산진구 신천대로 252",
    mapLinks: {
      kakao: "https://kko.to/ZwloiltJ5x",
      naver: "https://naver.me/58HFad1L"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "연애의 다음 페이지를 넘어\n결혼이라는 새로운 이야기를 시작하려 합니다.\n\n그 첫 페이지에 소중한 분들을 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "최윤환", bank: "농협은행", number: "121-0385-6044-456" },
      { role: "아버지(정대홍)", bank: "기업은행", number: "510-046321-01-013" },
      { role: "어머니(최원경)", bank: "농협은행", number: "921-12-199152" }
    ],
    bride: [
      { role: "김윤경", bank: "국민은행", number: "5605-0202-169-476" },
      { role: "아버지(김광식)", bank: "농협은행", number: "351-9525-3030-13" },
      { role: "어머니(이유정)", bank: "부산은행", number: "233-12-030150-9" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "최윤환 ♥ 김윤경 결혼합니다",
    description: "2027년 2월 21일, 소중한 분들을 초대합니다."
  }
};
