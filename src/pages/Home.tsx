import { 
  BentoHero, 
  BentoProfile, 
  BentoCapability, 
  BentoProjects, 
  BentoCTA 
} from '../components/BentoGrid';

export default function Home() {
  return (
    <div className="w-full py-8 md:py-16 px-4 md:px-8">
      {/* This grid IS your dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4auto-rows-[170px] max-w-[1360px] mx-auto">
        <BentoHero />
        <BentoProfile image="/images/jpdevphoto.png" />
        <BentoCapability />
        <BentoProjects />
        <BentoCTA />
      </div>
    </div>
  );
}