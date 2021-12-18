# <img src="http://www.brandbrief.co.kr/news/photo/202002/2973_5331_5938.png" width="3%" height="3%"/> Instagram-Clone 3조

**인스타그램 클론 코딩입니다.**

<br>

## 제작 기간 및 팀원 소개
2021-12-13 ~ 2021-12-18

## 깃허브 주소

[Front-End](https://github.com/youHaveToDo/instagram_clone_FrontEnd.git)

[Back-End](https://github.com/kiljw316/instagram_clone_BackEnd/tree/main)

## 🥇 Developers

`FrontEnd`
* 정종찬
* 최수인

`BackEnd`
* 길재원
* 김금동
* 이성진

<br>

## ▶️ List

- 📆 [Schedule](#-Schedule)
- 🚀 [Tech Stack](#-Tech-Stack)
- 💬 [Front-end](#-Front-end)
- 💬 [Back-end](#-Back-end)

<br>

## 📆 Schedule
[스케쥴 노션 링크 바로가기](https://www.notion.so/99-3-8694a6aa2799484ca10b52f8ecf9689a)

<br>

## 🚀 Tech Stack

- **Front-end Tech Stack**

- **Front-end Library**
  
- **Back-end Tech Stack**
  - Node.js
  - Express
  - MongoDB & Mongoose

- **Back-end Library**
  - JWT
  - bcrypt
  - multer
  - dotenv
  - cors
  - passport(local, jwt)

- **Deploy**
  - AWS EC2 (Ubuntu 18.04 LTS)
  - S3

<br>

**❓ Why? MVC 패턴**

이번 미니프로젝트 주차에는 기획부터 개발, 배포까지 6일안에 완성해야 했습니다. 하루동안 아무리 촘촘하게 따져가면서 기획을 한다해도 어쩔수없이 놓치는 부분이 생길 것 같았기 때문에 개발 시작 단계에서부터 *기능의 확장성*을 생각해 데이터와 사용자 인터페이스, 기능들이 분리된 *MVC패턴*을 사용했습니다.

**❓ Why? express-validator (Controller 단계에서의 유효성검사)**

View 단계에서는 개발자도구를 통한 HTML조작 유효성검사를 비정상적으로 패스할 가능성이 있어 _Controller 단계에 유효성검사_ Middleware를 추가했습니다.

**❓ Why? multer**

이미지 파일이 multipart/form-data 형태로 넘어오기 때문에 이를 다루기 위해서 multer를 사용했습니다.

**❓ Why? dotenv**

노출되면 보안에 위협적인 환경변수들을 한곳에 모아 관리했습니다.

**❓ Why? mongoDB Attribute Pattern**

우리 조의 인스타그램은 보통 총 게시글의 80%는 유저의 20%가 작성한다고 합니다. 따라서  
MongoDB로 컬렉션 설계 시 데이터 생성/수정/삭제 보다 조회에 이점이 있는 Attribute Pattern을 선택하게 되었습니다.

**❓ Why? NGINX**

cors 라이브러리를 사용할 필요 없이 안전하게 통신을 하기 위해서 사용했습니다.



