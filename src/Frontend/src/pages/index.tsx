import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import DUELHead from '@/components/common/NextHead/DUELHead';
import Guest from '@/components/main/Guest';
import LoggedInUser from '@/components/main/LoggedInUser';

interface HomeProps {
  isUserLogin: boolean;
}

const Home = ({ isUserLogin }: HomeProps) => {
  return (
    <>
      <DUELHead />
      {isUserLogin ? <LoggedInUser /> : <Guest />}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  if (isUserLogin) {
    return {
      props: {
        isUserLogin: true,
      },
    };
  } else {
    return {
      props: {
        isUserLogin: false,
      },
    };
  }
};
