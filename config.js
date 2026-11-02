// 연수용 체험 사이트 설정 — 이 사이트는 처음부터 "연습용"으로만 동작합니다.
// 실제 학교 운영 데이터와는 연결되어 있지 않고, 들어오는 분마다 자기 체험 방을 만들어 씁니다.
window.SCHOOL_CONFIG = {
  schoolName: "체험학교",
  schoolFullName: "학교 통합 시간 관리 체험",
  domain: "",
  showCalendarTab: false,
  logoUrl: "",
  sandbox: true,           // 연습용 (방 고르기 → 초기 자료 자동 생성)
  demoOnly: true,          // 실제 운영 화면이 없는 체험 전용 사이트
  demoNote: "연수용 체험 사이트입니다. 방을 만들면 24학급, 전담 5명, 외부강의, 보결, 개별지도가 들어간 상태로 시작합니다. 관리자 암호와 개별지도 비밀번호는 1234 입니다.",
  firebase: {
    apiKey: "AIzaSyDeV51pP4BQqxReIfBmXPEST9zeok5aAOs",
    authDomain: "school-calendar-6789a.firebaseapp.com",
    projectId: "school-calendar-6789a",
    storageBucket: "school-calendar-6789a.firebasestorage.app",
    messagingSenderId: "697249862283",
    appId: "1:697249862283:web:4b75b2deb2693d771b7a8e"
  },
  timetableAppId: "demo-timetable",     // 체험 방들은 demo-timetable-<방코드> 공간에 저장
  calendarAppId: "demo-calendar"
};
