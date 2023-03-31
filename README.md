# 📋 Next.js와 TypeScript를 활용한 게시판 페이지 만들기

<br />

---

## 🗓 개발 기간

<br />

**기간** : 2023년 3월 20일 ~ 2023년 3월 27일
<br />
<br />

---

## 🚧 서버 설치 및 프로그램 실행 방법

<br />

1. Node.js를 설치합니다.

```
<https://nodejs.org/>
```

<br />

2. 터미널에서 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/daydreamplace/posts-next.js.git
```
<br />

3. 클론 받은 폴더로 이동합니다.
```
cd posts-next.js
```

<br />

4. 패키지를 다운 받습니다.

```
pnpm i
```

<br />

5. 터미널에서 json-server를 실행합니다.

```
json-server ./db.json --port 3000
```

<br />

6. 프로젝트를 실행합니다.

```
pnpm dev
```

<br />

<br />

## 📂 파일 프로젝트 구조

- `db.json`: json-server 파일
- `src/pages`: index(게시글 리스트) 페이지, 게시글 상세페이지, 게시글 작성페이지 폴더
- `src/components`: components 폴더
<br />
<br />

---

## 🛠적용 기술

<br />

- TypeScript
- React.js
- Next.js
- react-dom
- react-router-dom
- emotion
- styled-components
- axios
- react-icons
- json-server

<br /><br />

## 📑 구현 기능 (Page 혹은 Component 단위 설명)

<br/>

### ✅ Index (게시글 리스트 페이지)

- `json-server`데이터를 받아 게시글 리스트 컴포넌트 레이아웃 및 기능 구현
    - 게시판에 작성된 게시글들을 전부 확인 가능 하게 구현
    - 작성된 게시글의 내용 앞부분 일부와 댓글 수 확인 가능
    - 작성된 게시글은 10개씩 볼 수 있게 무한 스크롤 기능 구현
    - 게시글의 제목을 누르면 게시글 상세페이지로 이동
    - 게시글 리스트의 상단의 작성하기 버튼 클릭시 게시글 작성페이지로 이동
    - 반응형 레이아웃 적용
    
    <br />
    

### ✅ Post (게시글 상세페이지)

- `json-server`데이터를 받아 게시글 상세페이지 레이아웃 및 기능 구현
    - 해당하는 게시글의 제목, 내용, 작성일자 확인 가능
    - 해당하는 게시글의 댓글 갯수와 댓글 내용 확인 가능
    - 댓글 작성 컴포넌트와 댓글리스트 컴포넌트 레이아웃 및 기능 구현
    - 상단의 화살표 클릭시 이전페이지로 이동
    - 반응형 레이아웃 적용
    
    <br />
    

### ✅ Write (게시글 작성페이지)

- 게시글 작성페이지 레이아웃 및 기능 구현
    - 제목, 작성자, 비밀번호, 내용 등을 입력할 수 있게 구현
    - 하단의 화살표 클릭시 이전페이지로 이동
    
    <br />
    

