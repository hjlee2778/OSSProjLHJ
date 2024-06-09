import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { type PostEmailCodeCheckRequest } from '@/api/auth/type';
import { usePostEmailCodeCheck } from '@/api/hooks/auth';
import DUEL_LINKS from '@/constants/links';

const useCodeCheck = (location: 'register' | 'password', email: string) => {
  const router = useRouter();

  const { postEmailCodeCheckAsync, isLoading } = usePostEmailCodeCheck();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
      code: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<PostEmailCodeCheckRequest> = async (formData) => {
    const data = await postEmailCodeCheckAsync({ body: formData });

    if (data?.code === 200) {
      if (location === 'register') {
        router.push({
          pathname: DUEL_LINKS.register(),
          query: {
            email: email,
          },
        });
      } else {
        router.push({
          pathname: DUEL_LINKS.changePassword(),
          query: {
            email: email,
          },
        });
      }
    }
  };

  return { isLoading, control, handleSubmit, errors, onSubmit };
};

export default useCodeCheck;
