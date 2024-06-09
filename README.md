![리드미 최상단](https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/8cbab0c3-6ab0-49bc-98ae-b9684f7069a6)
## 동국대학교 개발자 학습환경 플랫폼

---

# DUEL (Dongguk University E-Learning Laboratory)

---

![처음.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/aa8e32fd-eb2e-4da0-a228-1136ea9cba8f/6b8632d5-d5d6-4158-8652-80ff3d57667e/%E1%84%8E%E1%85%A5%E1%84%8B%E1%85%B3%E1%86%B7.gif)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aa8e32fd-eb2e-4da0-a228-1136ea9cba8f/88d98f06-f621-4054-a765-5765f4efc102/Untitled.png)

# DUEL (Dongguk University E-Learning Laboratory)

## 팀 구성원

| 역할 | 성명 | 학번 | 소속학과 | 연계전공 | 이메일 |
| --- | --- | --- | --- | --- | --- |
| 팀장 | 정동현 | 2019112473 | 산업시스템공학과 | 융합SW연계전공 | mailto:wsdv4444@dgu.edu |
| 팀원 | 이희주 | 2018111039 | 사회학과 | 융합SW연계전공 | mailto:lhj2778@naver.com |
| 팀원 | 이하연 | 2019110914 | 경제학과 | 융합SW연계전공 | mailto:hlee09300@naver.com |

## 프로젝트 소개 및 이용 방법 (유저 플로우)

---

그룹 로드맵 서비스 기반 개발 학습 환경 플랫폼

DUEL (Dongguk University E-Learning Laboratory)

https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/144092849/0d0f86e2-11d7-4a1d-8b6e-09691c534ba2

## 구현결과

---

## 주요 기능 및 개발 내용

# 🧩 주요 기능
|로그인|회원가입|
|:--:|:--:|
|- 회원 정보 이메일을 통한 아이디<br/>-숫자 및 영문과 특수문자 조합 PW<br/> |- 이메일 인증<br/>- 비밀번호 확인 인증|
|<img width="350" alt="로그인" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/8cbab0c3-6ab0-49bc-98ae-b9684f7069a6">|<img width="350" alt="회원가입" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/48c775af-134a-4855-a5c0-82a2f4215ab2">|

|TIL 작성|학습 참고 및 코멘트|
|:--:|:--:|
|- 마크다운 에디터를 통한 TIL 작성<br/>-사라질 걱정 없는 상시 저장 기능<br/> |- 각 STEP별 참고자료 확인<br/>- 글에 대한 코멘트 확인|
|<img width="350" alt="TIL작성" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/562392e9-4faa-4880-a25a-1fff726a834a">|<img width="350" alt="참고자료및코멘트" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/0a41ee79-95b5-4f7d-99df-84cff503fba0">|

|메인|참고 자료|
|:--:|:--:|
|- 작성한 TIL 목록들을 검색하고 확인<br/>- 장미밭을 통해 학습 열정 확인 <br/> - 개인, 그룹 로드맵을 분류하여 관리|- 로드맵에 참고할 자료를 첨부하는 기능<br/>-유튜브, 참고자료 링크<br/> |
|<img width="350" alt="메인페이지" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/9855d95c-e6da-4c3a-807d-4a418c034ce9">|<img width="350" alt="참고자료업로드" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/c8455eca-4376-4c18-9e70-c2d98c4022e5">|

|로드맵 목록|구성원 관리|
|:--:|:--:|
|- 내가 참여하고 있는 로드맵의 목록을 확인<br/>- 현재 모집중인 그룹 로드맵 목록 확인|- 현재 로드맵에 속한 그룹원 목록<br/>-멤버 권한 변경, 강퇴 기능<br/> -그룹원의 학습일지 작성현황 확인<br/>  -로드맵 신청 관리, 수락 거절<br/>|
|<img width="350" alt="로드맵목록" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/2ff9c35d-422b-47b1-a7f8-0da002cc4b3e">|<img width="350" alt="구성원관리" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/2b72784c-7597-4a80-9e88-ab83efe068d2">|

|TIL 공유하기|
|:--:|
|- 내가 공부하는 주제에 대해 타인과 생각을 공유<br/>|
|<img width="350" alt="작성공유" src="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/464300eb-0f71-4d8d-8f62-aea27cf5e997">|

---

백엔드 (BE)

- **로그인/회원가입**: Gmail(SMTP)와 Redis를 사용한 이메일 인증 및 JWT 관리.
- **검색 기능**: 다양한 항목으로의 검색 지원.
- **이미지 업로드**: AWS S3를 사용한 이미지 업로드 및 관리.
- **알림 및 댓글 기능**: 사용자 상호작용 지원.
- **성능 개선**: N+1 문제 해결 및 쿼리 최적화.
- **권한 처리**: 사용자 역할에 따른 접근 제어.

### 프론트엔드 (FE)

- **서버 사이드 렌더링 (SSR)**: Next.js를 사용하여 SSR 구현.
- **접근 권한 분기 처리**: 서버 사이드에서 접근 권한 관리.
- **React-Query의 prefetch와 Hydration**: 데이터 관리 및 최적화.

## 기대효과

---

- **마크다운 에디터를 통한 TIL 작성 지원**.
- **개발 학습 로드맵 제공 및 커뮤니티 조성**.
- **통합 개발 학습 환경 제공을 통한 효율적인 학습 경험**.

## 개발 환경

---

## Backend

https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white

https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white

https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white

https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white

https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=junit5&logoColor=white

https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white

https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white

https://img.shields.io/badge/kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white

https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white

## Frontend

https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white

https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white

https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white

https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white

# 추가 자료

---

## API 명세서

- API에 대한 상세한 명세는 다음 링크에서 확인할 수 있습니다:
[API 명세서 바로가기](https://www.notion.so/API-53fd633284584fe9aa59e7d7e1658625?pvs=21)

## 프로젝트 관리

- **범위 일정 관리**:
[범위 일정 관리 바로가기](https://www.notion.so/8e367ee8cd234c0a98314418e41001aa?pvs=21)
- **이슈 관리**:
[이슈 관리 바로가기](https://www.notion.so/408c4b08259647abb722e4183eac5b4c?pvs=21)
- **회의록**:
[회의록 바로가기](https://www.notion.so/52e53cda8ea042e6a223c7d14a239f84?pvs=21)

## 보고서 및 발표 자료

- 제품구성 , 배포 및 운영자료 :

- Overview :

- **중간보고서**:
[중간보고서 바로보기](https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/blob/main/Docs/2_1_OSSProj_7_Questionmark_%EC%A4%91%EA%B0%84%EB%B3%B4%EA%B3%A0%EC%84%9C_.md)
- **중간발표자료**:
[중간발표자료 바로보기](https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/blob/main/Docs/2_2_OSSProj_7_Questionmark_%EC%A4%91%EA%B0%84%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C_.md)
- 최종보고서 :

- 최종발표자료:
