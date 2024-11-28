# MBTI-Project
사용자가 간단한 설문을 통해 자신의 성격 유형을 확인하고, 해당 유형에 대한 설명을 제공받을 수 있습니다. 사용자는 로그인 또는 회원가입 후, 테스트를 진행하며, 결과를 저장하고 확인할 수 있습니다

## 목차   
1. [기능구현](#-기능구현)
2. [사용기능](#-사용기능)


## 기능구현
  📂 API 폴더 (auth.js & testResult.js)
1. auth.js

   auth.js 파일은 사용자 인증 및 프로필 관리와 관련된 API 요청을 담당합니다. 회원가 
   입, 로그인, 사용자 프로필 업데이트와 같은 기능을 제공합니다.

2. testResult.js

   testResult.js는 사용자의 MBTI 테스트 결과를 저장, 가져오기, 삭제, 업데이트하는 API 
  요청을 담당합니다.

  📂 Components 폴더
1. AuthForm

   AuthForm 컴포넌트는 로그인 및 회원가입 폼으로 사용됩니다.
   mode prop(login 또는 signup)에 따라 폼의 입력 필드가 동적으로 변경됩니다.

2. Layout

   Layout 컴포넌트는 애플리케이션의 네비게이션 구조를 정의합니다. 사용자가 인증된 
  상태인지에 따라 다른 네비게이션 링크를 렌더링합니다.

3. ProtectedRoute

   ProtectedRoute 컴포넌트는 인증된 사용자만 특정 경로에 접근할 수 있도록 보호합니다. 인증되지 않은 사용자는 /login 페이지로 리다이렉트합니다.

📂 Pages 폴더
1. HomePage

   HomePage는 사용자가 처음 방문했을 때 보이는 메인 화면입니다.
  MBTI 테스트에 대한 간략한 소개를 제공하며, 테스트 페이지로 이동할 수 있는 링크를 
 포함합니다.

2. LoginPage

   LoginPage는 사용자가 로그인할 수 있는 화면을 제공합니다. 사용자 입력을 처리하고 로그인 API를 호출합니다. 로그인 성공 시 UserContext에 사용자 정보를 저장하고 home으로 리다이렉트합니다.

3. ProfilePage

   ProfilePage는 사용자가 자신의 닉네임을 업데이트할 수 있는 화면입니다. 업데이트된 정보는 UserContext에 반영됩니다. 닉네임 업데이트 폼을 제공하고 업데이트 API 호출 후 사용자 정보를 업데이트합니다.

4. SignupPage

   SignupPage는 사용자가 계정을 생성할 수 있는 화면입니다. 회원가입 완료 후 /login 경로로 리다이렉트됩니다.

5. TestPage

   TestPage는 MBTI 테스트 질문을 표시하고, 사용자의 응답을 처리하여 결과를 생성합니다. 생성된 결과는 API를 통해 저장되며, /results로 이동할 수 있는 버튼이 제공됩니다.

6. TestResultsPage

   TestResultsPage는 저장된 MBTI 테스트 결과를 리스트로 표시합니다. 각 결과는 닉네임, MBTI 유형, 성격 설명을 포함하며, 삭제 기능도 제공됩니다. 삭제 시 현재 로그인한 사용자가 작성한 결과만 삭제 버튼을 표시해줍니다.

## 사용기능
   React / json-server (테스트 결과 저장 및 관리)
