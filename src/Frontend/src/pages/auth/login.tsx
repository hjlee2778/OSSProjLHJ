import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/api';
import TextButton from '@/components/auth/common/TextButton';
import LoginForm from '@/components/auth/login/LoginForm';
import Flex from '@/components/common/Flex';
import DUELHead from '@/components/common/NextHead/DUELHead';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import DUEL_LINKS from '@/constants/links';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const LoginPage = () => {
  const router = useRouter();
  return (
    <AuthPageContainer>
      <DUELHead title="DUEL | 로그인" />
      <LoginForm />
      <Flex justify="space-between" fullWidth>
        <TextButton onClick={() => router.push(DUEL_LINKS.passwordVerify())}>비밀번호 찾기</TextButton>
        <TextButton onClick={() => router.push(DUEL_LINKS.verify())}>회원가입</TextButton>
      </Flex>
    </AuthPageContainer>
  );
};

setLayout(LoginPage, FullHeightLayout);

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  if (!isUserLogin) {
    return { props: {} };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
