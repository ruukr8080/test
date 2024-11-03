# GitHub Actions-WorkFlowFile 작성법

## 기본 설정
```yaml
name: Deploy Quartz site to GitHub Pages
```
- 워크플로우의 이름을 정의합니다. GitHub Actions 탭에서 이 이름으로 표시됩니다.

```yaml
on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main
  workflow_dispatch:
```
- 워크플로우가 실행되는 조건을 정의합니다:
  - `pull_request`: main 브랜치로 PR이 생성될 때
  - `push`: main 브랜치에 직접 푸시될 때
  - `workflow_dispatch`: 수동으로 워크플로우를 실행할 수 있게 함

## 첫 번째 Job: build-and-test

```yaml
jobs:
  build-and-test:
    if: ${{ github.repository == 'ruukr8080/ruukr8080.github.io' }}
```
- jobs 섹션 시작
- `build-and-test`라는 job 정의
- 특정 저장소에서만 실행되도록 조건 설정

```yaml
    strategy:
      matrix:
        os: [windows-latest, macos-latest, ubuntu-latest]
    runs-on: ${{ matrix.os }}
```
- 매트릭스 전략 정의: 여러 운영체제에서 동시에 테스트 실행
- 각 OS의 최신 버전에서 실행

```yaml
    permissions:
      contents: write
```
- GitHub 저장소에 대한 쓰기 권한 부여

```yaml
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
```
- 소스 코드를 체크아웃 (가져오기)
- `fetch-depth: 0`: 전체 Git 히스토리 가져오기

```yaml
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
```
- Node.js 버전 20 설치

```yaml
      - name: Cache dependencies
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
```
- npm 패키지 캐싱 설정
- 빌드 속도 향상을 위해 이전에 설치한 패키지 재사용

```yaml
      - run: npm ci
```
- `package-lock.json`을 기반으로 정확한 버전의 의존성 설치

```yaml
      - name: Check types and style
        run: npm run check
```
- TypeScript 타입 체크와 코드 스타일 검사 실행

```yaml
      - name: Test
        run: npm test
```
- 테스트 스크립트 실행

```yaml
      - name: Ensure Quartz builds, check bundle info
        run: npx quartz build --bundleInfo
```
- Quartz 프로젝트 빌드
- 번들 정보 확인

## 두 번째 Job: publish-tag

```yaml
  publish-tag:
    if: ${{ github.repository == 'ruukr8080/ruukr8080.github.io' && github.ref == 'refs/heads/v4' }}
    runs-on: ubuntu-latest
```
- 태그 생성을 위한 별도 job
- 특정 저장소의 v4 브랜치에서만 실행

```yaml
      - name: Get package version
        run: node -p -e '`PACKAGE_VERSION=${require("./package.json").version}`' >> $GITHUB_ENV
```
- package.json에서 버전 정보를 읽어 환경 변수로 저장

```yaml
      - name: Create release tag
        uses: pkgdeps/git-tag-action@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          github_repo: ${{ github.repository }}
          version: ${{ env.PACKAGE_VERSION }}
          git_commit_sha: ${{ github.sha }}
          git_tag_prefix: "v"
```
- 릴리스 태그 생성
- GitHub 토큰을 사용하여 인증
- 버전 정보를 기반으로 태그 생성
- 태그 이름에 "v" 접두사 추가 (예: v1.0.0)

## 워크플로우의 주요 기능
1. 크로스 플랫폼 테스트 (Windows, macOS, Ubuntu)
2. 의존성 관리와 캐싱
3. 코드 품질 검사 (타입 체크, 스타일 검사)
4. 자동 테스트 실행
5. Quartz 프로젝트 빌드
6. 릴리스 태그 자동 생성 (v4 브랜치에서만)