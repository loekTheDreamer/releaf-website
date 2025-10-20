import { SubmitHandler, useForm } from 'react-hook-form';
import ActionButton from './ActionButton';
import { FC } from 'react';
import CheckCircleIcon from '../icons/CheckCircleIcon';

export interface NewsLetterFormInput {
  email: string;
}

type Props = {
  newsLetterSignup: (data: NewsLetterFormInput) => void;
  isSuccess: boolean;
};

const NewsletterInputButton: FC<Props> = ({ newsLetterSignup, isSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting }
  } = useForm<NewsLetterFormInput>({
    mode: 'onChange',
    defaultValues: {
      email: ''
    }
  });
  const onSubmit: SubmitHandler<NewsLetterFormInput> = (data) =>
    newsLetterSignup(data);

  return (
    <div className='flex flex-col gap-6 w-full pl-4 sm:pl-0'>
      <label
        htmlFor='email'
        className='text-2xl sm:text-3xl lg:text-4xl text-black'>
        Sign up for our newsletter
      </label>
      {isSuccess ? (
        <p className='text-[#191C1F] text-xl flex items-top sm:items-center gap-2'>
          <CheckCircleIcon className='text-[#75A709]' size={32} />
          You’re in! Thanks for joining ReLeaf’s growing community.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-row items-center gap-1 bg-[#fff] rounded-full px-1 py-1 w-full sm:w-[90%] lg:w-[70%] max-w-lg'>
          <input
            {...register('email', {
              required: 'Please enter your email address'
            })}
            id='email'
            type='email'
            placeholder='Your Email'
            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
            title='Please enter a valid email address'
            className='flex-1 bg-transparent outline-none ml-3 text-sm sm:text-base text-gray-600 placeholder-gray-400 min-w-0'
          />
          <ActionButton
            className='flex-shrink-0 px-4 sm:px-6 lg:px-8 text-sm sm:text-base whitespace-nowrap'
            disabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
          />
        </form>
      )}
    </div>
  );
};

export default NewsletterInputButton;
