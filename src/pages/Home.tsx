import { 
  BentoHero, 
  BentoProfile, 
  BentoCapability, 
  BentoProjects, 
  BentoCTA,
  BentoProcess  
} from '../components/BentoGrid';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className="max-w-[1360px] mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
        
        {/* Row 1 */}
        <BentoHero />      {/* col-span-8 */}
        <BentoProfile image="/images/jpdevphoto.png" />  {/* col-span-4 */}

        {/* Row 2 */}
        <BentoProjects />  {/* col-span-8 */}
         <BentoCapability />

        {/* Row 3 (Full Width) */}
        <BentoProcess />   {/* col-span-4 */}
        <BentoCTA />       {/* col-span-12 */}
        
      </div>
    </div>
  );
}