# 💡 타인과 협업하기 (git clone, pull)

## clone

1. 폴더 만들기
2. 에디터로 폴더 열고, 터미널 실행

```
git clone 원격저장소주소
```

- 팀원 추가 : settings -> Access -> Collaborators -> Add people
- 다른 팀원이 최근에 git push 했으면 나는 못함 (???)
- 원격 저장소에 새로운 변경사항(폴더or파일 생성, 추가) 생기면 git push 불가능하다.
- 해결 : git pull 하라. (원격저장소 -> 로컬저장소)

## pull

```
git pull 원격저장소주소 브랜치명
```

- `-u` 잘 해놨으면 git pull 만 입력해도 ok
- 원격저장소 파일이 내 로컬저장소에도 업데이트 된다.
- 원격저장소 최신 내용이 로컬 저장소에 있을 때만 `git push` 가능
- `git pull` 명령어는 `fetch`와 `merge`를 동시에 진행하는 명령어
- `git fetch` : 원격저장소 신규 commit 가져오세요
- `git merge` : 내 브랜치에 merge 해주세요
  <br><br><br><br>

# 💡 브랜치로 협업하기 (pull request)

- 협업자가 많은 경우, 브랜치를 생성해 개발하고 main브랜치에 merge 하는 방식이 안정적이다.
- 로컬저장소에서 브랜치 만들고 `push` (github에서도 브랜치 생성가능)

```
git branch mining
git switch mining
```

## Pull requests

- github - repository - **Pull requests**(<-merge요청)
- merge 방식 선택
  <br><br><br><br><br>

참고 : 코딩애플 git 강의
