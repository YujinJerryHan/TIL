# Git 기본 명령어

```
git init
: 리포지토리 초기화. '.git'폴더 생성.

git status
: 현재 상태 확인

git log
: 전체 로그 확인

git log --pretty=short
: 로그 확인 시 첫 번째 요약 줄만 보여주기

git log -p
: 커밋에서 변경된 내용 함께 확인. (뒤에 파일/폴더명 붙여도 됨)

git log --graph
: 브랜치를 시각적으로 확인

git add 파일명
: 스테이지 영역(커밋 전 임시 영역)에 파일 추가.

git commit -m '메모메모'
:

git commit --amend
: 직전에 작성했던 커밋 메시지 수정

git commit -am 'add,commit'
: add, commit 한번에 실행

git diff
: working tree, 스테이지 영역, 최신 커밋 사이 변경 확인

git diff HEAD
: 최신 commit과의 차이 확인

git branch
: 브랜치 목록, 현재 브랜치

git branch -a
: 로컬 리포지토리와 원격 리포지토리 브랜치 모두 표시

git checkout -b 'feature-A'
: feature-A 이름의 브랜치를 만들고 그 브랜치로 이동

git push -u origin main
: -u옵션: 로컬 리포에 있는 현재 브랜치 upstream이 origin 리포의 main 브랜치로 설정.

git push -u origin feature-D
: 원격의 feature-D 브랜치로 push
```
