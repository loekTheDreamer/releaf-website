import ActionButton from '@/components/Buttons/ActionButton';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

enum RegionEnum {
  usaAndCanada = 'USA/Canada',
  latinAmerica = 'Latin America',
  africa = 'Africa',
  asia = 'Asia',
  other = 'Other'
}

enum InquiryEnum {
  capital = 'Capital',
  employment = 'Employment',
  partnerships = 'Partnerships',
  productsAndServices = 'Products/Services',
  support = 'Support',
  other = 'Other'
}

export interface ContactFormInput {
  firstName: string;
  lastName: string;
  email: string;
  region: RegionEnum | '';
  inquiry: InquiryEnum | '';
  message: string;
}

type Props = {
  contactUs: (data: ContactFormInput) => void;
};

const ContactForm: FC<Props> = ({ contactUs }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting }
  } = useForm<ContactFormInput>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      region: '',
      inquiry: '',
      message: ''
    }
  });
  const onSubmit: SubmitHandler<ContactFormInput> = (data) => contactUs(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-full space-y-8 text-left text-[#5a6140] flex flex-col justify-center'>
      <div className='grid gap-4 grid-cols-2 '>
        <label className='sr-only' htmlFor='firstName'>
          First name
        </label>
        <input
          {...register('firstName', {
            required: 'Please enter your first name'
          })}
          id='firstName'
          type='text'
          required
          placeholder='First name'
          className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-6 text-base text-[#4b5f1b] placeholder:text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
        />
        <label className='sr-only' htmlFor='lastName'>
          Last name
        </label>
        <input
          {...register('lastName', { required: 'Please enter your last name' })}
          id='lastName'
          type='text'
          placeholder='Last name'
          className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-6 text-base text-[#4b5f1b] placeholder:text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
        />
      </div>
      <label className='sr-only' htmlFor='email'>
        Your email
      </label>
      <input
        {...register('email', {
          required: 'Please enter a valid email address',
          pattern: {
            value: /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
            message: 'Please enter a valid email address'
          }
        })}
        id='email'
        type='email'
        placeholder='Your email'
        className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-6 text-base text-[#4b5f1b] placeholder:text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
      />
      <div className='relative'>
        <label className='sr-only' htmlFor='region'>
          Region
        </label>
        <select
          {...register('region', { required: 'Please select a region' })}
          id='region'
          className='w-full appearance-none rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-6 pr-12 text-base text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'>
          <option value='' disabled hidden>
            Select Region
          </option>
          <option value={RegionEnum.usaAndCanada}>
            {RegionEnum.usaAndCanada}
          </option>
          <option value={RegionEnum.latinAmerica}>
            {RegionEnum.latinAmerica}
          </option>
          <option value={RegionEnum.africa}>{RegionEnum.africa}</option>
          <option value={RegionEnum.asia}>{RegionEnum.asia}</option>
          <option value={RegionEnum.other}>{RegionEnum.other}</option>
        </select>
        <span className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#4b5f1b]'>
          ▾
        </span>
      </div>
      <div className='relative'>
        <label className='sr-only' htmlFor='inquiry'>
          What are you inquiring about?
        </label>
        <select
          {...register('inquiry', {
            required: 'Please select what you are inquiring about'
          })}
          id='inquiry'
          className='w-full appearance-none rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-6 pr-12 text-base text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'>
          <option value='' disabled hidden>
            What are you inquiring about
          </option>
          <option value={InquiryEnum.capital}>{InquiryEnum.capital}</option>
          <option value={InquiryEnum.employment}>
            {InquiryEnum.employment}
          </option>
          <option value={InquiryEnum.partnerships}>
            {InquiryEnum.partnerships}
          </option>
          <option value={InquiryEnum.productsAndServices}>
            {InquiryEnum.productsAndServices}
          </option>
          <option value={InquiryEnum.support}>{InquiryEnum.support}</option>
          <option value={InquiryEnum.other}>{InquiryEnum.other}</option>
        </select>
        <span className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#4b5f1b]'>
          ▾
        </span>
      </div>
      <label className='sr-only' htmlFor='message'>
        Now tell us what you want to know
      </label>
      <textarea
        {...register('message', {
          required: 'Please enter a message',
          minLength: {
            value: 30,
            message: 'Please enter at least 30 characters'
          }
        })}
        id='message'
        rows={8}
        placeholder='Now tell us what you want to know'
        className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-6 text-base text-[#4b5f1b] placeholder:text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c] resize-none'
      />
      <ActionButton
        verticalPadding='4'
        disabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      />
    </form>
  );
};
export default ContactForm;
