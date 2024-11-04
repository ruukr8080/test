---
title: 부끄러움 많은 생애를 보내 왔습니다.
type: speak
tags:
  - git
---
## `🙊main/master 브랜치`

이 브런치에 push로 접하는 순간은

상견례 자리쯤으로 여기자.

---

## `🙊커밋 메세지`

좋은 예👍
```text
feat: Add login validation
fix: Resolve infinite loading issue
docs: Update README installation guide
```

예?😭 
```text
"test1" 
"ㅋ",
"asd"
(실무 팀프로젝트에서 커밋 메세지 이런식으로 쓰면 mz소리 들음)
```

> 커밋메세지는 진지하게 써야하는거다. 어떻게 쓰는지 모르겠다면 [커밋컨벤션](커밋컨벤션.md)이라는게 있으니 찾아보면 된다.

---

## `🙊('.gitignore' 생성) 까지가 'git init'이다`

>- **짜증나는 상황** : 허브에서 clone 혹은 pull 받는데 오래걸림
> -> [node_module](node_module)올라와 있음.

>- **ㅈ된 상황** : 허브에 게시되면 안될게 올라와있음. -> [APIkey](APIkey),[env](env),[secetkey](secetkey) 올라와 있음. 

'.gitignore'로 예방하고 광명찾자.
```bash
// .gitignore파일
node_modules/
.env
.DS_Store
dist/
build/
*.log
```

---
## `🙊작업 시작 하기 전엔 'gitupdate' , 'git pull' 하고 시작하자.` + `push force는 '로우리턴하이리스크'다.`
> **상황.**

시간 : **00시 03분**

	- 버스 막차 : [00:10]
	- 작업 상황 : 내 파트 완료
	- commit 갯수: 중간 중간 커밋하면서 작업 해서 10개 넘음
	- pulls: 0개 (치명적)

```bash
git add . 
git commit -m "aaaaa" 
git push origin main
.
.
! [rejected] feature/complete -> feature/complete 
(fetch first) error: failed to push some refs to...
.
.
git pull origin main
.
.
(충돌 300개 발견됐다는 로그들)
```
 시간 : **00시 07분**
 
	- 구글링 : "error: failed to push some refs to..." 
	- 스택오버플로우 : "u can input "git push -f" bro, but you must ..."
```bash
git push -f origin main
.
.
Resolving deltas: 100% (300/300). done.
```
	- 팀장님이 쓴 hotfix 날라감
	- 동료들 작업 내역 날라감
시간 : **00시 04분**
	
	퇴근 

---