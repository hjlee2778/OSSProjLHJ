import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { PostEmailPasswordRequest } from '@/api/auth/type';
import { usePostLogin } from '@/api/hooks/auth';
import DUEL_LINKS from '@/constants/links';

const useLogin = () => {
  const { postLoginAsync, isLoading } = usePostLogin();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<PostEmailPasswordRequest> = async (formData) => {
    const data = await postLoginAsync({ body: formData });

    if (data?.code === 200) {
      router.replace(DUEL_LINKS.home());
    }
  };

  return { isLoading, control, handleSubmit, errors, onSubmit };
};

export default useLogin;
