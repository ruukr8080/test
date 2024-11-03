---
title: Github-Actions
type: [tech]
tags: [tech]
---
## Github-Actions
- `엔드투엔드 깃허브 중심 SDLC 자동화 process` :
	</br> 소프트웨어 개발의 첨부터 끝까지 GitHub가 제공하는 기능들을 활용해서 개발하고 자동으로 관리 해주는다는 뜻.
	
			프로젝트를 체계적으로 관리할 수 있고 그 과정을 통합하고 자동화해주는 플랫폼과 프레임워크는 원래 있었다.
			(`Jenkins`, `CircleCI`, `Travis CI` 등..)이 툴을 사용하여 SDLC를 자동으로 해주는건 국룰이었음.

			그리고 2019년 깃헙에서도 SDLC프로세스를 자동으로 관리 해주는 `Github Actions`이 탄생했다.
			Github Actions의 가장 큰 장점이자 경쟁력은 GitHub와의 완벽한 통합이다.
			코드 저장소와 CI/CD가 같은 플랫폼에 있다보니 설정이 매우 간단하고,
  			GitHub의 형상관리 기능(Issues, Projects, Security 등)을 활용할 수 있다는 것도 개꿀이다.

			또한 Marketplace에서 다른 개발자들이 만든 Actions를 가져다 쓸 수 있어서
			거의 모든 작업을 복붙 수준으로 구현할 수 있다.
  			
			예를 들어 AWS에 배포하고 싶다? -> 관련 Action 찾아서 붙이면 끝!
  			Node.js 테스트하고 싶다? -> 테스트 Action 가져다 쓰면 됨!

  			이런 편의성 덕분에 특히 작은 규모의 프로젝트나 오픈소스에서 아주 유용하게 쓰이고 있음.
  			Jenkins같은 기존 도구들이 해주는 건 다 해주면서 설정은 훨씬 간단하기 때문.

### Github Actions의 동작 과정

    코드를 push하거나 PR을 만들면(이벤트 발생) 
    
    → Github가 `.github/workflows` 폴더를 뒤져서 해당 이벤트에 반응하도록 설정된 workflow 파일을 찾는다 

    → 실행시키는 방식으로 동작함


### Workflow

    자동화하고 싶은 작업의 절차이다. 

    그 절차를 작성해 놓은게 workflow-file이다.
### Workflow 구성
- job: 실행할 작업 단위
    - 테스트, 빌드, 배포 등등 하고 싶은 일들을 job으로 정의
    - 여러 job은 기본적으로 병렬로 실행됨 (순서 정할 수도 있음)

- runner: job을 실행하는 서버
    - Github에서 제공하는 가상 머신
    - 각 job마다 깨끗한 새 환경에서 시작함

- step: job 안의 실제 실행 단계
    - 순차적으로 실행되는 명령어들
    - marketplace의 action을 가져다 쓰거나 직접 명령어를 실행할 수 있음

---

#### Github Action-Environment
설정,데이터 공유 및 저장,workflow 실행 트리거 및 제어에 필요한 각종 구성 요소

- workflow 변수 설정
    - github-secret
- workflow 권한 설정
    - read, write ...
- workflow 배포 설정
    - 환경별 설정과 제한