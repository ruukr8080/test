---
title: Github Actions- Keyword 정리
---
- #SDLC (software development life cycle)
	- 소프트웨어를 계획, 개발, 테스트 및 배포하는 전체 과정
		- `계획 - 분석 - 설계 - 구현 - 테스트 - 배포 - 유지보수`
---


- #CI/CD 와 #무중단배포
	- 마틴파울러와 매튜 포멜이 2000년 9월에 작성한 에세이를 통해 처음 대중에 알려짐.
	- 프로젝트를 안정적으로 배포,관리 하기 위한 기술. 
			_서버가 한순간도 중단되지 않고 빌드-배포 된다면 이게 무중단 배포이다.
			이게 안된다면 웹서비스에 접속한 고객에게 중단된 화면을 보여주게됨. 
			이는 마케팅관점에서 고객경험 실패라고 할 수 있음.
----

- #pipeline 
	- 소프트웨어 개발에서 코드가 최종 배포될 때까지 거치는 일련의 **자동화된** 프로세스
```plaintext
 코드 작성 → 빌드 → 테스트 → 배포
   |         |      |       |
 개발자    컴파일  품질검증  서버반영
```
- 
	- Github Actions의 pipeline
```text
[개발자] → [GitHub] → [GitHub Actions] → [AWS/서버]
   │          │            │                │
코드작성 →  코드저장  →  <자동화된 과정>   → 서비스 배포
```
---

- #Action-market-place

	깃헙 Actions 탭에 actions 이용자들이 만들어둔 다양한 액션들이 프로젝트 목적에 따른 카테고리 별로 정리되어 있다. 사용자는 입맛에 맞는 action을 찾아 호출만 하면 해당 action을 이용할 수 있다. 일정 기준이 있지만 기본적으로는 무료다.
---

- #Workflow-file 
	작업을 수행하는 데 필요한 일련의 이벤트를 사용규칙에 맞게 작성한것.
	- 사용 규칙
		- YAML 형식에 맞춰 작성해야한다.
		- .github/workflows 디렉토리에 저장돼야한다.
	- 동작 --기본적인 CI(continuous integration)패턴.--
		- workflow-file엔 기본적으로 Job이 하나 이상 존재하고, 각 job은 병렬적으로 실행된다.
		- 각 job은 `Step`으로 구성돼있고, 이는 `Runner`가 각 step마다 수행할 동작이며 절차다. 각 step마다 `Shell 명령어`로 입력한다. `runner`는 그 shell명령어를 수행한다. 
---



- #Event
	- 시스템이나 프로그램 실행 중에 발생하는 동작이나 사건
	 여기서 말하는 Event는 workflow를 실행시키는 특정 트리거임.
 
```yaml
# workflowfile의 주요 event 예시
on:
  push:              # 코드가 push될 때
    branches: [main]
  pull_request:      # PR이 생성될 때
    branches: [main]
  schedule:          # 정해진 시간에
    - cron: '0 0 * * *'
  workflow_dispatch: # 수동으로 실행할 때		
```
	- event는 workflow의 실행 조건을 정의할 수 있다.
		- repository에서 무언가를 수행한 사용자나 프로세스 -> 보통 `push`나 `pullrequest`임
		- 미리 정해 둔 외부 trigger의 발동 -> 서버에서 발생하는 임의의 event
		- 특정 시간 혹은 간격마다 workflow를 실행하게 정해 둔 스케줄 
		- 발동 조건이 충족 안됐는데도 사용자가 직접 workflow를 실행한 경우
---

 - #on 
	- trigger를 지정할 때  앞서 선언하는 키워드이다. workflow의 실행 유형이 여러가지 있으므로 on 식별자를 통해 유형을 구분,설정한다. 변수 선언할 때 붙이는 타입과 비슷하다.
	 
- ✏️기본형. push를 trigger로 지정하겠다.
	`on: push` 
	
- ✏️복수형.(List type) 
	`on: [push, pull_request]` 
	 
- ✏️특정형.(특정 브랜치,태그,파일 경로 등)를 trigger로 지정
```textplain
	on:
	  push:
	    branchs:
	     -main
	     -'rel/v*'
	    tags:
	     - 1.*
	     - beta
	    path:
	     - '**.ts'
```
	
- ✏️스케줄형.( cron 문법 ) cron은 특정 시간마다 지정한 스크립트를 실행
```textplain
	on:
	 scheduled:
	  - cron: '30 5,15 * * *'
	
	# @interval구문인 @daily, @hourly 등의 구문은 지원 안된다 함.
```
	
- ✏️특정 수동 trigger형. 
	`on: [workflow-dispatch, repository-dispatch]`
	 
- ✏️다른 workflow에서(재사용 이벤트_reuse-event) 호출한 workflow
	`on: workflow_call`
	
- ✏️github에서의 일상적인 활동에 반응
	- ex) Issue에 댓글작성됨을 trigger로 지정.
		`on: issue_comment` 
---

- #workflow_dispatch
	- 트리거 유형의 인스턴스이다.
	- workflow실행을 수동으로 시작하게 해주는 기능을 제공한다.
	- repository에서 Action 탭에 Run Workflow버튼을 누르면 workflow를 수동 실행 시킬 수 있음.
	
		프로토타이핑이나 디버깅 과정에서 이 기능을 사용하라고 만들어져 있는 것 같다.

---
- #Steps
	 github action의 최소 실행 단위이다.
	 아래의 요소들로 구성돼 있다.
	- #uses
	 '사전에 정의된 actions'(책에선 함수로 비유함.)을 호출한다.
	- #name
	 step의 이름
	- #run
	 uses 절을 통해 호출 된 shell 명령어를 실행시킨다.
	- #with
	 uses action에 들어갈 조건이나 파라미터
- #Runners

	 runners는 workflow의 code가 실행되는 물리/가상 서버 및 컨테이너를 의미한다.
	 쉽게말해 그냥 호스팅 서버임.
	 job 마다 새로운 가상 머신이 제공된다.

     `runs-on: ubuntu-latest` <- 리눅스 우분투 최신버전 컨테이너에서 실행하겠다는 의미.
	 
	 이 runner라는 system이 github에 접속해서 workflow와 사전 정의된 action에 접근하고, step을 실행하고, 결과를 보고한다. 
	 
	 Github가 제공하는 system은 Ubuntu, Windows, macOS 가 있다.
	 따로 호스팅하고있는 인스턴스(EC2 같은거)를 runner로 설정할 수도 있다.

     
	
- #Jobs 
	 steps를 모아놓고 특정 그 step을 실행할 runner를 정의하게 해주는 Component다.
	 책에선 쓰임새가 함수와 유사하다고 설명하는데 내가 보이겐 클래스에 더 가까워 보인다.
	 
	 보통 전체 workflow의 중하위 목표를 수행하게끔 설계된다.
	 CI/CD pipeline의 경우라면 `build - test - packaging` 을 각각 하나의 Job으로 설정하여 
	 총 3개의 job으로 나눔.
	
	 그리고 Jobs의 실행 결과는 `Github action interface`를 통해 확인한다.
	 하지만 성공 실패 여부에 대해선 job의 단위로만 알려주고 어느 step에서 찐빠가 났는지는 안알려줌.
	 그러니 Job을 설계할 땐 어느 step에서 에러가 났는지 쉽게 파악하려면 Job을 잘 세분하는게 좋다고 한다. 이런 부분에선 클래스보단 함수라고 하는게 더 적절한 것 같기도...
	
- #Workflow
	  pipeline과 유사하다.
	  우선 어떤 종류의 Event를 받을지, 어떤 조건일 때 실행할지 정한다.
	  
	 그리고 workflow는 이벤트의 유형과 조건이 성립되는 Job을 찾아 발동시킨다.
	 _workflow실행하면 job이 실행되고 job은 자기 하위에 속한 step을 실행함.
	
	 기본적으로 알려진 CI 프로세스와 같은 흐름이다.
		 Event가 발생하면 그에 반응하여 진행 과정을 자동화한다는 점이 그러하다.	
---

- #status-badge
	 Re-run jobs 버튼 옆 부가 기능에는 `Create status badge`라고 하는 옵션이 있다.
	 기본적으로 READEME.md 파일인데, 원하는 webPage를 추가하거나 지정할 수 있다.
	 
	 이게 뭐냐면 workflow의 상태(실행 성공/실패)를 이뿌게 표시하는 뱃지라고 한다.
	 해당 repository의 모든 WebPage에 달 수 있다.
	 
	 그냥 {서비스중 / 서비스 중단 /  } 을 표시할때 쓰라는거 같다.
---

