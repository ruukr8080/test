---
title : Routes
---

## Routes
- Next.js는 폴더로 라우팅함. 폴더 만들면 그게 주소가 되는 식.
  - 특별한 파일들이 있음:
    - layout.js: 여러 페이지에서 공통으로 쓰는 UI
    - page.js: 실제로 보여줄 페이지
    - loading.js: 로딩중일 때 출력
    - error.js: 에러났을 때 출력

---

### Pages
route의 UI다. 

  page.js 파일을 만들면 그 폴더의 라우트가 접근 가능해진다.

### Layouts and Templates

- layout : 여러 페이지에서 공유하는 UI. 상태 유지 하고 리렌더 안함.(비동기식)
- Template: Layout이랑 비슷한데 매번 리렌더함. 애니메이션 같은거 넣을 때 쓴다고 함.

### Linking and Navigating
Next.js에선 `<a>`태그 대신 `<Link>` 컴포넌트를 쓴다.


  클라이언트 사이드에서 처리되기 때문에 태그보다 빠르다.
