"use client"
import TeamCard from './TeamCard';

export default function TeamSection() {
  const team = [
    {
      name: 'Keza Queen',
      role: 'Software Engineer',
      image: '/images/keza.png',
    },
    {
      name: 'Ushi Adhiambo',
      role: 'Software Engineer',
      image: '/images/ushi.png',
    },
    {
      name: 'Faith Koduen',
      role: 'Software Engineer',
      image: '/images/faith.png',
    },
    {
      name: 'Magret David',
      role: 'Software Engineer',
      image: '/images/Jumbe.png',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#2a1e36]/50 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#f9c784] to-[#d47f43] bg-clip-text text-transparent">
          Project Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
