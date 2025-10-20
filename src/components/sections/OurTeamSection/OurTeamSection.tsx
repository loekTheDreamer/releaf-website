import Header from './elements/Header';
import HeroTeamCard from './elements/HeroTeamCard';
import TeamCard from './elements/TeamCard';
import { teamMembers, advisors } from './elements/team';

const OurTeamSection = () => {
  return (
    <section id='our-team' className='min-h-screen bg-[#323D34] pt-16 md:pt-24'>
      <div className='container mx-auto px-4'>
        <Header />
        <HeroTeamCard />
      </div>
      <div className='flex flex-col gap-10 pt-10 pb-20'>
        <TeamCard varient='team' teamMembers={teamMembers} />
        <TeamCard varient='advisors' teamMembers={advisors} />
      </div>
    </section>
  );
};

export default OurTeamSection;
