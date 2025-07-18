# 📘 JavaScript TIL

> 문법 요약, 주요 개념, 실습 예제를 함께 정리합니다.

# 2025.07.09 - DOM Event

- `querySelector` 사용법
- `addEventListener` 사용법  
  ↳ 여러 콜백 등록 가능, 옵션 설정 가능 (`{ once: true }` 등)

# 2025.07.10 - DOM Event (2)

- **키보드 이벤트**
- **폼 이벤트와 `preventDefault`**  
  ↳ 기본 동작(페이지 이동 등)을 막기 위해 사용  
  ↳ 예: 우편번호 찾기 폼, 검색창 등

# 2025.07.11 - DOM Event (3)

- **입력과 변경 이벤트**
  ↳ 변경 이벤트는 입력을 blur out (떠날 때)만 작동

- **이벤트 버블링**
  ↳ 이벤트는 끝까지 버블링되고, 이벤트나 이벤트 오브젝트를 사용해서 멈출 수 있다. (`stopPropagation`)

- **이벤트 위임**
  ↳ 부모 요소에 이벤트 수신기를 추가
  이벤트 수신기가 추가된 시점에 페이지에 없었던 요소를 다루어야 하는 상황에서 편리
  ↳ 클릭 수신기 하나를 앱 전체의 바디 요소에 붙이는 셈
  ↳ 모든 경우에 개별 수신기를 대신하여 e.target 확인 가능
