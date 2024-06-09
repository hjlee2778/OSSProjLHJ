// global.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      // 다른 환경 변수를 여기서 정의할 수 있습니다.
    }
  }