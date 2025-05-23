import React from 'react';
import TeamMember from '@/components/TeamMember';

const TeamSection = () => {
  return (
    <section id='team' className='py-16 md:py-24 bg-gray-50'>
      <div className='container px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Team</h2>
          <p className='text-xl text-gray-600'>
            Meet the dedicated team behind ReLeaf
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          <TeamMember
            name='Chris Surdak'
            role='CEO'
            image='/assets/chris.png'
            delay={1}
          />
          <TeamMember
            name='Sara Agarwal'
            role='Marketing Dev'
            image='/assets/sara.png'
            delay={2}
          />
          <TeamMember
            name='Rachel Mace'
            role='Operations'
            image='/assets/rachel.png'
            delay={4}
          />
          <TeamMember
            name='Luke Carelsen'
            role='Senior Frontend'
            image='/assets/luke.jpeg'
            delay={5}
          />
          <TeamMember
            name="Rob O'Leary"
            role='Sales'
            image='/assets/rob.png'
            delay={6}
          />
          <TeamMember
            name='Dilonne Muchingami'
            role='Backend/DevOps'
            image='/assets/dilonne.png'
            delay={7}
          />
          <TeamMember
            name='Choice Omotosho'
            role='Senior Product Design'
            image='/assets/choice.png'
            delay={9}
          />
          <TeamMember
            name='Thomas Subias'
            role='Project Manager'
            image='/assets/thomas.png'
            delay={10}
          />
          <TeamMember
            name='Ritesh Makan'
            role='UX/UI Automation'
            image='/assets/ritesh.png'
            delay={11}
          />
          <TeamMember
            name='Charles Snyder'
            role='Advisory'
            image='/assets/charles.png'
            delay={12}
          />
          <TeamMember
            name='Alejandro Mesa'
            role='Country Lead: Colombia'
            image='/assets/alejandro.png'
            delay={13}
          />
          <TeamMember
            name='Tiago Petreca'
            role='Country Lead: Brazil'
            image='/assets/tiago.png'
            delay={14}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
