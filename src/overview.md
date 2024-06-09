# 동국대 개발자 학습 플랫폼 DUEL

## (Dongguk University E-learning Laboratory)

## 소개 (Introduction)

동국대 개발자 학습 플랫폼은 동국대학교 개발자들이 학습 내용을 공유하고 서로 피드백을 주고받을 수 있는 온라인 학습 플랫폼입니다. 사용자는 학습 일지(TIL)를 작성하고, 학습 주제를 생성하며, 학습 로드맵을 관리할 수 있습니다. 또한, 다른 사용자와 소통하며 학습 효과를 극대화할 수 있는 다양한 기능을 제공합니다.

## 서비스 시연 영상
https://foregoing-education-610.notion.site/ef4266b418ee47d38b6010aea5d2ad1b?pvs=4

## 시스템 아키텍처 (System Architecture)

![아키텍쳐](https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/162097932/11873247-6069-44d8-961c-825a44750f58)

시스템은 프론트엔드, 백엔드, 데이터베이스, 캐싱, 파일 저장소 등 여러 컴포넌트로 구성됩니다.

### 프론트엔드 (Frontend)

- **타입스크립트(TypeScript)**
- **React**
- **Next.js**
- **React Query**
- **Axios**
- **Storybook**

### 백엔드 (Backend)

- **Java**
- **Spring Framework**
- **Amazon AWS**
- **MariaDB**
- **Redis**
- **Kubernetes(K8s)**
- **Amazon S3**

## 주요 기능 (Key Features)

1. **TIL (Today I Learn)**: 사용자가 학습 내용을 일지 형태로 작성하고 저장할 수 있는 기능.
2. **로그인 기능**: 이메일을 통한 로그인 및 유저 정보를 개별적으로 저장 관리하는 기능.
3. **Step 생성 및 삭제 기능**: 학습 주제를 생성하고 각 주제별로 학습 단계를 생성, 삭제할 수 있는 기능.
4. **로드맵 기능**: 사용자가 특정 학습 주제를 신청하면, 해당 주제에 맞는 단계별 학습 로드맵을 생성 및 관리하는 기능.
5. **코멘트 기능**: 다른 사용자의 학습 일지에 댓글을 달고 의견을 공유할 수 있는 기능.
6. **알람 기능**: 사용자가 작성한 TIL에 댓글이 달리면 알림을 제공하는 기능.

## 데이터 흐름 (Data Flow)

![Untitled-3](https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/162097932/6a2a1c2b-c991-4545-8c7e-3872439b431c)

  

![데이터플로우블록](https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07/assets/112611541/fe9cf8d7-a8b8-4cfa-9088-00a42f241fb4)  


1. 사용자가 이메일로 로그인합니다.
2. 로그인된 사용자는 학습 주제를 생성하고 단계별 학습 내용을 작성합니다.
3. 작성된 학습 내용(TIL)은 서버로 전송되어 데이터베이스(MariaDB)에 저장됩니다.
4. 다른 사용자는 해당 학습 내용을 보고 코멘트를 작성할 수 있습니다.
5. 코멘트가 작성되면 해당 학습 내용 작성자에게 알림이 전송됩니다.
6. 모든 데이터는 필요한 경우 Redis를 통해 캐싱되고, 파일(이미지 등)은 Amazon S3에 저장됩니다.

## 기술 스택 (Technology Stack)

- **프론트엔드**: TypeScript, React, Next.js, React Query, Axios, Storybook
- **백엔드**: Java, Spring
- **데이터베이스**: MariaDB
- **캐시**: Redis
- **파일 저장소**: Amazon S3
- **인프라**: Amazon AWS, Kubernetes

## 소스코드 폴더 관계 기술

### **07-Qusetionmark 팀은 기존 CSID 레포지토리 소소코드가 아닌, 자체 개발한 소스코드로 개발했기에 기존 코드에 대한 변경 및 비교가 없습니다. ( 구현율 90% )**

1. BE 소스코드 

### _core 폴더

Spring Boot 애플리케이션의 구성, 예외 처리, 보안 및 유틸리티 관련 기능

폴더 주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/_core** 

| 하위 폴더 | 파일 명 | 설명 |
| --- | --- | --- |
| config  | proxyconfig | Spring Boot 배포 환경에서 프록시를 설정한 RestTemplate 빈을 생성하는 구성 클래스 |
|  | redisconfig | Redis 연결 팩토리와 RedisTemplate을 설정하는 Spring Boot 구성 클래스 |
| errors | customException | 사용자 정의 예외 클래스 : 예외 코드와 메시지를 포함하여 API 에러 응답을 생성 |
|  | exceptioncode | HTTP 상태 코드와 메시지를 포함하는 다양한 애플리케이션 예외를 정의하는 열거형 클래스 |
|  | global exception handler | 애플리케이션 전역에서 발생하는 예외를 처리하여 적절한 HTTP 응답을 반환하는 글로벌 예외 처리기 |
|  | global validation handler | AOP를 사용하여 POST 및 PATCH 요청 시 유효성 검사를 수행하고 오류가 있을 경우 예외를 던지는 글로벌 유효성 검사기 |
| S3 | file folder | S3 폴더 경로를 반환하는 파일 타입별 열거형 클래스
파일 업로드, 삭제, URL 조회, 다운로드 및 폴더 조회 기능을 정의하는 인터페이스 |
|  | S3component | AWS S3 버킷 및 각 폴더 경로를 저장하는 구성 클래스 |
|  | S3config | AWS S3 클라이언트를 구성하고, 프로덕션 및 로컬 환경과 배포 환경에서 프록시를 지원하는 설정 클래스 |
|  | S3service | S3 서비스 클래스: 파일 업로드, 삭제, 다운로드, URL 조회, 파일 이름 및 확장자 처리 로직을 제공 |
| security | Customeruser detail | Spring Security UserDetails 인터페이스를 구현하여 사용자의 인증 및 권한 정보를 제공 |
|  | customeruser detail service | Spring Security UserDetailsService 인터페이스를 구현하여 사용자의 인증 정보를 데이터베이스에서 조회 |
|  | JWT authentication filter | JWT 토큰을 사용하여 사용자를 인증하는 필터를 구현 |
|  | JWT provider | JWT 토큰의 생성 및 검증을 담당하는 컴포넌트 |
|  | security config | Spring Security를 사용하여 보안 설정 |
| utils | api utils | API 응답을 처리하는데 사용되는 유틸리티 클래스 |
|  | filter response utils | 서블릿 필터에서 발생한 예외에 대한 응답을 처리하기 위한 유틸리티 클래스 |
|  | redis utils | Redis를 사용하여 데이터를 저장하고 검색하기 위한 유틸리티 클래스 |

### user 폴더

Spring 애플리케이션에서 사용자 관련 기능을 구현

폴더 주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/user** 

| 하위 폴더 | 하위 파일 | 설명 |
| --- | --- | --- |
| user | kakao login service | 카카오 로그인을 처리하기 위한 서비스 클래스 |
|  | social login controller  | 카카오 로그인을 처리하는 REST 컨트롤러 |
|  | social login response  | 카카오 로그인을 처리하는 데 사용되는 데이터 전송 객체(DTO)를 정의하는 클래스 |
|  | role | 사용자 역할 정의 |
|  | user | 사용자 정보를 나타내는 엔티티 |
|  | user controller | 사용자 관련 API 엔드포인트를 처리 |
|  | user repository | Spring Data JPA를 사용하여 사용자(User) 엔티티에 대한 데이터베이스 액세스를 처리 |
|  | user request | 사용자 관련 요청 DTO 클래스를 정의 |
|  | user response | 사용자 관련 응답 DTO 클래스를 정의 |
|  | user service | 사용자 관련 비즈니스 로직을 처리하는 서비스 클래스 |

### alarm 폴더

알람 관련 기능

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/alarm**

| 하위 폴더 | 하위 파일 | 설명 |
| --- | --- | --- |
| alarm | alarm | Alarm 엔티티를 정의하는 클래스 |
|  | alarm controller | 알람 관련 기능을 제공하는 RESTful API를 구현한 AlarmController 클래스 |
|  | alarm repository | JPA를 사용하여 알람 엔티티에 대한 데이터베이스 액세스를 처리 |
|  | alarm request | 알람(Alarm)과 관련된 요청을 처리하는 데 사용되는 DTO(Data Transfer Object) 클래스 |
|  | alarm response | 알람(Alarm)과 관련된 응답을 처리하는 데 사용되는 DTO(Data Transfer Object) 클래스 |
|  | alarm service | 알람(Alarm)과 관련된 비즈니스 로직을 처리하는 서비스 클래스 |

### comment 폴더

댓글 관련 기능

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/comment**

| 하위 폴더 | 하위 파일 | 설명 |
| --- | --- | --- |
| comment | comment | 댓글 관리를 위한 엔티티를 정의 |
|  | comment controller | Spring Boot를 사용하여 댓글을 생성, 수정, 삭제하는 REST API를 정의 |
|  | comment repository | Comment 엔티티의 데이터를 조회하고 논리적으로 삭제하기 위한 JPA 레포지토리 인터페이스 |
|  | comment request | 댓글 생성 및 수정을 위한 요청 데이터 전송 객체(DTO)를 정의 |
|  | comment respond | 댓글 생성 응답에 대한 데이터 전송 객체(DTO)를 정의 |
|  | comment service | 댓글을 생성, 수정, 삭제하며 관련된 로드맵, 단계, TIL, 알림을 처리 |

### image 폴더 : 이미지 관련 기능을 담당

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/image**

| 하위 폴더 | 하위 파일 | 설명 |
| --- | --- | --- |
| image | image | 이미지 정보를 저장하는 Image 엔티티 클래스 |
|  | image controller | 이미지 업로드 및 이미지 조회를 처리하는 REST API를 정의 |
|  | image request | 사용자 이미지를 업데이트하는 요청 데이터 전송 객체(DTO)를 정의 |
|  | image resoponse | 이미지에 대한 응답 데이터 전송 객체(DTO)를 정의 |
|  | image service | 이미지 관련 기능을 처리하는 서비스 클래스 |

### roadmap 폴더 : 로드맵 관련 기능을 담당

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/roadmap**

| 하위 폴더 명 | 하위 파일 명 | 설명 |
| --- | --- | --- |
| roadmap | roadmap | 로드맵의 카테고리를 정의하는 열거형(enum) Category를 선언 |
|  | roadmap controller | 로드맵과 관련된 HTTP 요청을 처리하는 컨트롤러인 RoadmapController 정의 |
|  | roadmap repository | 로드맵 엔티티를 조작하는데 사용되는 Spring Data JPA 리포지토리를 정의 |
|  | roadmap request | 로드맵과 관련된 요청을 처리하기 위한 데이터 전송 객체(DTO)를 정의 |
|  | roadmap response | 로드맵과 관련된 응답을 처리하기 위한 데이터 전송 객체(DTO)를 정의 |
|  | roadmap service | 로드맵 관련 기능을 제공하는 서비스 클래스 |

### roadmap - relation 폴더

사용자와 로드맵 간의 관계를 다루며, 그룹 내에서의 역할을 정의

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/roadmap/relation**

| 하위 폴더 명 | 하위 파일 명 | 설명 |
| --- | --- | --- |
| roadmap - relation | group role | 그룹 내에서 사용되는 역할을 정의하는 열거형(enum) GroupRole을 선언 |
|  | user roadmap | 사용자와 로드맵 간의 관계를 나타내는 엔티티 클래스인 UserRoadmap을 정의 |
|  | user roadmap repository | 사용자와 로드맵 간의 관계를 관리하기 위한 JPA 레포지토리 인터페이스 |
|  | category | 로드맵을 나타내는 엔티티 클래스인 Roadmap을 정의 |

### step 폴더 : step 관련 기능을 담당

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/step**

| 하위 폴더 명 | 하위 파일 명 | 설명 |
| --- | --- | --- |
| step | step | 스텝(Step) 엔티티를 정의 |
|  | step controller | 스텝(Step)과 관련된 HTTP 요청을 처리하는 스텝 컨트롤러를 정의 |
|  | step repository | Step 엔터티에 대한 데이터베이스 액세스를 처리하기 위한 Spring Data JPA 리포지토리를 정의 |
|  | step request | 스텝과 관련된 HTTP 요청에서 사용되는 DTO(Data Transfer Object)를 정의 |
|  | step response | 스텝과 관련된 HTTP 요청에 대한 응답으로 사용되는 DTO(Data Transfer Object)를 정의 |
|  | step service | 스텝 관련 로직을 처리하며, 스텝 생성, 수정, 조회, 삭제와 관련된 기능을 담당 |

### step -  reference 폴더 :  스텝의 참고 자료를 관리

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/roadmap/step/reference**

| 하위 폴더 명 | 하위 파일 명 | 설명 |
| --- | --- | --- |
| reference  | reference  | 스텝의 참고 자료를 나타내는 Reference 엔티티 |
|  | reference controller | 스텝의 참고 자료를 관리하는 RESTful API를 구현 |
|  | reference repository | Reference 엔티티에 대한 데이터베이스 작업을 수행하는 JpaRepository를 정의 |
|  | reference request | 참고자료(Reference)에 대한 HTTP 요청(request)과 응답(response)의 데이터 모델을 정의 |
|  | reference service | 참고자료(Reference) 관련 비즈니스 로직을 처리 |

### step - relation 폴더 : 사용자, 스텝, 로드맵 간의 관계를 관리

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE-1/src/src/main/java/com/example/duel/step/relation**

| 하위 폴더 명 | 하위 파일 명 | 설명 |
| --- | --- | --- |
| relation | user step | 사용자(User), 스텝(Step), 및 로드맵(Roadmap) 간의 관계를 나타내는 UserStep 엔티티를 정의 |
|  | user step repository | UserStep 엔티티를 조작하기 위한 JpaRepository를 정의 |

### til 폴더 : til 관련 기능을 담당

폴더 주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example/duel/til**

| 하위 폴더 명 | 하위 파일 명 | 설명 |
| --- | --- | --- |
| til | til | "Today I Learned (TIL)" 항목을 나타내는 엔티티 클래스 |
|  | til controller | TIL(Today I Learned)을 처리하는 REST 컨트롤러 |
|  | til repository | TIL(Today I Learned) 엔티티에 대한 데이터베이스 액세스를 담당하는 Spring Data JPA 리포지토리 |
|  | til request | TIL(Today I Learned)과 관련된 요청에 대한 데이터 전송 객체(DTO)를 정의 |
|  | til response | TIL(Today I Learned)과 관련된 응답에 대한 데이터 전송 객체(DTO)를 정의 |
|  | til service | TIL(Today I Learned) 서비스에서 TIL 관련 비즈니스 로직을 처리하는 TilService를 정의 |

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/java/com/example**

| 하위 파일 명 | 설명 |
| --- | --- |
| Duel application | Spring Boot 애플리케이션의 메인 클래스인 DuelApplication을 포함하며, CommandLineRunner를 사용하여 애플리케이션이 시작될 때 초기 데이터베이스 설정을 수행 / 사용자, 로드맵, 단계, 참조, TIL, 댓글, 알람 등을 생성하고 초기화하는 데 사용 |
| Base time entity | JPA 엔터티에서 생성일과 수정일을 자동으로 관리하기 위한 베이스 엔터티를 정의  |

### resources 폴더 :  Spring Boot 애플리케이션의 배포 환경 및 로컬 개발 환경에 대한 설정 파일을 포함

폴더주소 : **2024-1-OSSProj-Questionmark-07-BE/src/src/main/resources**

| 하위 폴더 명 | 하위 파일 명 | 설명 |
| --- | --- | --- |
| resources | application – deploy
( 실제 운영환경 배포 설정) | 이 설정 파일은 Spring Boot 애플리케이션의 데이터베이스, 파일 업로드, 이메일, Redis, AWS S3, 로깅 설정을 포함 |
|  | application – local 
( 로컬개발 환경) | Spring Boot 애플리케이션의 파일 업로드, H2 데이터베이스, JPA, 메일, Redis, AWS S3 설정을 정의 |
|  | application – prod
( 실제 운영환경) | 이 YAML 파일은 Spring Boot 애플리케이션의 설정을 정의합니다. MySQL과 MariaDB 데이터베이스, 파일 업로드, 이메일(SMTP), Redis, 그리고 AWS S3와 관련된 설정을 포함 |
|  | appication | 이 설정은 Spring Boot 애플리케이션이 deploy 프로파일을 활성화하도록 지정.  즉, 애플리케이션이 실행될 때 application-deploy.yml 파일에 정의된 설정을 사용 |

1. FE 소스코드 

**auth 폴더 : 사용자의 로그인, 회원가입, 비밀번호 변경 등과 같은 인증 기능에 필요한 컴포넌트, 커스텀 훅, API 호출 등이 포함.**

폴더주소 : **Questionmark_FE/Frontend/src/components/auth**

| 하위  폴더명 |  설명  |
| --- | --- |
| change- password | 비밀번호 변경을 위한 React 컴포넌트와 관련된 기능을 제공. |
| common | 인증 관련 UI를 구성하는 컴포넌트들을 정의. 사용자 인증 상태에 따라 다양한 동작을 수행하고, 반응형 디자인을 고려하여 다양한 기기에서 적절한 UI를 제공. |
| login | 사용자 로그인 폼을 구현, 로그인 요청을 처리하는 기능을 제공. |
| register | 사용자 회원가입 폼을 구현, 회원가입 요청을 처리하는 기능을 제공. |
| verify | 이메일 확인 페이지 등을 위한 로직을 처리. |

**common 폴더 : 여러 컴포넌트나 유틸리티 함수 등과 같은 프로젝트 전반에서 공통적으로 사용되는 요소들을 포함하는 공유 모듈의 집합.**

폴더주소 : **Questionmark_FE/Frontend/src/components/common**

| 하위  폴더명 |  설명  |
| --- | --- |
| Avatar | 사용자의 프로필 이미지 또는 아이콘을 표시하는 역할 |
| ConditionalRender | 데이터의 존재 여부에 따라 다른 UI를 렌더링. |
| Tap |  Tab 컴포넌트를 정의, 확장하여 Tab 메뉴를 추가. |
- common 하위 폴더는 양이 상당하여 일부분만 설명. 대부분 공통 컴포넌트, 스타일, 훅 등을 포함하고 있음. 특정 부분을 확인하고 싶으면, 폴더명을 참고하여 확인할 수 있음.

**gnb 폴더 : 표시되는 모든 GNB (Global Navigation Bar)와 관련된 기능의 집합.**

폴더주소 : **Questionmark_FE/Frontend/src/components/gnb**

| 하위  폴더명 | 설명 |
| --- | --- |
| common | GNB (Global Navigation Bar) 컴포넌트를 구성하는데 필요한 공통된 요소들을 담고 있음. |
| GuestGNB | 사용자가 로그인하지 않은 상태에서의 GNB를 관리하는 역할. |
| UserGNB | 사용자가 로그인 한 상태에서의 GNB를 관리하는 역할. |

**layout 폴더 : 레이아웃을 정의하는 컴포넌트.**

폴더주소 : **Questionmark_FE/Frontend/src/components/layout**

| 하위 파일 명 | 설명 |
| --- | --- |
| EmptyLayout | 빈 레이아웃을 정의하는 함수형 컴포넌트. |
| FullHeightLayout | 전체 높이를 차지하는 레이아웃을 정의하는 함수형 컴포넌트. |
| HeaderLayout | 헤더 레이아웃을 정의하는 함수형 컴포넌트. |
| ManageLayout | 관리자 레이아웃을 정의하는 함수형 컴포넌트. |

**main 폴더 : 처음 방문했을 때, 대상에 따라 메인 페이지를 정의하는 컴포넌트.**

폴더주소 : **Questionmark_FE/Frontend/src/components/main**

| 하위  폴더명 | 설명 |
| --- | --- |
| Guest | 방문자(로그인하지 않은 사용자)를 대상으로 하는 랜딩 페이지 역할을 하는 컴포넌트 |
| LoggedInUser | Onboarding을 포함해 사용자를 대상으로 하는 랜딩 페이지 역할을 하는 컴포넌트 |
| mobile | 사용자 인터페이스의 사이드바 메뉴를 구현. |

**mypage 폴더 : 사용자가 로그인 후, 사용자 정보를 변경할 때를 정의하는 컴포넌트.**

폴더주소 : **Questionmark_FE/Frontend/src/components/mypage**

| 하위  폴더명 | 설명 |
| --- | --- |
| DeleteUserModal | 사용자가 회원 탈퇴를 할 때 확인을 위한 모달을 제공하는 역할. |
| DeleteUserSection | 사용자가 계정을 삭제할 수 있는 섹션을 제공, 모달을 통해 비밀번호를 확인하고 계정을 삭제하는 기능을 포함. |
| EditSection | 사용자가 자신의 비밀번호를 수정할 수 있는 섹션을 제공. |
| ProfileSection | 사용자의 이미지와 이름을 화면에 표시. 프로필 이미지를 업로드하는 기능 포함. |

**roadmap 폴더 : 로드맵 관련 기능을 제공하는 컴포넌트 및 기능을 포함한 모듈.**

폴더주소 : **Questionmark_FE/Frontend/src/components/roadmap**

| 하위  폴더명 | 설명 |
| --- | --- |
| common | 로드맵 정보를 입력, 수정 및 삭제하는 기능, 로드맵의 각 스텝(Step)을 관리하고 표시하는 UI를 제공. |
| manage | 멤버 관리, 스텝 관리, TIL 관리 등 로드맵을 관리하는데 필요한 UI를 제공. |
| peopleTIL | 다른 사람의 TIL을 보여주는 UI를 제공 |
| roadmapCreate | 사용자가 페이지를 떠나기 전에 로드맵이 저장되지 않았음을 알리는 모달을 제공. |
| roadmapDetail | 사용자의 로그인 상태와 역할에 따라 제공되는 로드맵 모달을 제공. |
| roadmapList | DUEL 로드맵, 그룹 로드맵, 모집중인 로드맵을 표시, 로드맵에 참여하기 위해 코드를 입력하는 모달을 제공.  |

**tilView 폴더 : TIL 작성 섹션 UI를 구성하는 컴포넌트.**

폴더주소 : **Questionmark_FE/Frontend/src/components/tilView**

| 하위  폴더명 | 설명 |
| --- | --- |
| Footer | TIL 작성 섹션의 하단을 나타내는 컴포넌트. |
| Header | TIL 작성 섹션의 헤더를 나타내는 컴포넌트. |
| mobile | TIL 작성 섹션에서 모바일 화면에서 표시되는 헤더를 정의. |
| TILView |  TIL을 보여주는 섹션을 구성하는 컴포넌트. |

**tilWrite 폴더 : 로드맵 스텝 제목 관리, 오토 세이브 기능, TIL 내용 관리등을 포함한  TIL작성 섹션을 나타내는 컴포넌트.**

폴더주소 : **Questionmark_FE/Frontend/src/components/tilWrite**

| 하위  폴더명 | 설명 |
| --- | --- |
| TILEditor | TIL 작성 섹션에서 사용되는 에디터를 정의. CKEditor를 사용하여 TIL 작성 섹션에서 사용자가 TIL을 작성할 수 있도록 하는 컴포넌트를 포함. |

**constants 폴더 : 프로젝트 내에서 사용되는 상수들을 관리하는 곳, 정규 표현식, 쿼리 키, URL 경로 등과 같은 프로젝트 전반에 걸쳐 사용되는 상수들을 포함.**

폴더주소 : **Questionmark_FE/Frontend/src/constants**

| 하위 파일 명 | 설명 |
| --- | --- |
| links | ‘DUEL_LINKS’라는 객체를 정의. 이 객체는 다양한 경로를 문자열 형태로 정의하여 관리하는 역할. |
| queryKey | React Query의 쿼리 키를 관리하기 위한 객체들을 정의. |
| regex | 정규 표현식을 정의. |

**hooks 폴더 : 공통적으로 사용되는 로직을 재사용하기 위한 커스텀 훅들을 포함**

폴더주소 : **Questionmark_FE/Frontend/src/hooks**

| 하위 파일 명 | 설명 |
| --- | --- |
| useApiError | API 호출 중에 발생하는 에러를 처리하는데 사용됩니다. ‘axios’를 사용하여 API를 호출하고, 발생한 에러에 따라 사용자에게 알리는 역할. |
| useAuth | 사용자의 인증과 관련된 작업을 처리하기 위한 훅. |
| useDrawerState | Drawer(사이드바 또는 패널) 상태를 관리하기 위한 훅을 정의. |
| useInterSectionObserver | 요소의 가시성 상태를 관찰하는 훅을 정의. |
| useModalState | 모달이 열리고 닫히는 상태를 쉽게 관리할 수 있게 하는 훅을 정의. |
| useOnClickOutside | ref를 사용하여 특정 요소 외부를 클릭할 때 실행할 핸들러를 등록하는 훅을 정의. ref로 참조된 요소 외부를 클릭할 때 사용자가 정의한 핸들러가 호출됨. |
| useParamsToUrl | 현재 라우터 경로에 쿼리 매개변수를 추가하여 URL을 변경, 기존 쿼리 매개변수와 새로운 쿼리 매개변수를 병합하여 URL을 변경하는 등의 커스텀 훅을 정의, 사용자는 URL을 조작하여 페이지 이동 및 상태 변경을 할 수 있게 됨. |
| useQueryParam | 주어진 쿼리 매개변수의 값을 읽어오는 커스텀 훅을 정의. 훅을 사용하는 컴포넌트에서는 특정 쿼리 매개변수의 값을 쉽게 읽어올 수 있도록 함. |
| useViewport | 브라우저의 뷰포트 크기를 추적하여 해당 크기에 따라 모바일 환경인지를 판단하는 커스텀 훅을 정의. 그러나 초기 접속 문제가 있어 해당 훅을 사용하지는 않음. |

**utils 폴더 : 유틸리티 함수 및 도우미 함수를 포함. 코드의 재사용성을 높이고 일반적인 기능을 추상화하여 코드의 가독성을 향상시키는 데 사용.**

****폴더주소 : **Questionmark_FE/Frontend/src/utils**  

| 하위 파일 명 | 설명 |
| --- | --- |
| accessToken | 클라이언트 측에서 사용되는 토큰 관리 유틸리티. 토큰을 저장하고 검색하는 데 사용됨. 주로 사용자의 인증 및 권한 관리에 활용됨. |
| cookie | 클라이언트 측에서 쿠키를 처리하는 유틸리티 함수를 정의. 클라이언트 측에서 쿠키를 쉽게 설정, 가져오고 제거할 수 있도록 도와줌. 일반적으로 사용자 인증 및 상태 관리와 관련된 정보를 쿠키에 저장하고 가져오는 데 사용. |
| layout |  페이지 레이아웃을 관리하기 위한 유틸리티 함수와 타입을 정의. 페이지의 레이아웃을 쉽게 관리하고 적용할 수 있도록 도와줌. |
| preventEnterSubmit | HTML Form 요소에서 엔터 키를 눌렀을 때 자동으로 폼을 제출하는 동작을 방지하기 위한 함수. |
