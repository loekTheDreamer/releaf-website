import { SubmitHandler, useForm } from 'react-hook-form';

enum RegionEnum {
  africa = 'Africa',
  asia = 'Asia',
  europe = 'Europe',
  northAmerica = 'North America',
  southAmerica = 'South America'
}

enum InquiryEnum {
  general = 'General inquiry',
  partnership = 'Partnership opportunity',
  media = 'Media request',
  support = 'Support',
  other = 'Something else'
}

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  region: RegionEnum;
  inquiry: InquiryEnum;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <section id='contact' className='py-16 md:py-24 bg-[#4b5f1b]'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center'>
          <div className='w-full max-w-3xl opacity-0 animate-fade-in text-center text-[#f1ffbf]'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Contact Us</h2>
            <p className='text-lg text-[#e4f7a5] mb-0'>
              Interested in learning more about ReLeaf or partnering with us?
            </p>
            <p className='text-lg text-[#e4f7a5] mb-8'>
              Get in touch with our team today.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='w-full space-y-4 text-left text-[#5a6140]'
            >
              <div className='grid gap-4 md:grid-cols-2'>
                <label className='sr-only' htmlFor='firstName'>
                  First name
                </label>
                <input
                  {...register('firstName')}
                  id='firstName'
                  type='text'
                  placeholder='First name'
                  className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-3 text-base text-[#4b5f1b] placeholder:text-[#7a8264] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
                />
                <label className='sr-only' htmlFor='lastName'>
                  Last name
                </label>
                <input
                  {...register('lastName')}
                  id='lastName'
                  type='text'
                  placeholder='Last name'
                  className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-3 text-base text-[#4b5f1b] placeholder:text-[#7a8264] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
                />
              </div>
              <label className='sr-only' htmlFor='email'>
                Work email
              </label>
              <input
                {...register('email')}
                id='email'
                type='email'
                placeholder='Work email'
                className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-3 text-base text-[#4b5f1b] placeholder:text-[#7a8264] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
              />
              <div className='relative'>
                <label className='sr-only' htmlFor='region'>
                  Region
                </label>
                <select
                  {...register('region')}
                  id='region'
                  className='w-full appearance-none rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-3 pr-12 text-base text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
                  defaultValue=''
                >
                  <option value='' disabled hidden>
                    Region
                  </option>
                  <option value={RegionEnum.africa}>{RegionEnum.africa}</option>
                  <option value={RegionEnum.asia}>{RegionEnum.asia}</option>
                  <option value={RegionEnum.europe}>{RegionEnum.europe}</option>
                  <option value={RegionEnum.northAmerica}>{RegionEnum.northAmerica}</option>
                  <option value={RegionEnum.southAmerica}>{RegionEnum.southAmerica}</option>
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
                  {...register('inquiry')}
                  id='inquiry'
                  className='w-full appearance-none rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-3 pr-12 text-base text-[#4b5f1b] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
                  defaultValue=''
                >
                  <option value='' disabled hidden>
                    What are you inquiring about
                  </option>
                  <option value={InquiryEnum.general}>{InquiryEnum.general}</option>
                  <option value={InquiryEnum.partnership}>{InquiryEnum.partnership}</option>
                  <option value={InquiryEnum.media}>{InquiryEnum.media}</option>
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
                {...register('message')}
                id='message'
                rows={4}
                placeholder='Now tell us what you want to know'
                className='w-full rounded-xl border border-transparent bg-[#e4f7a5] px-4 py-3 text-base text-[#4b5f1b] placeholder:text-[#7a8264] focus:border-[#9fc93c] focus:outline-none focus:ring-2 focus:ring-[#9fc93c]'
              />
              <button
                type='submit'
                className='mt-6 w-full rounded-full bg-[#7cbc1f] px-6 py-3 text-lg font-semibold text-[#324215] transition-colors hover:bg-[#89c52b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#4b5f1b] focus:ring-[#9fc93c]'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
