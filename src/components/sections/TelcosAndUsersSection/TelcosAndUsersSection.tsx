import Image from 'next/image';
import InformationCard from './elements/InformationCard';
import { telcoInformations, userInformations } from './elements/information';

const TelcosAndUsersSection = () => {
  return (
    <section
      id='telcos-and-users'
      className='min-h-screen bg-[#ffffff] flex flex-col items-center justify-center gap-1 py-10 lg:py-30'>
      <div className='container flex flex-col lg:flex-row lg:items-stretch mx-auto gap-1 my-auto px-4 lg:px-0'>
        <div className='w-full lg:flex-[0.67] flex'>
          <InformationCard
            title='For Telcos'
            information={telcoInformations}
            backgroundColor='#5A725D'
            iconColor='#EBEFEB'
          />
        </div>
        <div className='relative w-full lg:flex-1 aspect-[940/674] lg:aspect-auto'>
          <Image
            src='/images/telcos.jpg'
            alt='telcos'
            fill
            className='object-cover'
          />
        </div>
      </div>
      <div className='container flex flex-col lg:flex-row lg:items-stretch mx-auto gap-1 my-auto px-4 lg:px-0'>
        <div className='relative w-full lg:flex-1 aspect-[940/674] lg:aspect-auto'>
          <Image
            src='/images/users.jpg'
            alt='telcos'
            fill
            className='object-cover'
          />
        </div>
        <div className='w-full lg:flex-[0.67] flex'>
          <InformationCard
            title='For Users'
            information={userInformations}
            backgroundColor='#CE8A32'
            iconColor='#F5EBD0'
          />
        </div>
      </div>
    </section>
  );
};

export default TelcosAndUsersSection;
